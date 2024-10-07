// import React, { useState } from 'react';
import styled from "styled-components";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../../App.css'
// import lrt from "../../assets/LRT.png";
// import reply from "../../assets/reply.png";

const CadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* background-color: #DDEBF8; */
  // min-height: 100vh;
  // min-width: 100vw;

  @media screen and (max-width: 480px) {
  }
`;

const CadSession = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: -20%;
  padding-bottom: 5%;
  position: absolute;

  @media screen and (max-width: 480px) {
    margin-top: -65%;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    margin-top: -40%;
  }

  @media screen and (min-width: 1156px) {
    /* margin-top: -25%; */
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

// const Text = styled.h2`
//     font-size: 40px;
//     line-height: 0%;
//     /* color: #8C8686; */

//   @media screen and (max-width: 480px) {
//     font-size: 38px;
//   }

//   @media screen and (min-width: 480px) and (max-width: 768px) {
//     font-size: 48px; 
//   }

//   @media screen and (min-width: 1156px) {
//     font-size: 80px;
//   }
// `;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10%;
`;

const NomeSensor = styled.h3`
    font-size: 32px;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 226px;
    height: 65px;
    background-color: #0F71E5;
    border-radius: 21px;
`;

const Container2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 175px;
    height: 175px;
    background-color: #0F71E5;
    border-radius: 21px;
    margin-top: -5%;
`;

const Conjunto = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
`;

const Conjunto2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

function Triagem() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <CadContainer>
      <Logo>
        {/* <LRT src={lrt} alt="logo LRT" />{" "} */}
        {/* <Reply style={{}} src={reply} alt="logo Reply" />{" "} */}
      </Logo>
      <CadSession>
        {/* <Text>Anna Julia</Text> */}
        <Div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: "flex-end", justifyContent: "center" }}>
                <Conjunto>
                    <NomeSensor>Temperatura:</NomeSensor>
                    <Container></Container>
                </Conjunto>
                <Conjunto>
                    <NomeSensor>Peso:</NomeSensor>
                    <Container>
                      {/* <script>
                        window.token=`{{pe}}`
                      </script> */}
                    </Container>
                </Conjunto>
                <Conjunto>
                    <NomeSensor>Altura:</NomeSensor>
                    <Container></Container>
                </Conjunto>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: "center", justifyContent: "center" }}>
                <Conjunto2>
                    <NomeSensor>Oxigenação:</NomeSensor>
                    <Container2></Container2>
                </Conjunto2>
                
            </div>
        </Div>
      </CadSession>
    </CadContainer>
    </>
  )
}

export default Triagem