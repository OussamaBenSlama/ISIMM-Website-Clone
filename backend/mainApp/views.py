from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Formation,Department
from .serializers import FormationSerializer,DepartmentSerializer
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status

def index(request):
    return render(request,'index.html')


@api_view(['GET'])
def get_formations(request):
    queryset = Formation.objects.all()
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
        


class DepartmentListCreateView(generics.ListCreateAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer

class DepartmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Department.objects.all()
    serializer_class = DepartmentSerializer