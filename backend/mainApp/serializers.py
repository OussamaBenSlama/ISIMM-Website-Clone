from rest_framework import serializers
from .models import Formation
from .models import Department
from .models import Actualite


class FormationSerializer(serializers.ModelSerializer):
    emploi = serializers.FileField(required=False)  # Assuming emploi is the file upload field

    class Meta:
        model = Formation
        fields = '__all__'



class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'


class ActualiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actualite
        fields = '__all__'