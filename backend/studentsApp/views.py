from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Student
from .serializers import StudentSerializer
from django.http import JsonResponse
from django.contrib.auth.hashers import check_password

@api_view(['POST'])
def login_student(request):
    try:
        if request.method == 'POST':
            data = request.data
            email = data.get('email', '')
            password = data.get('password', '')

            student = Student.objects.filter(email=email).first()

            if student and check_password(password, student.password):
                serializer = StudentSerializer(student)  # Serialize the student object
                serialized_data = serializer.data
                serialized_data['message'] = 'Login successful'
                
                # Remove the password field from the response
                serialized_data.pop('password', None)
                
                return JsonResponse(serialized_data)
            else:
                return JsonResponse({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)
    except Exception as e:
        return JsonResponse({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def check_student_existence(request):
    try:
        email = request.GET.get('email', '')
        student_id = request.GET.get('id', '')

        exists = Student.objects.filter(email=email, id=student_id).exists()

        return JsonResponse({'exists': exists})
    except Exception as e:
        return JsonResponse({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class StudentListCreateView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def create(self, request, *args, **kwargs):
        try:
            serializer = self.get_serializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            response_data = {
                'message': 'Student created successfully',
                'data': serializer.data
            }
            return Response(response_data, status=status.HTTP_201_CREATED, headers=headers)
        except Exception as e:
            return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class StudentRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def update(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)
            response_data = {
                'message': 'Student updated successfully',
                'data': serializer.data
            }
            return Response(response_data)
        except Exception as e:
            return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def destroy(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            self.perform_destroy(instance)
            return Response({'message': 'Student deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'error': 'Internal Server Error'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
