from django.contrib import admin
from .models import Formation,Department,Actualite,Groupe

# Register your models here.


class FormationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Formation._meta.get_fields()]
    
class GroupeAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Groupe._meta.get_fields()]
    

admin.site.register(Formation)
admin.site.register(Department)
admin.site.register(Actualite)
admin.site.register(Groupe)