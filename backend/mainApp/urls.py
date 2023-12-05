from django.urls import path,include
from .views import get_formations
from .views import FormationDeleteView
from .views import create_formation
from .views import index
from .views import DepartmentDetailView,DepartmentListCreateView
from .views import ActualiteListView


urlpatterns = [
    path('', index),
    path('api-auth/', include('rest_framework.urls')),
    path('summernote/', include('django_summernote.urls')),
    path("api/formation", get_formations, name="home"),
    path('api/formation/addformation', create_formation, name='create-formation'),
    path('api/formation/<int:id>/', FormationDeleteView.as_view(), name='delete-your-model'),
    path('api/departments/', DepartmentListCreateView.as_view(), name='department-list-create'),
    path('api/departments/<int:pk>/', DepartmentDetailView.as_view(), name='department-detail'),
     path('api/actualites/', ActualiteListView.as_view(), name='actualite-list'),
    path('api/actualites/<int:pk>/', ActualiteListView.as_view(), name='actualite-detail'),
]