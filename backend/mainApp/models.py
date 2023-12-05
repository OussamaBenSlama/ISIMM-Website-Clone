from django.db import models
# from django_summernote.fields import SummernoteTextField


class Admin(models.Model) :
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    profile = models.ImageField(upload_to='profiles/')
class Formation(models.Model):
    CATEGORY_CHOICES = [
        ('Liscence', 'Liscence'),
        ('Ingenieurie', 'Ingenieurie'),
        ('Cycle préparatoire integré', 'Cycle préparatoire integré'),
        ('Mastere de recherche', 'Mastere de recherche'),
        ('Mastere professionelle', 'Mastere professionelle'),
    ]
    title = models.CharField(max_length=255)
    description = models.TextField()
    plan = models.FileField(upload_to='pdfs/')
    category = models.CharField(max_length=255, choices=CATEGORY_CHOICES)
    


#departement model

class Department(models.Model):
    name = models.CharField(max_length=100, unique=True, help_text="The name of the department")
    description = models.TextField(blank=True, null=True, help_text="A brief description of the department")
    leader_of_department = models.CharField(max_length=100, help_text="The leader of the department")
    established_date = models.DateField(blank=True, help_text="The date when the department was established")

 
    def __str__(self):
        return self.name
    



class Actualite(models.Model):
    image = models.ImageField(upload_to='actualite_images/')
    date = models.DateField()
    description = models.TextField()
    category = models.CharField(max_length=20, choices=[
        ('Isimm', 'Isimm'),
        ('Formation', 'Formation'),
        ('Recherche', 'Recherche'),
        ('Entreprise', 'Entreprise'),
        ('Contact', 'Contact')
    ])