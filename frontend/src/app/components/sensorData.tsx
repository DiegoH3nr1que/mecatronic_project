"use client";
import React, { useEffect, useState } from 'react';

interface SensorData {
  temperatura: number;
  pressao: number;
  motor_ligado: boolean;
}

export const SensorData: React.FC = () => {
  const [data, setData] = useState<SensorData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/data/');
      const result: SensorData = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dados do Sensor</h2>
      <p>Temperatura: {data.temperatura}°C</p>
      <p>Pressão: {data.pressao} hPa</p>
      <p>Motor: {data.motor_ligado ? 'Ligado' : 'Desligado'}</p>
    </div>
  );
};
