import React from "react";
import styled from 'styled-components';
import Vsco from "../../assets/vsco.png";
import Dash from "../../assets/greenHouse.png";
import Tab from "../../assets/greenTab.png";
import Disp from "../../assets/greenDisp.png";
import Perfil from "../../assets/greenPerfil.png";
import Cadastro from "../../assets/greenCadastro.png";
import Login from "../../assets/greenLogin.png";
import HelpIcon from "../../assets/helpIcon.png"; // Ícone de ajuda (guia)
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 300px;
  background-color: #f8f9fc; /* Cor de fundo clara */
  padding: 0 20px;
  position: absolute;
  top: 0;
  z-index: 1;
`;

const Logo = styled.img`
  width: 140px;
  margin: 40px 0;
`;

const MenuSection = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  color: #A0AEC0;
  margin: 20px 0 10px;
  padding-left: 10px;
`;

const MenuItem = styled.div<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? "#1C3048" : "transparent")};
  cursor: pointer;
  width: 219.5px;
  height: 54px;
  color: ${({ active }) => (active ? "white" : "#A0AEC0")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e2e8f0;
  }
`;

const MenuText = styled.h3`
  font-size: 14px;
  font-weight: bold;
`;

const MenuImg = styled.img`
  width: 20px;
  height: 20px;
`;

const HelpContainer = styled.div`
  display: grid;
  align-items: center;
  /* flex-direction: column; */
  width: 218px;
  height: 169.5px;
  background-color: #1C3048;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  color: white;
  margin-top: 20px;
`;

const HelpTitle = styled.h3`
  font-size: 14px;
  margin-bottom: 0px;
`;

const HelpButton = styled.button`
  background-color: white;
  color: #2D3748;
  border: none;
  padding: 10px;
  border-radius: 12px;
  width: 98%;
  height: 35px;
  cursor: pointer;
  font-size: 9px;
  font-weight: bold;
`;

const MenuImgBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 12px;
    width: 33px;
    height: 30px;
    padding: 5px;
`;

const Menu: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <Logo src={Vsco} alt="logo da vsco" />

            {/* Seção do menu principal */}
            <MenuSection>
                <MenuItem active onClick={() => {navigate('')}}>
                    <MenuImgBox>
                        <MenuImg src={Dash} alt="Dashboard" />
                    </MenuImgBox>
                    <MenuText>Dashboard</MenuText>
                </MenuItem>
                <MenuItem onClick={() => {navigate('tabelas')}}>
                    <MenuImgBox>
                        <MenuImg src={Tab} alt="Tabelas" />
                    </MenuImgBox>
                    <MenuText>Tabelas</MenuText>
                </MenuItem>
                <MenuItem>
                    <MenuImgBox>
                        <MenuImg src={Disp} alt="Dispositivos" />
                    </MenuImgBox>
                    <MenuText>Dispositivos</MenuText>
                </MenuItem>
            </MenuSection>

            {/* Seção da conta */}
            <SectionTitle>CONTA</SectionTitle>
            <MenuSection>
                <MenuItem onClick={() => {navigate('profile')}}>
                    <MenuImg src={Perfil} alt="Perfil" />
                    <MenuText>Perfil</MenuText>
                </MenuItem>
                <MenuItem onClick={() => {navigate('register')}}>
                    <MenuImg src={Cadastro} alt="Cadastre-se" />
                    <MenuText>Cadastre-se</MenuText>
                </MenuItem>
                <MenuItem onClick={() => {navigate('login')}}>
                    <MenuImg src={Login} alt="Login" />
                    <MenuText>Login</MenuText>
                </MenuItem>
            </MenuSection>

            {/* Seção de ajuda */}
            <MenuSection>
                <HelpContainer>
                    <div style={{display: "flex", alignItems: "center", background: "#fff", width: "35px", height: "35px", borderRadius: "12px", justifyContent: "center"}}>
                        <img src={HelpIcon} alt="Ajuda" width="24px" />
                    </div>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
                        <HelpTitle>Ajuda?</HelpTitle>
                        <p style={{fontSize: "12px", margin: "0px"}}>Veja nossos guias!</p>
                    </div>
                    <HelpButton>GUIAS</HelpButton>
                </HelpContainer>
            </MenuSection>
        </Container>
    );
};

export default Menu;
