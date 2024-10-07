// ProfileHeader.tsx
import React from 'react';
import styled from 'styled-components';
import useAuthContext from '../../contexts/auth';
// import { getAuth, signOut } from 'firebase/auth';


const HeaderContainer = styled.div`
  background-color: #1a1f36;
  color: white;
  padding: 30px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 20px;
`;

const UserName = styled.h2`
  margin: 0;
`;

const UserEmail = styled.p`
  margin: 0;
  color: #9aa0b3;
`;

const ProfileHeader: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <HeaderContainer>
      <UserInfo>
        <Avatar src="https://via.placeholder.com/80" alt="User Avatar" />
        <div>
          <UserName>{user?.displayName}</UserName>
          <UserEmail>{user?.email}</UserEmail>
        </div>
      </UserInfo>
    </HeaderContainer>
  );
};

export default ProfileHeader;