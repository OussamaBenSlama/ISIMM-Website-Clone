from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id', 'cin', 'email', 'fname', 'lname', 'speciality','speciality_name', 'level', 'adresse', 'phoneNumber', 'datebirth', 'parentfname', 'parentlname', 'ImageProfil', 'groupTD', 'codePostal','first_check']


