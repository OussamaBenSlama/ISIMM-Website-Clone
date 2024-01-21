from rest_framework import serializers
from .models import Enseignant


class EnseignantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enseignant
        fields = ['id', 'cin', 'email', 'fname', 'lname', 'department', 'department_name', 'cadre', 'adresse', 'phoneNumber', 'datebirth',  'ImageProfil',  'first_check']
        extra_kwargs = {
            'password': {'write_only': True}  # Exclude password from responses
        }
        
class EnseignantPasswordChangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enseignant
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.cin = validated_data.get('cin', instance.cin)
        instance.email = validated_data.get('email', instance.email)
        instance.fname = validated_data.get('fname', instance.fname)
        instance.lname = validated_data.get('lname', instance.lname)
        instance.department_name = validated_data.get('department_name', instance.department_name)
        instance.cadre = validated_data.get('cadre', instance.cadre)
        instance.adresse = validated_data.get('adresse', instance.adresse)
        instance.phoneNumber = validated_data.get('phoneNumber', instance.phoneNumber)
        instance.datebirth = validated_data.get('datebirth', instance.datebirth)
        instance.ImageProfil = validated_data.get('ImageProfil', instance.ImageProfil)
        instance.first_check = validated_data.get('first_check', instance.first_check)

        # Update the password only if it's present in the validated_data
        if 'password' in validated_data:
            instance.password = validated_data['password']

        instance.save()
        
        return instance