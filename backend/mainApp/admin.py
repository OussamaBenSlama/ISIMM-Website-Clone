from django.contrib import admin
from .models import Formation,Department

# Register your models here.


class FormationAdmin(admin.ModelAdmin):
    list_display = [field.name for field in Formation._meta.get_fields()]
    

admin.site.register(Formation, FormationAdmin)
admin.site.register(Department)