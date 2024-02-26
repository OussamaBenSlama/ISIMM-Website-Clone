from django.db import models
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import is_password_usable



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
    groupTD = models.ForeignKey(
        'mainApp.Groupe',   
        on_delete=models.SET_NULL,
        null=True,
        blank=True ,
        )
    groupe_rank = models.CharField(max_length=50, blank=True)  # New field for the rank of the associated group
    codePostal = models.CharField(max_length=10, blank=True)
    first_check = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        hash_password = kwargs.pop('hash', True)
        # Set the name of the speciality before saving
        if self.speciality:
            self.speciality_name = self.speciality.title 
            
        if not self.password :
            self.password = str(self.id)
        
        if hash_password :
            self.password = make_password(self.password) 
            
        if self.groupTD:
            self.groupe_rank = self.groupTD.rank
        
        super().save(*args, **kwargs)
         
        if(self.first_check == False) : 
            subject = 'Account Verification'
            message = render_to_string('verification_email_template.html', {'user': self})
            plain_message = strip_tags(message)
            from_email = 'mahaazouzi45@gmail.com'
            to_email = self.email

            send_mail(subject, plain_message, from_email, [to_email], html_message=message)

    def __str__(self):
        return f"{self.email} - {self.id}"
    def set_password(self,p) :
        self.password = p