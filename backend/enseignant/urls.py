from django.urls import path,include
from .views import EnseignantListCreateView
from .views import login_enseignant,enseignant_retrieve_update_destroy

urlpatterns = [
    path('summernote/', include('django_summernote.urls')),
    path('login/', login_enseignant, name='login_enseignant'),
    path('<str:pk>/', enseignant_retrieve_update_destroy, name='enseignant_retrieve_update_destroy'),
    path('', EnseignantListCreateView.as_view(), name='enseignant-list-create'),
    
]