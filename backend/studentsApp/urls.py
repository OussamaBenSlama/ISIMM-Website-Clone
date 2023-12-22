from django.urls import path,include

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('summernote/', include('django_summernote.urls')),
]