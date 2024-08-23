# esp32_api/sensors/models.py
from django.db import models

class SensorData(models.Model):
    temperatura = models.FloatField()
    pressao = models.FloatField()
    motor_ligado = models.BooleanField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.temperatura}°C, {self.pressao} hPa, Motor: {'Ligado' if self.motor_ligado else 'Desligado'}"
