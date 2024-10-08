// Dashboard.tsx
import React from 'react';
import styled from 'styled-components';
import DashboardHeader from './dashboardHeader';
import Graph from './graph';
import ItemList from './itemList';
import Topbar from './topbar';
import Vsco from '../../assets/vsco_white.png';
import CScania from '../../assets/caminhaoScania.png';
import BarGraph from './barGraph';

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
  width: calc(100vw - 340px);  // ajustar o espaço com base no left
  margin-left: 340px;
  background-color: #f5f7fa;

`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  max-width: 2000px;
`;

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: start;
  padding: 20px;
  /* width: 882px; */
  height: 250.5px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: #fff;

  & p {
    margin: 0;
    color: #A0AEC0;
    font-size: 12px;
    font-weight: bold;
  }

  & h2 {
    margin: 5px 0;
    font-size: 18px;
    color: #2D3748;
  }

  & h3 {
    margin: 0;
    color: #A0AEC0;
    font-size: 14px;
    font-weight: lighter;
    text-align: start;
    width: 453px;
  }
`;

const ContainerVsco = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: 360px;
  height: 255.5px;
  background: #A2C338;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: start;
  border-radius: 12px;

  & img {
    border-radius: 12px;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    position: absolute;
    padding: 80px 15px;
  }
`;

const Text = styled.h2`
  margin: 5px 0;
  font-size: 18px;
  color: #fff;
`;

const Dashboard: React.FC = () => {
  return (
    <div>
      <Topbar />
      <DashboardContainer>
        <Content>
          <DashboardHeader />
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'start', gap: '20px'}}>
            <Container>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>
                <p>Nosso time:</p>
                <h2>VSCO Platform</h2>
                <h3>A plataforma VSCO (Vehicle Service Company Operations) é uma solução tecnológica para monitorar, controlar e otimizar o uso de fluidos automotivos, como óleos e lubrificantes, em ambientes de manutenção. </h3>
              </div>
              <ContainerVsco>
                <img src={Vsco} alt="logo da Vsco" />
              </ContainerVsco>
            </Container>
            <Container>
              <ImageContainer>
                <img src={CScania} alt="" />
                <div>
                  <h2 style={{color: '#fff'}}>Trabalhe com mais segurança</h2>
                  <h3 style={{color: '#DDDDDD', width: '268px'}}>Experimente nosso modulo de monitoramente de fluídos</h3>
                  <h2 style={{color: '#fff'}}>Saiba mais!</h2>
                </div>
              </ImageContainer>
            </Container>
          </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: "start"}}>
            <BarGraph />
            <Graph />
          </div>
          <ItemList />
        </Content>
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;