// SensorsList.tsx
import React from 'react';
import styled from 'styled-components';
import Ultrasonico from '../../assets/sensor-ultrassonico.png';
import Fluxo from '../../assets/sensor-de-fluxo.png';
import Qualidade from '../../assets/sensor-de-qualidade.png';

const SensorsContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const SensorsGrid = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SensorCard = styled.div`
  /* width: 30%; */
  /* background-color: #f5f7fa; */
  display: flex;
  flex-direction: column;
  align-items: start;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const AddSensor = styled.div`
  width: 30%;
  background-color: #eaeaea;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #9aa0b3;
  cursor: pointer;

  &:hover {
    background-color: #d4d4d4;
  }
`;

const SensorTitle = styled.h4`
  color: #2D3748;
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
`;

const SensorDescription = styled.p`
  color: #A0AEC0;
  font-size: 12px;
  width: 320px;
  text-align: start;
  height: 50px;
  margin: 0;
`;

const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  background: transparent;
  border: 1px solid;
  border-radius: 12px;
  border-color: #A2C338;
  color: #A2C338;
  font-size: 10px;
  height: 35px;
  width: 110px;
`;

const SensorsList: React.FC = () => {
//   const sensors = [
//     { name: 'Sensor Ultrassônico', description: 'Mede distância a partir de ondas sonoras', picture: {Ultrasonico} },
//     { name: 'Sensor de Fluxo', description: 'Mede a vazão de líquidos' },
//     { name: 'Sensor de Qualidade', description: 'Mede a qualidade da água' },
//   ];
  const sensors = [
    {
      id: 1,
      name: 'Sensor Ultrassônico',
      type: 'Hardware',
      status: 'Online',
      imgSrc: Ultrasonico,
      description: 'O Sensor Ultrassônico HC-SR04 é capaz de medir a distância da água dentro do tanque, mostrando ao usuário a quantidade de agua presente no recipiente',
    },
    {
      id: 2,
      name: 'Sensor de Fluxo',
      type: 'Hardware',
      status: 'Offline',
      imgSrc: Fluxo,
      description: 'Sensores de Fluídos detectam desvio críticos  da taxa de fluxo por meios liquidos ',
    },
    {
      id: 3,
      name: 'Sensor de Qualidade',
      type: 'Hardware',
      status: 'Online',
      imgSrc: Qualidade,
      description: 'O sensor de qualidade, te previne de futuro problemas garantido a qualidade desses fluidos.',
    },
  ];

  return (
    <SensorsContainer>
      <h3>Sensores</h3>
      <SensorsGrid>
        {sensors.map((sensor, index) => (
          <SensorCard key={index}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "200px", width: "100%"}}>
                <img src={sensor.imgSrc} alt={sensor.name} />
            </div>
            <SensorDescription style={{fontSize: "10px", height: "0"}}>Sensor #{sensor.id}</SensorDescription>
            <SensorTitle>{sensor.name}</SensorTitle>
            <SensorDescription>{sensor.description}</SensorDescription>
            <Btn>Saiba Mais</Btn>
          </SensorCard>
        ))}
        <AddSensor>+</AddSensor>
      </SensorsGrid>
    </SensorsContainer>
  );
};

export default SensorsList;