// import React, { useState } from 'react';
import styled from "styled-components";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../../App.css'
// import lrt from "../../assets/LRT.png";
// import reply from "../../assets/reply.png";
// import button from "../../assets/button.png";
// import { useNavigate } from "react-router-dom";

const CadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  // background-color: #fff;
  // min-height: 100vh;
  // min-width: 100vw;

  @media screen and (max-width: 480px) {
  }
`;

const CadSession = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: -10%;
  padding-bottom: 5%;
  position: absolute;

  @media screen and (max-width: 480px) {
    margin-top: -20%;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    margin-top: -16%;
  }

  @media screen and (min-width: 1156px) {
    margin-top: -9%;
  }
`;

const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
`;

const LRT = styled.img`
  width: 200px;
  padding: 2%;

  @media screen and (max-width: 480px) {
    width: 130px;
  }
`;

const Reply = styled.img`
  width: 237px;
  height: 62.5px;
  padding: 2%;

  @media screen and (max-width: 480px) {
    width: 158px;
    height: 41.67px;
  }
`;

const Btn = styled.img`
  display: flex;
  position: relative;
  width: 160px;
`;

const Texto = styled.h4`
    font-size: 20px;
    position: absolute;
`;

const Text = styled.h2`
    font-size: 58px;
    line-height: 0%;

  @media screen and (max-width: 480px) {
    font-size: 38px;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 48px; 
  }

  @media screen and (min-width: 1156px) {
    font-size: 80px;
  }
`;

const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SenhaPaciente = styled.h1`
    font-size: 80px;
    font-weight: 800;
    line-height: 0%;

  @media screen and (max-width: 480px) {
    font-size: 60px;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 65px;
  }

  @media screen and (min-width: 1156px) {
    font-size: 100px;
  }
`;

const Sair = styled.a`
    display: flex; 
    align-items: center; 
    justify-content: center; 
    position: fixed; 
    bottom: 5%;
    background-color: transparent;
    width: 160px;
    height: 60px;
    border: 0;
    outline: 0 none;
    text-decoration: none;
    color: white;
`;

function Senha() {
    // const navigate = useNavigate();
  // const [count, setCount] = useState(0)

  return (
    <>
      <CadContainer>
      <Logo>
        {/* <LRT src={lrt} alt="logo LRT" />{" "} */}
        {/* <Reply style={{}} src={reply} alt="logo Reply" />{" "} */}
      </Logo>
      <CadSession>
        <Div>
            <Text>Sua senha é:</Text>
            <SenhaPaciente>PC123</SenhaPaciente>
        </Div>
      </CadSession>
      <Sair href={"/"}>
        {/* <Btn src={button} alt="button"/> */}
        <Texto>Sair</Texto>
      </Sair>
    </CadContainer>
    </>
  )
}

export default Senha