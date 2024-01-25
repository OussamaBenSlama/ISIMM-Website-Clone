from django.urls import path,include
from .views import get_formations
from .views import get_ingenieurie_formations
from .views import get_mastere_formations
from .views import get_liscence_formations
from .views import get_prepa_formations
from .views import FormationDeleteView
from .views import AddFormationView,AddGroupeView
from .views import index
from .views import DepartmentDetailView,DepartmentListCreateView
from .views import get_department_informatique
from .views import get_department_mathematique
from .views import get_department_technologie
from .views import ActualiteListView
from .views import ActualiteDeleteView


urlpatterns = [
    path('', index),
    path('summernote/', include('django_summernote.urls')),
    #formation
    path("api/formation", get_formations, name="get_formations"),
    path("api/formation_ing", get_ingenieurie_formations, name="get_ingenieurie_formations"),
    path("api/formation_mastere", get_mastere_formations, name="get_mastere_formations"),
    path("api/formation_liscence", get_liscence_formations, name="get_liscence_formations"),
    path("api/formation_prepa", get_prepa_formations, name="get_prepa_formations"),
    path('api/formation/addformation',AddFormationView.as_view(), name='create-formation'),
    path('api/formation/<int:id>/', FormationDeleteView.as_view(), name='delete-your-model'),
    
    #departements
    path('api/departments/', DepartmentListCreateView.as_view(), name='department-list-create'),
    path('api/departments/<int:pk>/', DepartmentDetailView.as_view(), name='department-detail'),
    path("api/department/informatique", get_department_informatique, name="get_department_informatique"),
    path("api/department/technologie", get_department_technologie, name="get_department_technologie"),
    path("api/department/mathematique", get_department_mathematique, name="get_department_mathematique"),

    #actualites
    # path('api/actualites/', ActualiteListView.as_view(), name='actualite-list'),
    path('api/actualites/<int:id>/', ActualiteDeleteView.as_view(), name='actualite-detail'),
    path('api/actualites/', ActualiteListView.as_view(), {'target_audience': 'tous'}, name='actualite-list-tous'),
    path('api/actualites/etudiant/', ActualiteListView.as_view(), {'target_audience': 'etudiant'}, name='actualite-list-etudiant'),
    path('api/actualites/enseignant/', ActualiteListView.as_view(), {'target_audience': 'enseignant'}, name='actualite-list-enseignant'),
    path('api/actualites/etudiant-enseignant/', ActualiteListView.as_view(), {'target_audience': 'etudiant_enseignant'}, name='actualite-list-etudiant-enseignant'),
    
    #groupes
    path('api/groupes/',AddGroupeView.as_view(), name='create-groupe'),
    path('api/add_group',AddGroupeView.as_view(), name='create-groupe'),

]