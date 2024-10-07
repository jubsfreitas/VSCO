import { Formik } from 'formik';
import React, { useCallback, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import VscoW from '../../assets/vsco_white.png';
// import Facebook from '../../assets/facebook.png';
// import Apple from '../../assets/apple.png';
// import Google from '../../assets/google.png';
// import Treco from '../../assets/trequinho.png';
import { auth } from '../../middlewares/firebase';
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import useAuthContext from '../../contexts/auth';
import { authMessageByCode } from '../../utils/authMessagesCode';
// import Show from '../../assets/Show.png';

// Estilos principais da página
const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  /* background-color: #f5f5f5; */
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1C3048;
  width: 50%;
  height: 100%;
  border-radius: 10px;
  color: white;
  /* padding: 20px; */
  text-align: center;
  /* position: absolute; */
  /* top: 10px1; */
`;

const Logo = styled.img`
  width: 400px;
  /* margin-top: 50px; */
  /* margin-bottom: 0px; */
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 0px;
  color: #1C3048;
`;

const Subtitle = styled.p`
  color: #A0AEC0;
  font-size: 16px;
  margin: 0%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  height: 100%;
  background-color: white;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); */
  border-radius: 10px;
  /* padding: 0 40px; */
  /* margin-top: -100px; */
  /* z-index: 1; */
  /* position: absolute; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */
  /* width: 350px; */
`;

const Input = styled.input`
  height: 30px;
  width: 350px;
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
  width: 374px;
  height: 45px;
  /* padding: 12px; */
  background-color: #1C3048;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  outline: 0 none;
  /* margin-top: 50px; */
  &:hover {
    background-color: #18385b;
    outline: 0 none;
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
    font-size: 12px;
  }
`;

// const Divider = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 20px 0;
//   color: #777;
// `;

// const Line = styled.span`
//   flex-grow: 1;
//   height: 1px;
//   background-color: #ddd;
// `;

// const OrText = styled.span`
//   margin: 0 10px;
//   font-size: 16px;
//   color: #A0AEC0;
//   font-weight: bold;
// `;

// const SocialButtons = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-bottom: 20px;
// `;

// const SocialButton = styled.button`
//   width: 50px;
//   height: 50px;
//   margin: 0 10px;
//   /* border-radius: 50%; */
//   border: 1px solid #CBD5E0;
//   background-color: white;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   cursor: pointer;
//   &:hover {
//     background-color: #b3b1b1;
//   }
// `;

// const SocialIcon = styled.img`
//   width: 20px;
//   height: 20px;
//   cursor: pointer;
// `;

const LoginLink = styled.p`
  text-align: center;
  color: #A0AEC0;
  font-size: 14px;
  margin-top: 10px;
  a {
    color: #2C3048;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// const HeaderImg = styled.img`
//   position: absolute;
//   max-width: 100%;
//   transform: rotate(90deg);
// `;

// const HeaderTextDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100px;
//   margin-top: -20px;
//   /* position: ; */
// `;

const Text = styled.h4`
  font-weight: 700;
  font-size: 14px;
  line-height: 0%;
  color: #737b8c;
  text-align: end;
  align-items: flex-end;
  padding: 0 55px;

  @media screen and (max-width: 480px) {
    /* font-size: 12px; */
  }
`;

const Div = styled.div`
  padding: 40px 0;
`;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');
  const [sucess, setSucess] = useState<string>('');
  const { isLoaded, isAuth } = useAuthContext();
  const returnTo = new URLSearchParams(window.location.search).get('returnTo');
  const [loading, setLoading] = useState<boolean>(false);
  // const [showPass, setShowPass] = useState<boolean>(false);

  const navigateTo = useCallback(() => {
    if (returnTo) {
      navigate(returnTo);
      return;
    }
    navigate('/');
  }, [navigate, returnTo]);

  if (!isLoaded) {
    // return <div>Carregando...</div>;
    return null;
  }

  if (isAuth) {
    navigateTo();
    // return null
  }

  return (
    <Container>
      <Header>
        {/* <HeaderImg src={Treco} alt='treco' /> */}
        <Logo src={VscoW} alt="Logo" />
        {/* <HeaderTextDiv>
          <Title>Bem Vindo!</Title>
          <Subtitle>Faça Login</Subtitle>
          <Subtitle>ou Crie uma Conta</Subtitle>
        </HeaderTextDiv> */}
      </Header>
      <Wrapper>
        <Title>Bem Vindo!</Title>
        <Subtitle>Entre com seu Email e Senha</Subtitle>
        <Formik
          initialValues={{ email: '', senha: '' }}
          onSubmit={async ({ email, senha }) => {
            try {
              setLoading(true);
              await signInWithEmailAndPassword(auth, email, senha);
              navigateTo();
            } catch (error) {
              const { code } = error as { code: string };
              const message = authMessageByCode[code] || 'Erro desconhecido';
              setError(message);
              console.error(error);
            }
            setLoading(false);
          }}
        >
          {({
            values: { email, senha },
            handleChange,
            handleSubmit,
            handleBlur,
          }) => (
            <Form onSubmit={handleSubmit}>
            {/* <Form> */}
              <Div>
                  <Input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  <Input
                    // type={showPass ? 'text' : 'password'}
                    type="password"
                    placeholder="Senha"
                    value={senha}
                    onChange={handleChange('senha')}
                    onBlur={handleBlur('senha')}
                  />
                  <Text
                    style={{ cursor: 'pointer' }}
                    onClick={async () => {
                      try {
                        setLoading(true);
                        await sendPasswordResetEmail(auth, email);
                        setSucess('Email enviado com sucesso!');
                        setError('');
                      } catch (error) {
                        const { code } = error as { code: string };
                        const message =
                          authMessageByCode[code] ||
                          'Preencha o campo de Email!';
                        setError(message);
                        console.error(error);
                      }
                      setLoading(false);
                    }}
                  >
                    Esqueceu sua senha?
                  </Text>
                  {error && <Text style={{ color: `red` }}>{error}</Text>}
                  {sucess && <Text style={{ color: `#4fe609` }}>{sucess}</Text>}
              </Div>
              <Button loading={loading}>Login</Button>
            </Form>
          )}
        </Formik>
        <LoginLink>
          Não tem uma conta? <br/> <a href="/">Cadastre-se</a>
        </LoginLink>
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
