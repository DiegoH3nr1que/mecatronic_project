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

@api_view(['GET', 'POST', 'DELETE'])
def sensor_data(request):
    """
    Exemplo de JSON de resposta do esp32:
        {
            "temperatura": 27.5,
            "pressao": 1009.4,
            "motor_ativo": true
        }
    """

    if request.method == 'POST':
        serializer = SensorDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'GET':
        data = SensorData.objects.all().order_by('-timestamp')
        serializer = SensorDataSerializer(data, many=True)
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        SensorData.objects.all().delete()
        return Response({"message": "Todos os dados foram deletados com sucesso."}, status=status.HTTP_204_NO_CONTENT)
