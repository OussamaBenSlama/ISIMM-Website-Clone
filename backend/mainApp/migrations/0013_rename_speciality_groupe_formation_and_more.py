# Generated by Django 5.0.1 on 2024-01-25 16:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0012_groupe_speciality_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='groupe',
            old_name='speciality',
            new_name='formation',
        ),
        migrations.RenameField(
            model_name='groupe',
            old_name='level',
            new_name='niveau',
        ),
    ]