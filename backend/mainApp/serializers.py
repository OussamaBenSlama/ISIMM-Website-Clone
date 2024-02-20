from rest_framework import serializers
from .models import Formation
from .models import Department
from .models import Actualite
from .models import Groupe


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
    class Meta:
        model = Formation
        fields = ['title', 'description', 'plan', 'category']



class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'


class ActualiteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actualite
        fields = '__all__'
        
class GroupeSerializer(serializers.ModelSerializer):
    formation_name = serializers.CharField(source='formation.title', read_only=True)
    emploi = serializers.FileField(max_length=100, use_url=True, required=False)

    class Meta:
        model = Groupe
        fields = ['id','formation', 'niveau', 'formation_name', 'rank','date_creation','emploi','enseignants']

    # def create(self, validated_data):
    #     # Extract the nested formation data from validated_data
    #     formation_data = validated_data.pop('formation')
        
    #     # Create or get the Formation instance
    #     formation_instance, _ = Formation.objects.get_or_create(**formation_data)

    #     # Assign the Formation instance to the Groupe's formation field
    #     validated_data['formation'] = formation_instance

    #     # Create the Groupe instance directly without using a nested serializer
    #     groupe_instance = Groupe.objects.create(**validated_data)

    #     return groupe_instance

