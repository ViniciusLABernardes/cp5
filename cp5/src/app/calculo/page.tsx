"use client"
import { useState } from 'react';

export default function Calculo() {
  // Estados para guardar os valores de distância, velocidade e tempo
  const [distance, setDistance] = useState<number>(0); // Inicializando como número
  const [velocity, setVelocity] = useState<number>(0); // Inicializando como número
  const [time, setTime] = useState<number | string | null>(null); // Permite número, string ou null

  // Função para calcular o tempo
  const calculateTime = () => {
    if (velocity > 0) {
      const result = distance / velocity;
      setTime(result.toFixed(2)); // Limita a 2 casas decimais e armazena como string
    } else {
      setTime('Velocidade deve ser maior que zero!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Cálculo de Velocidade no Espaço</h1>

      <div className="flex flex-col items-center mb-4">
        <label htmlFor="distance" className="mb-2 text-lg">Distância (em milhões de km)</label>
        <input
          type="number"
          id="distance"
          className="border p-2 mb-4 w-64"
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))} // Converte o valor para número
        />

        <label htmlFor="velocity" className="mb-2 text-lg">Velocidade (em km/s)</label>
        <input
          type="number"
          id="velocity"
          className="border p-2 w-64"
          value={velocity}
          onChange={(e) => setVelocity(Number(e.target.value))} // Converte o valor para número
        />
      </div>

      <button
        onClick={calculateTime}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Calcular Tempo
      </button>

      {time !== null && (
        <p className="mt-4 text-xl">
          {typeof time === 'number'
            ? `O tempo estimado é ${time} horas.`
            : time}
        </p>
      )}
    </div>
  );
}