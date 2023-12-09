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
    
    
@csrf_exempt
@api_view(['POST'])
def create_formation(request):
    if request.method == 'POST':
        
        serializer = FormationSerializer(data=request.data, emploi=request.FILES)
        
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'message': 'Form submitted successfully.'})
        return JsonResponse(serializer.errors, status=400)
    
    return JsonResponse({'message': 'Invalid request method.'}, status=405)
        
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

class ActualiteListView(APIView):
    def get(self, request, *args, **kwargs):
        actualites = Actualite.objects.all()
        serializer = ActualiteSerializer(actualites, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = ActualiteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        try:
          actualite = Actualite.objects.get(pk=kwargs.get('pk'))
          actualite.delete()
          return Response(status=status.HTTP_204_NO_CONTENT)
        except Actualite.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
