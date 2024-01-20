from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.views import APIView

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Formation,Department,Actualite
from .serializers import FormationSerializer,DepartmentSerializer,ActualiteSerializer
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



class FormationDeleteView(generics.DestroyAPIView):
    queryset = Formation.objects.all()
    serializer_class = FormationSerializer
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
    
    
class AddFormationView(APIView):
    def get(self, request, *args, **kwargs):
        formations = Formation.objects.all()
        serializer = FormationSerializer(formations, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        print(request.data)
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
        if target_audience == 'tous':
            return Actualite.objects.filter(target_audience='tous')
        elif target_audience == 'etudiant':
            return Actualite.objects.filter(target_audience='etudiant')
        elif target_audience == 'enseignant':
            return Actualite.objects.filter(target_audience='enseignant')
        elif target_audience == 'etudiant_enseignant':
            # Filter for rows where both 'etudiant' and 'enseignant' are present in the list
            return Actualite.objects.filter(target_audience__contains='etudiant').filter(target_audience__contains='enseignant')
        else:
            return Actualite.objects.none()
    def get(self, request, target_audience='tous', *args, **kwargs):
        actualites = self.get_queryset(target_audience)
        serializer = ActualiteSerializer(actualites, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
        print(request.data)
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
