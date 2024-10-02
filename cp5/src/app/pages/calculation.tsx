import React, { useState } from 'react';

const Calculation: React.FC = () => {
  const [mass1, setMass1] = useState(5.972 * Math.pow(10, 24)); // Massa da Terra em kg
  const [mass2, setMass2] = useState(4.867 * Math.pow(10, 24)); // Massa de Vênus em kg
  const [distance, setDistance] = useState(1.082 * Math.pow(10, 11)); // Distância média entre Terra e Vênus em metros
  const [charge1, setCharge1] = useState(1.0); // Carga fictícia 1
  const [charge2, setCharge2] = useState(1.0); // Carga fictícia 2

  const G = 6.674 * Math.pow(10, -11); // Constante gravitacional
  const k_e = 8.987 * Math.pow(10, 9); // Constante de Coulomb

  // Cálculo da força gravitacional
  const gravitationalForce = (G * mass1 * mass2) / Math.pow(distance, 2);

  // Cálculo da força eletromagnética (cargas fictícias)
  const electromagneticForce = (k_e * charge1 * charge2) / Math.pow(distance, 2);

  return (
    <div>
      <h2>Calculo baseado nas ideias de Velikovsky</h2>
      <div>
        <label>
          Mass 1 (kg):
          <input
            type="number"
            value={mass1}
            onChange={(e) => setMass1(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Mass 2 (kg):
          <input
            type="number"
            value={mass2}
            onChange={(e) => setMass2(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Distance (m):
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Charge 1 (C):
          <input
            type="number"
            value={charge1}
            onChange={(e) => setCharge1(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Charge 2 (C):
          <input
            type="number"
            value={charge2}
            onChange={(e) => setCharge2(parseFloat(e.target.value))}
          />
        </label>
      </div>
      <div>
        <p><strong>Gravitational Force (N):</strong> {gravitationalForce.toExponential(3)}</p>
        <p><strong>Electromagnetic Force (N):</strong> {electromagneticForce.toExponential(3)}</p>
      </div>
      <p>
      Nota: Estes cálculos são representações simplificadas baseadas nas ideias de Velikovsky sobre as influências eletromagnéticas nas órbitas planetárias.
      </p>
    </div>
  );
};

export default Calculation;
