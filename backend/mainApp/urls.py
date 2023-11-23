from django.urls import path,include
from .views import get_formations

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('summernote/', include('django_summernote.urls')),
    path("", get_formations, name="home"),
]