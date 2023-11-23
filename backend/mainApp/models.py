from django.db import models
from django_summernote.fields import SummernoteTextField

class Formation(models.Model):
    CATEGORY_CHOICES = [
        ('Liscence', 'Liscence'),
        ('Ingenieurie', 'Ingenieurie'),
        ('Cycle préparatoire integré', 'Cycle préparatoire integré'),
        ('Mastere de recherche', 'Mastere de recherche'),
        ('Mastere professionelle', 'Mastere professionelle'),
    ]
    title = models.CharField(max_length=255)
    description = SummernoteTextField()
    plan = models.FileField(upload_to='pdfs/')
    category = models.CharField(max_length=255, choices=CATEGORY_CHOICES)
    
