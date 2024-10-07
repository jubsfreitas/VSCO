import styled from 'styled-components';

export const FileInput = styled.input`
  display: none; //tira o botão escolher arquivo
`;

export const FileLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
  cursor: pointer;

  &::before {
    content: url('assets/image.png');
  }
`;

export const Button = styled.button`
  display: flex;
  width: 327px;
  height: 56px;
  /* padding: 10px 18px; */
  border: 0 none;
  border-radius: 16px;
  background: #acb8c4;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-family: 'Manrope';
  cursor: pointer;

  &:hover {
    background: #054f91;
  }

  @media screen and (max-width: 480px) {
    width: 15px;
    height: 15px;
    /* border-radius: 2px; */
  }
`;

export const BtnText = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  /* line-height: 0%; */

  @media screen and (max-width: 480px) {
    font-size: 12px;
    text-align: center;
    line-height: 0%;
  }
`;

export const Message = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #67cf12;
`;

export const Image = styled.img`
  width: 2.7vw;

  @media screen and (max-width: 480px) {
    width: 20px;
  }
`;

export const Btn = styled.button`
  font-family: 'Manrope';
  font-weight: 700;
  font-size: 16px;
  /* line-height: 0%; */
  color: #1b242d;
  background: #6e8fb1;
  border-radius: 16px;
  border: 0 none;
  outline: none;
  height: 50px;
  width: 200px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 20px;
  }
`;

export const Imagem = styled.div<{
  image?: string;
  width?: string;
  height?: string;
  br?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => (width ? width : '327px')};
  height: ${({ height }) => (height ? height : '150px')};
  border-radius: ${({ br }) => (br ? br : '16px')};
  background: ${({ image }) => (image ? `url(${image})` : `#acb8c4`)} no-repeat
    center;
  background-size: cover;
`;
