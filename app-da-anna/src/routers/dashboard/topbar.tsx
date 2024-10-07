// Topbar.tsx
import React from 'react';
import styled from 'styled-components';
import SignIn from '../../assets/signIn.png';
import Config from '../../assets/grayConfig.png';
import Sino from '../../assets/graySino.png';

const TopbarContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 15px 0px;
  /* background-color: white; */
  /* box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); */
  position: fixed;
  width: calc(100vw - 340px);
  margin-left: 340px;
  z-index: 1;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #E2E8F0;
  border-radius: 15px;
  width: 179px;
  height: 19.5px;
  background-color: #fff;
  color: #A0AEC0;
`;

const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 12px;
`;

const Image = styled.img`
  width: 12px;
  /* height: 12px; */
  /* border-radius: 50%; */
  margin-right: 5px;
  cursor: pointer;
`;

const Text = styled.h3`
  color: #718096;
  font-size: 12px;
`;

const Topbar: React.FC = () => {
  return (
    <TopbarContainer>
        <div style={{display: 'flex', padding: "0 20px"}}>
            <SearchInput placeholder="Buscar" />
            <ProfileArea>
                <Image src={SignIn} alt="User" />
                <Text>Sign In</Text>
                {/* <span>Sair</span> */}
            </ProfileArea>
            <ProfileArea>
                <Image src={Config} alt="User" />
            </ProfileArea>
            <ProfileArea>
                <Image src={Sino} alt="User" />
            </ProfileArea>
        </div>
    </TopbarContainer>
  );
};

export default Topbar;
