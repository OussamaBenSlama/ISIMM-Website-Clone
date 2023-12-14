from rest_framework import serializers
from .models import Formation
from .models import Department
from .models import Actualite


class FormationSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=255)
    description = serializers.CharField(style={'base_template': 'textarea.html'})
    plan = serializers.FileField(max_length=100, use_url=True, required=False)  # Add use_url=True for file display

    category_choices = [
        ('Liscence', 'Liscence'),
        ('Ingenieurie', 'Ingenieurie'),
        ('Cycle préparatoire integré', 'Cycle préparatoire integré'),
        ('Mastere', 'Mastere'),
    ]
    category = serializers.ChoiceField(choices=category_choices)

    def create(self, validated_data):
        return Formation.objects.create(**validated_data)



class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'


class ActualiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actualite
        fields = '__all__'