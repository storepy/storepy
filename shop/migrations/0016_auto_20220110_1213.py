# Generated by Django 3.2.2 on 2022-01-10 17:13

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0015_auto_20220110_1150'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='email',
            field=models.EmailField(blank=True, error_messages={'invalid': 'Entrez une adresse email valide'}, max_length=254, null=True, verbose_name='Email'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='name',
            field=models.CharField(max_length=99, validators=[django.core.validators.MinLengthValidator(4, message='Veuillez entrer votre nom et prénom.')], verbose_name='Name'),
        ),
        migrations.AlterField(
            model_name='lead',
            name='number',
            field=models.CharField(max_length=50, validators=[django.core.validators.MinLengthValidator(4, message='Veuillez entrer votre numéro de téléphone.')], verbose_name='Number'),
        ),
    ]