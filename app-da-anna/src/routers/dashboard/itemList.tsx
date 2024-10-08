
// ItemList.tsx
import React from 'react';
import styled from 'styled-components';
import SensorTable from '../tabelas/sensorTable';

const ListContainer = styled.div`
  /* background-color: white; */
  padding: 20px;
  border-radius: 10px;
  flex-grow: 1;
  /* background-color: #f5f7fa; */
  /* padding: 20px; */
  /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); */
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  max-width: 1583px;
`;

const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eaeaea;

  &:last-child {
    border-bottom: none;
  }
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 5px 10px;
  border-radius: 20px;
  color: white;
  /* background-color: ${(props) => props.status === 'Online' ? '#00d77a' : '#ff6b6b'}; */
  background-color: ${(props) => (props.status === 'Online' ? '#00d77a' : '#ff6b6b')};
`;

const ItemList: React.FC = () => {
  const items = [
    { name: 'Sensor Ultrassônico', status: 'Online', date: '14/06/21' },
    { name: 'Sensor de Fluxo', status: 'Offline', date: '14/06/21' },
    { name: 'Sensor de Qualidade', status: 'Online', date: '14/06/21' },
  ];

  return (
    <ListContainer>
      <SensorTable text='Itens'/>
    </ListContainer>
  );
};

export default ItemList;