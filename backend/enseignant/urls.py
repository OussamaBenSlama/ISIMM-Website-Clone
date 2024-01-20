from django.urls import path,include
from .views import EnseignantListCreateView
from .views import login_enseignant

urlpatterns = [
    path('summernote/', include('django_summernote.urls')),
    path('', EnseignantListCreateView.as_view(), name='enseignant-list-create'),
    path('login/', login_enseignant, name='login_enseignant'),
]