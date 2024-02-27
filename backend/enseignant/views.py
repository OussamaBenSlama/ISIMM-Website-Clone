from rest_framework import generics
from rest_framework.decorators import api_view
 
from django.db.models import Q

from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import Enseignant  
from mainApp.models import Groupe
from .serializers import EnseignantSerializer,EnseignantPasswordChangeSerializer
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password , check_password
import logging


#logger is used to debug
logger = logging.getLogger(__name__)

#create student view
class EnseignantListCreateView(generics.ListCreateAPIView):
    queryset = Enseignant.objects.all()
    serializer_class = EnseignantSerializer

    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            print(serializer.data)
            headers = self.get_success_headers(serializer.data)
            response_data = {
                'message': 'Student created successfully',
                'data': serializer.data
            }
            return Response(response_data, status=status.HTTP_201_CREATED, headers=headers)
        except Exception as e:
            # Log the exception details
            logger.error(f"An error occurred while creating an Enseignant: {str(e)}")
            
            # Return a more informative error response
            return Response({'error': 'Internal Server Error. Please check the server logs for more information.'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


#login view
@api_view(['POST'])
def login_enseignant(request):
    try:
        if request.method == 'POST':
            data = request.data
            email = data.get('email', '')
            password = data.get('password', '')

            enseignant = Enseignant.objects.filter(email=email).first()

            if enseignant and check_password(password, enseignant.password):
                serializer = EnseignantSerializer(enseignant)  # Serialize the prof object
                serialized_data = serializer.data
                serialized_data['message'] = 'Login successful'
                
                # Remove the password field from the response
                serialized_data.pop('password', None)
                
                return JsonResponse(serialized_data)
            else:
                return JsonResponse({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return JsonResponse({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


#update in first login 
@api_view(['PATCH'])
def enseignant_retrieve_update_destroy(request, pk):
    try:
        prof = Enseignant.objects.get(pk=pk)
    except Enseignant.DoesNotExist:
        return Response({'error': 'prof not found'}, status=status.HTTP_404_NOT_FOUND)

    # Check if 'password' is present in the request data
    if 'password' in request.data:
        serializer = EnseignantPasswordChangeSerializer(prof, data=request.data, partial=True)
        
    else:
        serializer = Enseignant(prof, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.update(prof,validated_data=request.data)
        serializer.save()
        
        print("--------")
        print(serializer.data)

        return Response({'message': 'prof updated successfully', 'data': serializer.data})

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def enseignant_list_by_department(request):
    department = request.GET.get('department_name')
    cadre = request.GET.get('cadre')
    queryset = Enseignant.objects.all()

    if department or cadre:
        # Define initial condition as True
        conditions = Q()

        # Add conditions based on provided parameters
        if department:
            conditions &= Q(department_name=department)
        if cadre:
            conditions &= Q(cadre=cadre)
        
        # Filter queryset based on combined conditions and order by 'department_name'
        enseignants = queryset.filter(conditions).order_by('department_name')
    else:
        # If both department and cadre are empty, return all enseignants ordered by 'department_name'
        enseignants = queryset.order_by('department_name')

    serializer = EnseignantSerializer(enseignants, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_enseignant_to_group(request):
    if request.method == 'POST':
        group_id = request.data.get('group_id')
        enseignant_ids = request.data.get('enseignant_ids')  

        group = get_object_or_404(Groupe, pk=group_id)

        for enseignant_id in enseignant_ids:
            enseignant = get_object_or_404(Enseignant, pk=enseignant_id)
            group.enseignants.add(enseignant)

        return Response({'message': 'Enseignants added to group successfully.'}, status=status.HTTP_200_OK)

    return Response({'error': 'Method not allowed.'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)