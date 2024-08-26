from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .models import SensorData
from .serializer import SensorDataSerializer

class SensorDataView(APIView):
    """
    View para lidar com os dados do sensor.
    """
    
    def get(self, request):
        data = SensorData.objects.all().order_by('-timestamp')
        serializer = SensorDataSerializer(data, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SensorDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request):
        SensorData.objects.all().delete()
        return Response({"message": "Todos os dados foram deletados com sucesso."}, status=status.HTTP_204_NO_CONTENT)
