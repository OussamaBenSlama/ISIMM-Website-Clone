from django.db import models
# from django_summernote.fields import SummernoteTextField
from enseignant.models import  Enseignant

class Admin(models.Model) :
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    profile = models.ImageField(upload_to='profiles/')
class Formation(models.Model):
    CATEGORY_CHOICES = [
        ('Liscence', 'Liscence'),
        ('Ingenieurie', 'Ingenieurie'),
        ('Cycle préparatoire integré', 'Cycle préparatoire integré'),
        ('Mastere', 'Mastere'),
    ]
    title = models.CharField(max_length=255)
    description = models.TextField()
    plan = models.FileField(upload_to='pdfs/')
    category = models.CharField(max_length=255, choices=CATEGORY_CHOICES)
    


#departement model

class Department(models.Model):
    CATEGORY_CHOICES = [
        ('Informatique', 'Informatique'),
        ('Mathematique', 'Mathematique'),
        ('Technologie', 'Technologie'),
         
    ]
    name =  models.CharField(max_length=255, choices=CATEGORY_CHOICES)
    description = models.TextField(blank=True, null=True, help_text="A brief description of the department")
    leader_of_department = models.CharField(max_length=100, help_text="The leader of the department")
    established_date = models.DateField(blank=True, help_text="The date when the department was established")

 
    def __str__(self):
        return self.name
    



class Actualite(models.Model):
    image = models.ImageField(upload_to='actualite_images/')
    title = models.CharField(max_length=255)
    date = models.DateField()
    description = models.TextField()
    category = models.CharField(max_length=20, choices=[
        ('Isimm', 'Isimm'),
        ('Formation', 'Formation'),
        ('Recherche', 'Recherche'),
        ('Entreprise', 'Entreprise'),
        ('Contact', 'Contact')
    ])
    target_audience = models.CharField(max_length=50 , default='tous')
    




class Groupe(models.Model) :
    formation = models.ForeignKey(
        'mainApp.Formation',   
        on_delete=models.SET_NULL,
        null=True,
        blank=True  
    )
    formation_name = models.CharField(max_length=255, blank=True)
    niveau = models.CharField(max_length=50, blank=True) 
    rank = models.CharField(max_length=50, blank=True)
    emploi = models.FileField(upload_to='emplois/', default=None , null=True, blank=True)
    date_creation = models.DateTimeField(auto_now_add=True)  # Automatically set when a new instance is created
    enseignants = models.ManyToManyField(Enseignant, related_name='groupes',blank=True)  # Many-to-many relationship
    
    def save(self, *args, **kwargs):
        if self.formation:
           self.formation_name = self.formation.title
        super().save(*args, **kwargs)
        
class Attestation(models.Model):
    STATE_CHOICES = [
        ('en attente', 'en attente'),
        ('en cours', 'en cours'),
        ('refusé', 'refusé'),
        ('prêt', 'Prêt'),
    ]
    
    id = models.CharField(max_length=50, primary_key=True)
    student_id = models.CharField(max_length=50)
    date_creation = models.DateTimeField(auto_now_add=True)
    state = models.CharField(max_length=20, choices=STATE_CHOICES)