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
  motor_ligado: boolean;
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/data/");
        const OrderData = response.data.sort((a: SensorData, b: SensorData) =>
          new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        );
        setData(OrderData); // Ordena os dados por timestamp antes de definir o estado
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gráfico de Área - Dados do Sensor</CardTitle>
        <CardDescription>Dados de Pressão</CardDescription>
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
