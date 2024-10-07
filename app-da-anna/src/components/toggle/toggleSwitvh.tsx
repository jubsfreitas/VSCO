import { useState, ChangeEvent, useCallback, useEffect } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-indent: -9999px;
  width: 43.05px;
  height: 18.5px;
  border-radius: 43px;
  background: ${({ checked }) => (checked ? '#A2C338' : '#E2E8F0')};
  display: block;
  /* border-radius: 100px;   */
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: ${({ checked }) => (checked ? '26.5px' : 'calc(18% - 5px)')};
    top: 2.5px;
    width: 13.5px;
    height: 13.5px;
    background: #fff;
    border-radius: 13.5px;
    transition: 0.3s;
  }
`;

const Input = styled.input``;

export interface TooglerProps {
  value?: boolean;
  onChange?: (index: boolean) => void;
}

const Toggle: React.FC<TooglerProps> = ({ onChange, value }) => {
  const [active, setActive] = useState(!!value);

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setActive(!active);
      onChange?.(e.target.checked);
    },
    [active, onChange],
  );

  useEffect(() => {
    setActive(!!value);
  }, [value]);

  return (
    <StyledLabel checked={active}>
      <Input type="checkbox" checked={active} onChange={handleOnChange} />
    </StyledLabel>
  );
};

export default Toggle;
