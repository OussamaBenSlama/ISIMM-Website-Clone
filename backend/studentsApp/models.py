from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

def generate_student_id():
    import random
    return random.randint(100000, 999999)

class Student(models.Model):
    id = models.IntegerField(primary_key=True, unique=True)
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    email = models.EmailField(unique=True)  
    cin = models.CharField(max_length=8)
    