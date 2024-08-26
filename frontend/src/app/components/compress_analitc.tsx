"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { PiEngine, PiEngineFill } from "react-icons/pi";

export function MotorStatusIcon() {
  const [motorLigado, setMotorLigado] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchMotorStatus = async () => {
      try {
        const response = await axios.get("https://diegohenrique.pythonanywhere.com/api/data/");
        const sortedData = response.data.sort(
          (a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        const latestData = sortedData[0];
        console.log(latestData);
        console.log(latestData.motor_ligado);

        setMotorLigado(latestData.motor_ligado);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchMotorStatus();
  }, []);

  if (motorLigado === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center">
      {motorLigado ? (
        <PiEngineFill className="text-green-500" size={48} />
      ) : (
        <PiEngine className="text-red-500" size={48} />
      )}
      <span className="ml-2">{motorLigado ? "ON" : "OFF"}</span>
    </div>
  );
}
