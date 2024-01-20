from django.db import models
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.contrib.auth.hashers import make_password

# Create your models here.

class Enseignant(models.Model):
    id = models.CharField(primary_key=True, max_length=20)
    cin = models.CharField(max_length=20)

    email = models.EmailField(unique=True)
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    password = models.CharField(max_length=50, blank=True)

    department = models.ForeignKey(
        'mainApp.Department',   
        on_delete=models.SET_NULL,
        null=True, 
    )
    department_name = models.CharField(max_length=100,blank=True)
    cadre =  models.CharField(max_length=255)
    
    adresse = models.CharField(max_length=255, blank=True)
    phoneNumber = models.CharField(max_length=15, blank=True)
    datebirth = models.DateField(null=True, blank=True)
    ImageProfil = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    first_check = models.BooleanField(default=False)
    
    def save(self, *args, **kwargs):
         
        # Set the name of the speciality before saving
        if self.department:
            self.department_name = self.department.name
        if(self.password == "") :
            self.password = str(self.id)
        self.password = make_password(self.password) 
        super().save(*args, **kwargs)
        if(self.first_check == False) :
            subject = 'Account Verification'
            message = render_to_string('verification_email_template.html', {'user': self})
            plain_message = strip_tags(message)
            from_email = 'mahaazouzi45@gmail.com'
            to_email = self.email

            send_mail(subject, plain_message, from_email, [to_email], html_message=message)