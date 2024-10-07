// PersonalInfo.tsx
import React from 'react';
import styled from 'styled-components';
import useAuthContext from '../../contexts/auth';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 517px;
  height: 377.5px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Label = styled.p`
  font-weight: bold;
  color: #718096;
`;

const Value = styled.p`
  color: #A0AEC0;
`;

const PersonalInfo: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <InfoContainer>
      <h3 style={{color: "#2D3748"}}>Informações Pessoais</h3>
      <InfoRow>
        <Label>Nome:</Label>
        <Value>{user?.displayName}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Mobile:</Label>
        <Value>{user?.phoneNumber}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Email:</Label>
        <Value>{user?.email}</Value>
      </InfoRow>
      <InfoRow>
        <Label>Localização:</Label>
        <Value>São Paulo</Value>
      </InfoRow>
    </InfoContainer>
  );
};

export default PersonalInfo;