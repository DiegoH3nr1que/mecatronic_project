# Generated by Django 5.0.6 on 2024-08-28 01:24

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("sensors", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="sensordata",
            old_name="motor_ligado",
            new_name="motor_ativo",
        ),
    ]
