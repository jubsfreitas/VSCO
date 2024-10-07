import styled from 'styled-components';

const Input = styled.input`
  display: flex;
  width: 291px;
  height: 56px;
  border-radius: 16px;
  border: 0 none;
  outline: 0;
  background: #eff0ff;
  padding: 10px 18px;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  color: #2D3748;
  margin-top: 6%;
  box-shadow:
    #25313d44 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.63) -3px -3px 6px 1px inset;
`;

const InputLabel = styled.label`
  font-size: 18px;
  opacity: 0.75;
`;

export default Input;

export { InputLabel };
