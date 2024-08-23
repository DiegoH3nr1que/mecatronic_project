// pages/index.tsx
import React from 'react';
import { SensorData } from './components/sensorData';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Painel de Monitoramento do ESP32</h1>
      <SensorData />
    </div>
  );
};

export default Home;
