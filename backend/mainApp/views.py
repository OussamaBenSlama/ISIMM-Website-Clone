from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Formation
from .serializers import FormationSerializer

from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET'])
def get_formations(request):
    queryset = Formation.objects.all()
    serializer = FormationSerializer(queryset, many=True)
    return Response(serializer.data)




class FormationDeleteView(generics.DestroyAPIView):
    queryset = Formation.objects.all()
    serializer_class = FormationSerializer
    lookup_field = 'id'  # Assuming 'id' is the primary key field name in your model

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        deleted_item = self.perform_delete(instance)
        return Response({'message': 'Item deleted successfully'}, status=status.HTTP_204_NO_CONTENT)

    def perform_delete(self, instance):
        # Your custom deletion logic goes here
        instance.delete()
        # You can perform additional actions after deletion if needed
        return instance
class FormationCreateView(generics.CreateAPIView):
    queryset = Formation.objects.all()
    serializer_class = FormationSerializer
    def post(self, request, *args, **kwargs):
        print("Received POST request")
        print(request.data)  # Print request data for debugging

        serializer = FormationSerializer(data=request.data)
        if serializer.is_valid():
            # ... your existing view logic ...
            return self.create(request, *args, **kwargs)
        else:
            print("Serialization errors:", serializer.errors)
            return Response(serializer.errors, status=400)