// Tables.tsx
import React from 'react';
import styled from 'styled-components';
import TablesHeader from './tablesHeader';
import SensorTable from './sensorTable';

const TablesContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  width: calc(100vw - 340px);  // ajustar o espaço com base no left
  margin-left: 340px;
  background-color: #f5f7fa;
  /* left: 300px; */
  /* top: 0%; */
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  max-width: 2000px;
`;

// const DashboardContainer = styled.div`
//   display: flex;
//   height: 100vh;
//   /* width: 100vw; */
//   position: relative;
//   /* left: 300px; */
//   /* top: 0%; */
// `;

// const Content = styled.div`
//   flex-grow: 1;
//   background-color: #f5f7fa;
//   padding: 20px 0;
// `;

const Tables: React.FC = () => {
  return (
    <TablesContainer>
      <Content>
        <TablesHeader />
        <SensorTable />
      </Content>
    </TablesContainer>
  );
};

export default Tables;