
// DashboardHeader.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  margin-bottom: 30px;
`;

// const MetricCard = styled.div`
//   background-color: white;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   min-width: 150px;
//   text-align: center;

//   & h2 {
//     margin: 0;
//     font-size: 18px;
//     color: #2D3748;
//   }

//   & p {
//     margin: 5px 0 0;
//     color: #A0AEC0;
//     font-size: 12px;
//   }
// `;

const MetricCard = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Sombra mais suave
  width: 170px;  // Aumenta a largura para refletir o design
  text-align: center;
  
  & h2 {
    margin: 5px 0;
    font-size: 18px;
    color: #2D3748;
  }

  & p {
    margin: 0;
    color: #A0AEC0;
    font-size: 12px;
    font-weight: bold;
  }
`;

const Text = styled.p`

`;

const DashboardHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <MetricCard>
        <p>Projetos</p>
        <h2>32</h2>
      </MetricCard>
      <MetricCard>
        <p>Km Percorridos</p>
        <h2>3872 Km</h2>
      </MetricCard>
      <MetricCard>
        <p>Veículos</p>
        <h2>4</h2>
      </MetricCard>
      <MetricCard>
        <p>Itens</p>
        <h2>3</h2>
      </MetricCard>
    </HeaderContainer>
  );
};

export default DashboardHeader;