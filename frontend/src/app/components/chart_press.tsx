"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart";

interface SensorData {
  temperatura: number;
  pressao: number;
  motor_ativo: boolean;
  timestamp: string; // Supondo que o timestamp seja uma string ou Date
}

const chartConfig = {
  pressao: {
    label: "Pressão",
    color: "hsl(var(--background))",
  },
} satisfies ChartConfig;

interface CustomTooltipProps {
  active?: boolean;
  payload?: any;
}

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg rounded-md text-sm text-black">
        <p className="mb-1">{new Date(payload[0].payload.timestamp).toLocaleTimeString()}</p>
        <p>
          <span className="font-semibold">{chartConfig.pressao.label}</span>
          <span className="ml-2">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export function ChartPressComponent() {
  const [data, setData] = useState<SensorData[]>([]);
  const [lastPressure, setLastPressure] = useState<number | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://diegohenrique.pythonanywhere.com/api/data/");
      const OrderData = response.data.sort((a: SensorData, b: SensorData) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      );
      setData(OrderData); // Ordena os dados por timestamp antes de definir o estado
      if (OrderData.length > 0) {
        setLastPressure(OrderData[OrderData.length - 1].pressao); // Define o último valor de pressão
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchData(); // Busca inicial de dados

    const interval = setInterval(fetchData, 5000); // Atualiza os dados a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gráfico - Dados do Sensor</CardTitle>
        <CardDescription>
          {lastPressure !== null ? `Última pressão registrada: ${lastPressure} BAR` : "Carregando..."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={data}
            margin={{
              left: 12,
              right: 12,
              top: 24,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="timestamp"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={['auto', 'auto']} // Ajuste o domínio conforme necessário
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              dataKey="pressao"
              fill="hsl(var(--foreground))"
              fillOpacity={0.3}
              stroke="hsl(var(--foreground))"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
