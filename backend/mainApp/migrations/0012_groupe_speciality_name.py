# Generated by Django 5.0.1 on 2024-01-25 15:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainApp', '0011_groupe'),
    ]

    operations = [
        migrations.AddField(
            model_name='groupe',
            name='speciality_name',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]