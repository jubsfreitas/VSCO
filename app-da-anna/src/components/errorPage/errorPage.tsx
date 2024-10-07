import { useRouteError } from "react-router-dom";
import styled from "styled-components";
import RootError from "../rootError";

interface ErrorType {
  statusText?: string;
  message?: string;
}

const ErrorPag = styled.div`
  display: grid;
  max-height: 100vw;
  /* background: #04042c50; */
`;

const Div = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Ops = styled.h1`
  /* font-family: 'Rubik'; */
  font-size: 84px;
`;

const P = styled.h1`
  /* font-family: 'Rubik'; */
  font-size: 38px;
  font-weight: 400;
  color: #c42222;
`;

const A = styled.a`
  text-decoration: none;
  color: #1c71bb;
`;

export default function ErrorPage() {
  // const error = useRouteError();
  const error = useRouteError() as ErrorType;
  console.error(error);

  return (
    <>
      <ErrorPag>
        <RootError />
        <Div id="error-page">
          <Ops>404</Ops>
          <P>Desculpe, ocorreu um erro inesperado.</P>
          <P>
            <i>{error.statusText || error.message}</i>
          </P>
          <A href={"/"}>
            <P style={{fontSize: "30px"}}>Voltar ao Inicio</P>
          </A>
        </Div>
      </ErrorPag>
    </>
  );
}