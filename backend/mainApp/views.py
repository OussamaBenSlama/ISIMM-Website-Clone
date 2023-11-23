from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Formation
from .serializers import FormationSerializer

@api_view(['GET'])
def get_formations(request):
    queryset = Formation.objects.all()
    serializer = FormationSerializer(queryset, many=True)
    return Response(serializer.data)