// ProfileSettings.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Toggle from '../../components/toggle/toggleSwitvh';

const SettingsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SettingsBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 517px;
  height: 377.5px;
  align-items: start;
`;

const ToggleSwitch = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px 0;
  gap: 15px;
`;

const Label = styled.label`
  color: #A0AEC0;
`;

const SwitchInput = styled.input`
  accent-color: #00d77a;
`;

const ProfileSettings: React.FC = () => {
  const [toggle, setTogle] = useState<boolean>(false)

  return (
    <SettingsContainer>
      <SettingsBlock>
        <h3 style={{color: "#2D3748", fontSize: "18px", fontWeight: "bold"}}>Configurações</h3>
        <h3 style={{color: "#A0AEC0", fontSize: "10px"}}>CONTA</h3>
        <ToggleSwitch>
          {/* <SwitchInput type="checkbox" defaultChecked /> */}
          <Toggle
            value={toggle}
            onChange={(e) => {
              setTogle(e);
            }}
          />
          <Label>Receber email sobre informações de risco</Label>
        </ToggleSwitch>
        <ToggleSwitch>
          <Toggle
            value={toggle}
            onChange={(e) => {
              setTogle(e);
            }}
          />
          <Label>Receber email sobre novidades SCANIA</Label>
          {/* <SwitchInput type="checkbox" defaultChecked /> */}
        </ToggleSwitch>
      {/* </SettingsBlock> */}
      {/* <SettingsBlock> */}
        <h3 style={{color: "#A0AEC0", fontSize: "10px"}}>APLICAÇÃO</h3>
        <ToggleSwitch>
          <Toggle
            value={toggle}
            onChange={(e) => {
              setTogle(e);
            }}
          />
          <Label>Novos projetos e novidades</Label>
          {/* <SwitchInput type="checkbox" /> */}
        </ToggleSwitch>
        <ToggleSwitch>
          <Toggle
            value={toggle}
            onChange={(e) => {
              setTogle(e);
            }}
          />
          <Label>Receber feedback do produto mensalmente</Label>
          {/* <SwitchInput type="checkbox" /> */}
        </ToggleSwitch>
        <ToggleSwitch>
          <Toggle
            value={toggle}
            onChange={(e) => {
              setTogle(e);
            }}
          />
          <Label>Notificar em caso de alertas</Label>
          {/* <SwitchInput type="checkbox" defaultChecked /> */}
        </ToggleSwitch>
      </SettingsBlock>
    </SettingsContainer>
  );
};

export default ProfileSettings;