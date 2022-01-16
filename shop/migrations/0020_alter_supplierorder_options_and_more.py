# Generated by Django 4.0.1 on 2022-01-15 01:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0019_alter_product_stage_alter_supplierorder_items_stage'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='supplierorder',
            options={'ordering': ('-created',), 'verbose_name': 'Supplier Order', 'verbose_name_plural': 'Supplier Orders'},
        ),
        migrations.AlterField(
            model_name='supplierorder',
            name='items',
            field=models.ManyToManyField(blank=True, related_name='supplier_orders', to='shop.Product', verbose_name='Products'),
        ),
    ]