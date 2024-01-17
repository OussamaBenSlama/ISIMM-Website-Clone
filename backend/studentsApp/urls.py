from django.urls import path,include
from .views import StudentListCreateView 
from .views import check_student_existence
from .views import login_student , student_retrieve_update_destroy




urlpatterns = [
    path('summernote/', include('django_summernote.urls')),
    path('check/', check_student_existence, name='check_student_existence'),
    path('login/', login_student, name='login_student'),
    path('<str:pk>/', student_retrieve_update_destroy, name='student-retrieve-update-destroy'),
    path('', StudentListCreateView.as_view(), name='student-list-create'),
]