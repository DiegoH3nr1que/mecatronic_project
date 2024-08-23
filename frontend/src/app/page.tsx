// pages/index.tsx
import React from 'react';
import { ChartComponent } from './components/chart_temp';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Painel de Monitoramento do ESP32</h1>
      <ChartComponent />
    </div>
  );
};

export default Home;
