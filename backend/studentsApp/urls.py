from django.urls import path,include
from .views import StudentListCreateView 
from .views import check_student_existence
from .views import login_student ,affect_student ,StudentRetrieveUpdateDestroyView
from .views import SpecialityList
from .views import student_list_by_speciality_and_level
 


urlpatterns = [
    path('summernote/', include('django_summernote.urls')),
    path('check/', check_student_existence, name='check_student_existence'),
    path('login/', login_student, name='login_student'),
    path('affect/', affect_student, name='affect_student'),
    path('', StudentListCreateView.as_view(), name='student-list-create'),
    path('specialityList/', SpecialityList.as_view(), name='speciality-list'),
    path('students-by-speciality-and-level/', student_list_by_speciality_and_level, name='students-by-speciality-and-level'),
    path('<str:pk>/', StudentRetrieveUpdateDestroyView.as_view(), name='student-retrieve-update-destroy'),
    
    
     


]