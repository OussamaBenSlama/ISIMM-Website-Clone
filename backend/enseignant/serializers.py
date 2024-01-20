from rest_framework import serializers
from .models import Enseignant


class EnseignantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enseignant
        fields = ['id', 'cin', 'email', 'fname', 'lname', 'department', 'department_name', 'cadre', 'adresse', 'phoneNumber', 'datebirth',  'ImageProfil',  'first_check']
        extra_kwargs = {
            'password': {'write_only': True}  # Exclude password from responses
        }