"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface SensorData {
  temperatura: number;
  pressao: number;
  motor_ligado: boolean;
}

const chartConfig = {
  temperatura: {
    label: "Temperatura",
    color: "hsl(var(--chart-1))",
  },
  pressao: {
    label: "Pressão",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ChartComponent() {
  const [data, setData] = useState<{ temperatura: number; pressao: number }[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/data/");
        setData(response.data); // Supondo que a resposta da API é uma lista de objetos
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
        <CardDescription>Mostrando dados de temperatura</CardDescription>
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
              dataKey="index" // Adicione uma chave index ou similar para o eixo X
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={['auto', 'auto']} // Ajuste o domínio conforme necessário
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="temperatura"
              fill="var(--color-temperatura)"
              fillOpacity={0.4}
              stroke="var(--color-temperatura)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
