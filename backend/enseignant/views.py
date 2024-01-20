from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Enseignant
from .serializers import EnseignantSerializer
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
