from rest_framework import serializers
from .models import Student
from django.contrib.auth.hashers import make_password 
from rest_framework.validators import UniqueValidator

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'cin', 'email', 'fname', 'lname', 'speciality', 'speciality_name', 'level', 'adresse', 'phoneNumber', 'datebirth', 'parentfname', 'parentlname', 'ImageProfil', 'groupTD', 'codePostal', 'first_check']
        extra_kwargs = {
            'password': {'write_only': True}  # Exclude password from responses
        }
class StudentPasswordChangeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = '__all__'

    def update(self, instance, validated_data):
        instance.cin = validated_data.get('cin', instance.cin)
        instance.email = validated_data.get('email', instance.email)
        instance.fname = validated_data.get('fname', instance.fname)
        instance.lname = validated_data.get('lname', instance.lname)
        # instance.speciality = validated_data.get('speciality', instance.speciality)
        instance.speciality_name = validated_data.get('speciality_name', instance.speciality_name)
        instance.level = validated_data.get('level', instance.level)
        instance.adresse = validated_data.get('adresse', instance.adresse)
        instance.phoneNumber = validated_data.get('phoneNumber', instance.phoneNumber)
        instance.datebirth = validated_data.get('datebirth', instance.datebirth)
        instance.parentfname = validated_data.get('parentfname', instance.parentfname)
        instance.parentlname = validated_data.get('parentlname', instance.parentlname)
        instance.ImageProfil = validated_data.get('ImageProfil', instance.ImageProfil)
        instance.groupTD = validated_data.get('groupTD', instance.groupTD)
        instance.codePostal = validated_data.get('codePostal', instance.codePostal)
        instance.first_check = validated_data.get('first_check', instance.first_check)

        # Update the password only if it's present in the validated_data
        if 'password' in validated_data:
            instance.password = validated_data['password']

        instance.save()
        
        return instance

    # def validate_id(self, value):
    #     # Custom validation for uniqueness of id
    #     existing_student = Student.objects.filter(id=value).exclude(pk=self.instance.pk if self.instance else None).first()
    #     if existing_student:
    #         raise serializers.ValidationError('This id is already in use by another student.')
    #     return value


class SpecialitySerializer(serializers.Serializer):
    speciality_name = serializers.CharField()
    level = serializers.CharField()
    num_students = serializers.IntegerField()
    group_number = serializers.IntegerField(default=1)  # Add group_number with default value 1

    class Meta:
        fields = ['speciality_name', 'level', 'num_students', 'group_number']