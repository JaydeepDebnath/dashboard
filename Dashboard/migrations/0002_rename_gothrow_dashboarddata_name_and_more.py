# Generated by Django 5.0.6 on 2024-05-23 07:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Dashboard', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dashboarddata',
            old_name='goThrow',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='dashboarddata',
            old_name='revinew',
            new_name='value',
        ),
        migrations.RemoveField(
            model_name='dashboarddata',
            name='totalView',
        ),
    ]