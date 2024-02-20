from django.urls import path,include
from .views import EnseignantListCreateView
from .views import add_enseignant_to_group,login_enseignant,enseignant_retrieve_update_destroy,enseignant_list_by_department

urlpatterns = [
    path('by_department/', enseignant_list_by_department, name='enseignant-list-by-department'),
    path('add-enseignant-to-group/',  add_enseignant_to_group, name='add_enseignant_to_group'),
    path('<str:pk>/', enseignant_retrieve_update_destroy, name='enseignant_retrieve_update_destroy'),
    path('summernote/', include('django_summernote.urls')),
    path('login/', login_enseignant, name='login_enseignant'),
    path('', EnseignantListCreateView.as_view(), name='enseignant-list-create'),
    
]