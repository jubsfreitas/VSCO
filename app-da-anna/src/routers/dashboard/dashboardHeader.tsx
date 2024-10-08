
// DashboardHeader.tsx
import React from 'react';
import styled from 'styled-components';
import Projetos from '../../assets/pen.png';
import Km from '../../assets/foguete.png';
import Veiculos from '../../assets/veiculos.png';
import Itens from '../../assets/itens.png';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  /* align-items: center; */
  margin-bottom: 30px;
  gap: 20px;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 0 15px;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Sombra mais suave
  width: 382px;  // Aumenta a largura para refletir o design
  height: 80px;
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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: #A2C338;
  
  & img {
    width: 35px;
    height: 35px;
  }
`;

const Text = styled.p`

`;

const DashboardHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <MetricCard>
        <Div>
          <p>Projetos</p>
          <h2>32</h2>
        </Div>
        <ImgContainer>
          <img src={Projetos} alt="" />
        </ImgContainer>
      </MetricCard>
      <MetricCard>
        <Div>
          <p>Km Percorridos</p>
          <h2>3872 Km</h2>
        </Div>
        <ImgContainer>
          <img src={Km} alt="" />
        </ImgContainer>
      </MetricCard>
      <MetricCard>
        <Div>
          <p>Veículos</p>
          <h2>4</h2>
        </Div>
        <ImgContainer>
          <img src={Veiculos} alt="" />
        </ImgContainer>
      </MetricCard>
      <MetricCard>
        <Div>
          <p>Itens</p>
          <h2>3</h2>
        </Div>
        <ImgContainer>
          <img src={Itens} alt="" />
        </ImgContainer>
      </MetricCard>
    </HeaderContainer>
  );
};

export default DashboardHeader;