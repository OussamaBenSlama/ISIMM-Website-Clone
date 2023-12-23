from django.urls import path,include
from .views import StudentListCreateView, StudentRetrieveUpdateDestroyView
from .views import check_student_existence
from .views import login_student



urlpatterns = [
    path('summernote/', include('django_summernote.urls')),
    path('', StudentListCreateView.as_view(), name='student-list-create'),
    path('<int:pk>/', StudentRetrieveUpdateDestroyView.as_view(), name='student-retrieve-update-destroy'),
    path('check/', check_student_existence, name='check_student_existence'),
    path('login/', login_student, name='login_student'),
]