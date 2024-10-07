import React, { useEffect, useState } from 'react'; 
import styled from 'styled-components';
import VscoW from '../../assets/vsco_white.png';
import Facebook from '../../assets/facebook.png';
import Apple from '../../assets/apple.png';
import Google from '../../assets/google.png';
import Treco from '../../assets/trequinho.png';
// import ProfileHeader from './header';
import ProfileSettings from './settings';
import PersonalInfo from './personalInfo';
import SensorsList from './sensorsList';
import useAuthContext from '../../contexts/auth';
import ModalPerfil from './perfilModal';
import { useNavigate } from 'react-router-dom';
// import { getAuth, signOut } from 'firebase/auth';


// Estilos principais da página
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  position: relative;
  /* left: 300px; */
  /* top: 0; */
  width: calc(100vw - 340px);  // ajustar o espaço com base no left
  margin-left: 340px;
  /* width: 70%; */
  /* background-color: #f5f5f5; */
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
//   padding: 20px;
// `;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: initial;
  background-color: #1C3048;
  /* width: 1500px; */
  width: 96%;
  height: 300px;
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
  display: flex;
  /* width: 1450px; */
  width: 92%;
  height: 113px;
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  /* padding: 40px; */
  margin-top: -60px;
  z-index: 1;
  /* position: absolute; */
`;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 517px;
  height: 377.5px;
`;

const Form = styled.form`
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

const Button = styled.button`
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

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  margin: 0 20px;
  /* padding: 10px; */
  /* margin-right: 20px; */
`;

const UserName = styled.h2`
  margin: 0;
  color: #2D3748;
  font-size: 18px;
`;

const UserEmail = styled.p`
  margin: 0;
  color: #718096;
  font-size: 14px;
`;

const Edit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background: transparent;
  color: #2D3748;
  border: 1px solid;
  border-color: #2D3748;
  position: absolute;
  outline: 0;
  right: 6%;

  &:hover {
    color: #ffffff;
    border-color: #ffffff;
    background: #2D3748;
  }
`;

const ProfilePage: React.FC = () => {
  const { user } = useAuthContext();
  const [image, setImage] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.photoURL) {
      setImage(user.photoURL);
    }
  }, [user, user?.photoURL]);

  return (
    <Container>
      <Header>
        <HeaderImg src={Treco} alt='treco' />
        {/* <Logo src={VscoW} alt="Logo" /> */}
        <HeaderTextDiv>
          {/* <Title>Bem Vindo!</Title>
          <div style={{ display: 'flex', gap: '5px' }}>
            <Subtitle>Faça</Subtitle>
            <Subtitle style={{fontWeight: "bold"}}>Login</Subtitle>
          </div>
          <div style={{ display: 'flex', gap: '5px' }}>
            <Subtitle>ou</Subtitle>
            <Subtitle style={{fontWeight: "bold"}}>Crie uma Conta</Subtitle>
          </div> */}
        </HeaderTextDiv>
      </Header>
      {edit && user && (
        <ModalPerfil
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          user={user}
        />
      )}
      <Wrapper style={open ? {zIndex: 0} : {}}>
        <UserInfo>
          {user?.photoURL ? <Avatar src={user?.photoURL} alt="User Avatar" /> : <Avatar src="https://via.placeholder.com/80" alt="User Avatar" /> }
          <div style={{display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "center"}}>
            <UserName>{user?.displayName}</UserName>
            <UserEmail>{user?.email}</UserEmail>
          </div>
          <Edit onClick={() => {
            setEdit(true);
            handleOpen();
            }}>Editar</Edit>
          {/* <UserEmail style={{color: "#b91818", position: 'absolute', right: "6%"}}>Editar</UserEmail> */}
        </UserInfo>
      </Wrapper>
      <div style={{display: "flex", marginTop: "40px", gap: "20px", alignItems: "start", justifyContent: "start", width: "92%"}}>
        <ProfileSettings />
        <PersonalInfo />
      </div>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: "96%"}}>
        <SensorsList />
      </div>
    </Container>
  );
};

export default ProfilePage;
