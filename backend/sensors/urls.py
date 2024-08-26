from django.urls import path
from .views import SensorDataView

urlpatterns = [
    path('api/data/', SensorDataView.as_view(), name='sensor_data'),
]
