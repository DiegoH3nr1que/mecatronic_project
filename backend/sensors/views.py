# esp32_api/sensors/views.py
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import SensorData
from .serializer import SensorDataSerializer
from rest_framework import generics

class SensorDataList(generics.ListAPIView):
    queryset = SensorData.objects.all().order_by('-timestamp')
    serializer_class = SensorDataSerializer


@api_view(['GET', 'POST'])
def sensor_data(request):
    if request.method == 'POST':
        serializer = SensorDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        data = SensorData.objects.all().order_by('-timestamp')  # Ordenando do mais recente para o mais antigo
        serializer = SensorDataSerializer(data, many=True)
        return Response(serializer.data)