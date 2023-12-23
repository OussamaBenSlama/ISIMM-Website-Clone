from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
import logging

from .models import Student
from .serializers import StudentSerializer
from django.http import JsonResponse
from django.contrib.auth.hashers import check_password
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def login_student(request):
    if request.method == 'POST':
        try:
            # Use request.body to access the raw request payload
            data = json.loads(request.body.decode('utf-8'))
            email = data.get('email', '')
            password = data.get('password', '')

            # Check if a student with the given email exists
            try:
                student = Student.objects.get(email=email)
            except Student.DoesNotExist:
                return JsonResponse({'error': 'Invalid email or password'}, status=400)

            # Check if the provided password is correct
            if password != student.password:
                return JsonResponse({'error': 'Invalid email or password'}, status=400)

            # Login successful
            return JsonResponse({'message': 'Login successful'})

        except json.JSONDecodeError as e:
            logger.error(f'Error decoding JSON data: {e}')
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=400)

def check_student_existence(request):
    email = request.GET.get('email', '')
    student_id = request.GET.get('id', '')

    # Check if a student with the given email and ID already exists
    exists = Student.objects.filter(email=email, id=student_id).exists()

    return JsonResponse({'exists': exists})
class StudentListCreateView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            headers = self.get_success_headers(serializer.data)
            response_data = {
                'message': 'Student created successfully',
                'data': serializer.data
            }
            return Response(response_data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            print(serializer.errors)  # Check the console or logs for validation errors
            return Response({'error': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)

class StudentRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        response_data = {
            'message': 'Student updated successfully',
            'data': serializer.data
        }
        return Response(response_data)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response({'message': 'Student deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
