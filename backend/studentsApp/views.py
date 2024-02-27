from rest_framework import generics,viewsets
from django.db.models import Count
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Student
from mainApp.models import Groupe,Formation
from .serializers import StudentSerializer, StudentPasswordChangeSerializer , SpecialitySerializer
from django.http import JsonResponse
from django.contrib.auth.hashers import make_password , check_password
import traceback

@api_view(['POST'])
def login_student(request):
    try:
        if request.method == 'POST':
            data = request.data
            email = data.get('email', '')
            password = data.get('password', '')

            student = Student.objects.filter(email=email).first()
            print(check_password(password,student.password))
            

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
    allowed_methods = ['GET', 'PATCH', 'DELETE']  # Add 'PATCH' here

    def get_serializer_class(self):
        if self.request.method == 'PATCH' and 'password' in self.request.data:
            return StudentPasswordChangeSerializer
        return self.serializer_class

@api_view(['PATCH'])
def student_retrieve_update_destroy(request, pk):
    try:
        student = Student.objects.get(pk=pk)
    except Student.DoesNotExist:
        return Response({'error': 'Student not found'}, status=status.HTTP_404_NOT_FOUND)

    # Check if 'password' is present in the request data
    if 'password' in request.data:
        serializer = StudentPasswordChangeSerializer(student, data=request.data, partial=True)
        
    else:
        serializer = StudentSerializer(student, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.update(student,validated_data=request.data)
        serializer.save()
        
        

        return Response({'message': 'Student updated successfully', 'data': serializer.data})

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
    
#affect student to td
@api_view(['POST'])
def affect_student(request):
    try:
        if request.method == 'POST':
            formations = Formation.objects.all()

            for formation in formations:
                for level in range(1, 4):
                    groupes = Groupe.objects.filter(formation=formation, niveau=level)
                    students = Student.objects.filter(speciality=formation, level=level)
                    
                    group_size = groupes.count()
                    
                    if group_size == 0:
                        # Handle case where there are no groups for this formation and level
                        # return JsonResponse({'error': f'No groups found for formation {formation} and level {level}'}, status=status.HTTP_400_BAD_REQUEST)
                        continue
                    
                    for index, student in enumerate(students):
                        group_index = index % group_size  # Use modulo to handle cases where there are more students than groups
                        group = groupes[group_index]
                        student.groupTD = group
                        print(student)
                        student.save(hash=False)  # Save the changes
                        
                        
                        #the problem here
                        
            return JsonResponse({'message': 'Students assigned to groups successfully'})
        else:
            return JsonResponse({'error': 'Invalid request method'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    except Exception as e:
        traceback.print_exc()
        return JsonResponse({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)





####################speciality_list#################################
    
class SpecialityList(APIView):
    allowed_methods = ['GET']  # Allow only GET requests

    def get(self, request, format=None):
        # Get the count of students for each speciality name and level
        queryset = Student.objects.values('speciality_name', 'level').annotate(
            num_students=Count('id')
        ).order_by('speciality_name', 'level')
        

        serializer = SpecialitySerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    

@api_view(['GET'])
def student_list_by_speciality_and_level(request):
    specialty = request.GET.get('speciality')
    level = request.GET.get('level')
    students = Student.objects.filter(speciality_name=specialty, level=level).order_by('speciality_name')
    serializer = StudentSerializer(students, many=True)
    return Response(serializer.data)


















# class StudentList(generics.ListCreateAPIView):
    
#     queryset = Student.objects.all()  # Define queryset to fetch all students
#     serializer_class = StudentSerializer  # Define serializer for student data