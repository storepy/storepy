# Generated by Django 3.2.2 on 2021-10-03 03:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0002_alter_category_page'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='cover',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='shop.productimage', verbose_name='Cover'),
        ),
        migrations.AlterField(
            model_name='product',
            name='images',
            field=models.ManyToManyField(blank=True, related_name='shop_products', to='shop.ProductImage'),
        ),
    ]