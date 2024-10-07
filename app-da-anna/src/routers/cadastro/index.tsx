import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Formik } from 'formik';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../middlewares/firebase';
import { authMessageByCode } from '../../utils/authMessagesCode';
// import Show from '../../assets/Show.png';
import VscoW from '../../assets/vsco_white.png';
import Facebook from '../../assets/facebook.png';
import Apple from '../../assets/apple.png';
import Google from '../../assets/google.png';
import Treco from '../../assets/trequinho.png';

// Estilos principais da página
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* background-color: #f5f5f5; */
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: initial;
  background-color: #1C3048;
  width: 98%;
  height: 400px;
  border-radius: 10px;
  color: white;
  /* padding: 20px; */
  text-align: center;
  /* position: absolute; */
  margin-top: 10px;
`;

const Logo = styled.img`
  width: 200px;
  margin-top: 50px;
  /* margin-bottom: 0px; */
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 0px;
`;

const Subtitle = styled.p`
  color: #FFF;
  font-size: 16px;
  margin: 0%;
`;

const Wrapper = styled.div`
  width: 400px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 40px;
  margin-top: -120px;
  z-index: 1;
  /* position: absolute; */
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 40px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #CBD5E0;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  background-color: #F7FAFC;
  outline: none;
`;

const Button = styled.button<{ loading?: boolean; disabled?: boolean }>`
  padding: 12px;
  background-color: #1C3048;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #162D46;
  }

  ${({ disabled }) =>
    !!disabled &&
    css`
      background-color: #cfdbe0;
      cursor: not-allowed;
    `}

  ${({ loading }) =>
    !!loading &&
    css`
      &::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0;
        /* left: 0; */
        right: 20px;
        bottom: 0;
        margin: auto;
        border: 4px solid transparent;
        border-top-color: #ffffff;
        border-radius: 50%;
        animation: button-loading-spinner 1s ease infinite;
      }
    `}
    @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }

    to {
      transform: rotate(1turn);
    }
  }

  @media screen and (max-width: 480px) {
    /* font-size: 12px; */
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  color: #777;
`;

const Line = styled.span`
  flex-grow: 1;
  height: 1px;
  background-color: #ddd;
`;

const OrText = styled.span`
  margin: 0 10px;
  font-size: 16px;
  color: #A0AEC0;
  font-weight: bold;
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SocialButton = styled.button`
  width: 50px;
  height: 50px;
  margin: 0 10px;
  /* border-radius: 50%; */
  border: 1px solid #CBD5E0;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: 0;
  &:hover {
    background-color: #b3b1b1;
    outline: 0;
    border: 0 none;
  }
`;

const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const LoginLink = styled.p`
  text-align: center;
  color: #A0AEC0;
  font-size: 14px;
  margin-top: 10px;
  a {
    color: #1C3048;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const HeaderImg = styled.img`
  position: absolute;
  max-width: 100%;
`;

const HeaderTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-top: -20px;
  /* position: ; */
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Texto = styled.h4`
  font-family: 'Manrope';
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  color: #737b8c;
  text-align: start;
  /* align-items: flex-end; */
  /* padding: 0 5%; */

  @media screen and (max-width: 480px) {
    /* font-size: 12px; */
  }
`;

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  // const [showPass, setShowPass] = useState<boolean>(false);

  return (
    <Container>
      <Header>
        <HeaderImg src={Treco} alt='treco' />
        <Logo src={VscoW} alt="Logo" />
        <HeaderTextDiv>
          <Title>Bem Vindo!</Title>
          <div style={{ display: 'flex', gap: '5px' }}>
            <Subtitle>Faça</Subtitle>
            <Subtitle style={{fontWeight: "bold"}}>Login</Subtitle>
          </div>
          <div style={{ display: 'flex', gap: '5px' }}>
            <Subtitle>ou</Subtitle>
            <Subtitle style={{fontWeight: "bold"}}>Crie uma Conta</Subtitle>
          </div>
        </HeaderTextDiv>
      </Header>
      <Wrapper>
        <Title style={{color: '#2D3748', fontSize: '18px', fontWeight: '500', marginBottom: '10px'}}>Registre-se com:</Title>
        {/* <Title style={{color: '#2D3748', fontSize: '18px', margin: '0 0 40px 0'}}>Registre-se:</Title> */}
        <SocialButtons>
          <SocialButton>
            <SocialIcon src={Facebook} alt="Facebook" />
          </SocialButton>
          <SocialButton>
            <SocialIcon src={Apple} alt="Apple" />
          </SocialButton>
          <SocialButton>
            <SocialIcon src={Google} alt="Google" />
          </SocialButton>
        </SocialButtons>
        <Divider>
          <OrText>OU</OrText>
        </Divider>
        <Formik
          initialValues={{ email: '', nome: '', senha: '' }}
          onSubmit={async (values) => {
            try {
              setLoading(true);
              await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.senha,
              );
              navigate('/login');
            } catch (error) {
              const { code } = error as { code: string };
              const message = authMessageByCode[code] || 'Erro desconhecido';
              setError(message);
              console.error(error);
            }
            setLoading(false);
          }}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form>
              <Input
                type="email"
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
              />
              {/* <Input
                type="text"
                placeholder="Serial ID"
                value={values.nome}
                onChange={handleChange('nome')}
                onBlur={handleBlur('nome')}
              /> */}
              <Input
                type="text"
                placeholder="Nome"
                value={values.nome}
                onChange={handleChange('nome')}
                onBlur={handleBlur('nome')}
              />
              <Input
                // type={showPass ? 'text' : 'password'}
                type="password"
                placeholder="Senha"
                value={values.senha}
                onChange={handleChange('senha')}
                onBlur={handleBlur('senha')}
              />
              {/* <ImgPass
                src={Show}
                onClick={() => {
                  setShowPass(!showPass);
                }}
                alt="mostrar senha"
              /> */}
              <Div>
                <Texto>
                  Você concordou com nossos Termos de Serviço ao continuar a
                  se inscrever.
                </Texto>
              </Div>
              <Button loading={loading} onClick={() => handleSubmit()}>Criar Conta</Button>
            </Form>
          )}
        </Formik>
        <LoginLink>
          Já tem uma conta? <br/> <a href="/login">Login</a>
        </LoginLink>
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;
