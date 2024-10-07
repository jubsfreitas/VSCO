// TablesHeader.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Breadcrumb = styled.div`
  color: #9aa0b3;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 14px;
  color: #1a1f36;
`;

const TablesHeader: React.FC = () => {
  return (
    <HeaderContainer>
      <Breadcrumb>Pages / Tables</Breadcrumb>
      <Title>Tables</Title>
    </HeaderContainer>
  );
};

export default TablesHeader;