// SensorTable.tsx
import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 10px 0;
  color: #A0AEC0;
  font-weight: bold;
  font-size: 10px;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #eaeaea;
`;

const TableCell = styled.td`
  /* display: flex; */
  /* flex-direction: column; */
  padding: 20px 0;
  /* align-items: flex-start; */
`;

const StatusBadge = styled.span<{ status: string }>`
  /* padding: 5px 10px; */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 83.5px;
  height: 25px;
  border-radius: 8px;
  color: white;
  background-color: ${(props) =>
    props.status === 'Online' ? '#48BB78' : '#0000003b'};
  font-size: 14px;
  /* line-height: 0%; */

`;

const SensorName = styled.strong`
  color: #2D3748;
  font-size: 14px;
  margin: 0%;
  line-height: 0%;
  margin-bottom: -3px;
`;

const SensorModel = styled.span`
  color: #718096;
  font-size: 14px;
  margin: 0%;
  line-height: 0%;
  margin-top: -3px;
`;

const Sensor = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: #718096;
`;

const SensorTable: React.FC<{text?: string}> = ({text}) => {
  const sensors = [
    { name: 'Sensor Ultrassônico', model: 'HC-SR04', status: 'Online', date: '14/06/21' },
    { name: 'Sensor de Fluxo', model: 'YF-S401', status: 'Online', date: '14/06/21' },
    { name: 'Sensor de Qualidade', model: 'TDS Meter V1.0', status: 'Offline', date: '14/06/21' },
  ];

  return (
    <TableContainer>
      <div style={{display: 'flex', alignItems: 'start'}}>
        <h3 style={{color: '#2D3748', fontSize: '18px'}}>{ text ? text : "Authors Table"}</h3>
      </div>
      <Table>
        <thead>
          <tr>
            <TableHeader>SENSORES</TableHeader>
            <TableHeader>TIPO</TableHeader>
            <TableHeader>STATUS</TableHeader>
            <TableHeader>IMPLANTADO</TableHeader>
            <TableHeader></TableHeader>
          </tr>
        </thead>
        <tbody>
          {sensors.map((sensor, index) => (
            <TableRow key={index}>
              <TableCell>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '10px'}}>
                  <Sensor />
                  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                    <SensorName>{sensor.name}</SensorName> <br />
                    <SensorModel>{sensor.model}</SensorModel>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                  <SensorName>Hardware</SensorName> <br />
                  <SensorModel>Projeto #1</SensorModel>
                </div>
              </TableCell>
              <TableCell>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                  <StatusBadge status={sensor.status}>{sensor.status}</StatusBadge>
                </div>
              </TableCell>
              <TableCell>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                  <SensorName>{sensor.date}</SensorName>
                </div>
              </TableCell>
              <TableCell>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                  <a style={{color: "#718096"}} href="#">Edit</a>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default SensorTable;