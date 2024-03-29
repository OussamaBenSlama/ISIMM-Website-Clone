from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Formation,Department,Actualite,Groupe,Attestation
from .serializers import FormationSerializer,DepartmentSerializer,ActualiteSerializer,GroupeSerializer,AttestationSerializer
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser


def index(request):
    return render(request,'index.html')

#formation
@api_view(['GET'])
def get_formations(request):
    queryset = Formation.objects.all()
    serializer = FormationSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_ingenieurie_formations(request):
    queryset = Formation.objects.filter(category='Ingenieurie')
    serializer = FormationSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_mastere_formations(request):
    queryset = Formation.objects.filter(category='Mastere')
    serializer = FormationSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_liscence_formations(request):
    queryset = Formation.objects.filter(category='Liscence')
    serializer = FormationSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_prepa_formations(request):
    queryset = Formation.objects.filter(category='Cycle préparatoire integré')
    serializer = FormationSerializer(queryset, many=True)
    return Response(serializer.data)



class FormationDeleteView(generics.RetrieveUpdateDestroyAPIView):
     
    queryset = Formation.objects.all()
    serializer_class = FormationSerializer
    lookup_field = 'id'  # Assuming 'id' is the primary key field name in your model


    # def update(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     serializer = self.get_serializer(instance, data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_update(serializer)
    #     return Response(serializer.data)
    

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     deleted_item = self.perform_delete(instance)
    #     return Response({'message': 'Item deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

    # def perform_delete(self, instance):
    #     # Your custom deletion logic goes here
    #     instance.delete()
    #     # You can perform additional actions after deletion if needed
    #     return instance
    
    
class AddFormationView(APIView):
    def get(self, request, *args, **kwargs):
        formations = Formation.objects.all()
        serializer = FormationSerializer(formations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        serializer = FormationSerializer(data=request.data)
        if serializer.is_valid():
            formation = serializer.save()
            response_data = FormationSerializer(formation).data
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
#departements

class DepartmentListCreateView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer


@api_view(['GET'])
def get_department_informatique(request):
    queryset = Department.objects.filter(name='Informatique')
    serializer = DepartmentSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_department_mathematique(request):
    queryset = Department.objects.filter(name='Mathematique')
    serializer = DepartmentSerializer(queryset, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_department_technologie(request):
    queryset = Department.objects.filter(name='Technologie')
    serializer = DepartmentSerializer(queryset, many=True)
    return Response(serializer.data)

#Actualites

########################Actualites###########################

class ActualiteListView(APIView):
    def get_queryset(self, target_audience):
        print(target_audience)
        if target_audience == 'tous':
            print(Actualite.objects.filter(target_audience__contains="'tous'"))
            return Actualite.objects.filter(target_audience__contains="'tous'")
        elif target_audience == 'etudiant':
            return Actualite.objects.filter(target_audience__contains="'etudiant'")
        elif target_audience == 'enseignant':
            return Actualite.objects.filter(target_audience__contains="'enseignant'")
        elif target_audience == 'etudiant_enseignant':
            # Filter for rows where both 'etudiant' and 'enseignant' are present in the list
            return Actualite.objects.filter(target_audience__contains="'etudiant'").filter(target_audience__contains="'enseignant'")
        else:
            return Actualite.objects.none()
    def get(self, request, target_audience='tous', *args, **kwargs):
        actualites = self.get_queryset(target_audience)
        serializer = ActualiteSerializer(actualites, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
         
        serializer = ActualiteSerializer(data=request.data)
        if serializer.is_valid():
            target_audience = request.data.get('target_audience', 'tous')
            # Split the comma-separated values to a list
            target_audience = target_audience.split(',')

            # Set the target_audience field
            serializer.validated_data['target_audience'] = target_audience

            actualite = serializer.save()
            response_data = ActualiteSerializer(actualite).data
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ActualiteDeleteView(generics.DestroyAPIView):
    queryset = Actualite.objects.all()
    serializer_class = ActualiteSerializer
    lookup_field = 'id'  # Assuming 'id' is the primary key field name in your model

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        deleted_item = self.perform_delete(instance)
        return Response({'message': 'Item deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

    def perform_delete(self, instance):
        # Your custom deletion logic goes here
        instance.delete()
        # You can perform additional actions after deletion if needed
        return instance







#groupe
class AddGroupeView(APIView):
    def get(self, request, *args, **kwargs):
        groupes = Groupe.objects.all()
        serializer = GroupeSerializer(groupes, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = GroupeSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            groupe = serializer.save()
            response_data = GroupeSerializer(groupe).data
            return Response(response_data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])   
def delete_Groupe(request):
    # Extract the ID of the group to delete from the request data
    group_id = request.data.get('id', None)
    group_formation = request.data.get('formation', None)
    group_level = request.data.get('level', None)
    
    print(group_id,group_formation,group_level)
    if group_id is None:
        return JsonResponse({'error': 'Group ID is missing'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        # Retrieve the group by ID and delete it
        group = Groupe.objects.get(id=group_id)
        group.delete()
    except Groupe.DoesNotExist:
        return JsonResponse({'error': 'Group does not exist'}, status=status.HTTP_404_NOT_FOUND)

    # Retrieve the remaining groups with the same formation and niveau, sorted by date_creation
    remaining_groups = list(Groupe.objects.filter(formation=group_formation, niveau=group_level).order_by('date_creation'))

    # Update the ranks of the remaining groups
    for index, remaining_group in enumerate(remaining_groups):
        remaining_group.rank = index + 1
        remaining_group.save()

    return JsonResponse({'message': 'Group deleted successfully'}, status=status.HTTP_200_OK)


@api_view(['PUT'])   
def update_Groupe(request):
    # Extract the ID of the group to update from the request data
    group_id = request.data.get('id', None)

    if group_id is None:
        return JsonResponse({'error': 'Group ID is missing'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        # Retrieve the group by ID
        groupe = Groupe.objects.get(id=group_id)
    except Groupe.DoesNotExist:
        return JsonResponse({'error': 'Group does not exist'}, status=status.HTTP_404_NOT_FOUND)

    # Create a serializer instance with the existing group instance and the data from the request
    serializer = GroupeSerializer(instance=groupe, data=request.data, partial=True)

    if serializer.is_valid():
        # Update the group attributes
        serializer.save()
        return JsonResponse({'message': 'Group updated successfully'}, status=status.HTTP_200_OK)
    else:
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
#attestation views 
@api_view(['POST'])
def save_attestation(request):
    serializer = AttestationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

    