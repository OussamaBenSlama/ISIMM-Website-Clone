from rest_framework import serializers
from .models import Formation
from .models import Department


class FormationSerializer(serializers.ModelSerializer):
    emploi = serializers.FileField(required=False)  # Assuming emploi is the file upload field

    class Meta:
        model = Formation
        fields = '__all__'



class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'