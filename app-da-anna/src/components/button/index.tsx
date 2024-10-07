import styled, { css } from 'styled-components';

const Button = styled.button<{ loading?: boolean; disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 327px;
  height: 56px;
  border-radius: 16px;
  color: #fff;
  background-color: #2D3748;
  border: 0;
  margin-top: 5%;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;

  position: relative;

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

export default Button;
