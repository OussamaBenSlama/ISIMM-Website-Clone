from django.db import models
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.contrib.auth.hashers import make_password


class Student(models.Model):
    id = models.CharField(primary_key=True, max_length=20)
    cin = models.CharField(max_length=20)

    email = models.EmailField(unique=True)
    fname = models.CharField(max_length=100)
    lname = models.CharField(max_length=100)
    password = models.CharField(max_length=50, blank=True)

    speciality = models.ForeignKey(
        'mainApp.Formation',   
        on_delete=models.SET_NULL,
        null=True,
        blank=True  
    )
    speciality_name = models.CharField(max_length=255, blank=True)  # New field for the name of the speciality

    level = models.CharField(max_length=50, blank=True)  

    adresse = models.CharField(max_length=255, blank=True)
    phoneNumber = models.CharField(max_length=15, blank=True)
    datebirth = models.DateField(null=True, blank=True)
    parentfname = models.CharField(max_length=100, blank=True)
    parentlname = models.CharField(max_length=100, blank=True)
    ImageProfil = models.ImageField(upload_to='profile_images/', blank=True, null=True)
    groupTD = models.CharField(max_length=50, blank=True)
    codePostal = models.CharField(max_length=10, blank=True)
    first_check = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
         
        # Set the name of the speciality before saving
        if self.speciality:
            self.speciality_name = self.speciality.title 
            
        if(self.password == "") :
            self.password = str(self.id)
        # Hash the password before saving
        
        self.password = make_password(self.password) 
        super().save(*args, **kwargs)
         
        subject = 'Account Verification'
        message = render_to_string('verification_email_template.html', {'user': self})
        plain_message = strip_tags(message)
        from_email = 'mahaazouzi45@gmail.com'
        to_email = self.email

        # send_mail(subject, plain_message, from_email, [to_email], html_message=message)

    def __str__(self):
        return f"{self.email} - {self.id}"
    def set_password(self,p) :
        self.password = p