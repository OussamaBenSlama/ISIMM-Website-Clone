from django.contrib import admin
from .models import Formation,Department,Actualite

# Register your models here.


class FormationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Formation._meta.get_fields()]
    

admin.site.register(Formation)
admin.site.register(Department)
admin.site.register(Actualite)