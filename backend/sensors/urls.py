# esp32_api/sensors/urls.py
from django.urls import path
from .views import sensor_data

urlpatterns = [
    path('data/', sensor_data, name='sensor_data'),  # Essa URL agora suporta tanto GET quanto POST
]
