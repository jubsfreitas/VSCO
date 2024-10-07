import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import button from "../../assets/button.png";


const CadastroBackView = styled.div`
  width: 600px;
  height: 5;
  background: #fff;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.4),
    0px 208px 125px rgba(0, 0, 0, 0.05), 0px 93px 93px rgba(0, 0, 0, 0.09),
    0px 23px 51px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 60px;
  display: grid;
  align-items: start;

  @media screen and (max-width: 480px) {
    width: 350px;
    height: 330px;
    border-radius: 40px;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    width: 450px;
    height: 400px;
    border-radius: 40px;
  }
`;

const BodyCadastroCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 470px; */
  align-items: center;
  /* margin-left: 9%; */

  @media screen and (max-width: 480px) {
    /* width: 0px;
    margin-left: 0%; */
  }
`;

const LabelCadastro = styled.h1`
  font-family: "Rubik", sans-serif;
  /* font-style: normal; */
  font-weight: 600;
  font-size: 18px;
  /* line-height: 145%; */
  color: #787d82;
  /* textalign: ; */

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

const Cadastro = styled.div`
  display: grid;
  padding: 10% 0;

  @media screen and (max-width: 480px) {
    /* padding: 40px 35px; */
    /* align-items: center; */
  }
`;

const Div = styled.div`
  @media screen and (max-width: 480px) {
  }
`;

const Input = styled.input`
  width: 340px;
  height: 50px;
  font-family: "Rubik", sans-serif;
  border: 0 none;
  outline: none;
  background-color: #e1edff;
  text-align: center;
  border-radius: 8px;
  font-weight: 400;
  font-size: 18px;
  color: #000;

  @media screen and (max-width: 500px) {
    width: 253px;
    height: 33.3px;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    width: 285px;
    height: 40px;
  }
`;

const Tri = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: center; 
    /* position: fixed;  */
    /* bottom: 5%; */
    background-color: transparent;
    width: 250px;
    height: 55px;
    color: white;
    margin-top: 15%;
`;

const BtnSen = styled.img`
  width: 250px;
  height: 55px;
  margin-top: 4%;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 480px) {
    width: 166px;
    /* margin-top: 8%; */
  }
`;

const TextBtn = styled.h1`
    font-size: 20px;
    position: absolute;
    text-align: center;
    cursor: pointer;

  @media screen and (max-width: 480px) {
    /* font-size: 60px; */
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    /* font-size: 65px; */
  }

  @media screen and (min-width: 1156px) {
    /* font-size: 100px; */
  }
`;


function PesoAltura() {
  const navigate = useNavigate();
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [cpf, setCpf] = useState("");
  const [showSpan, setShowSpan] = useState(false);

  const Click = async() => {
    const data = {altura, peso, cpf};
    
    try {
      const response = await fetch('http://127.0.0.1:5000/enviar_dados_e_gerar_senha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso!');
        setShowSpan(true);

        setTimeout(() => {
          // setShowSpan(false);
          navigate('/triagem'); 
        }, 10000); // 10000 ms = 10 segundos
        // navigate("/triagem")
      } else {
        console.error('Erro ao enviar os dados.');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      // console.log(`paciente: ${nome + ' ' + sobrenome}, cpf: ${cpf}, idade: ${idade}`)
      // console.log(data)
    }    
  }

  // function handleClick() {
  //   setShowSpan(true);
  //   setTimeout(() => {
  //     setShowSpan(false);
  //     navigate('/triagem');
  //   }, 10000);
  // }

  // useEffect(() => {
  //   if (showSpan) {
  //     // Defina a classe CSS ou estilos para o <span> visível, se necessário
  //   }
  // }, [showSpan]);

//   const handleClick = useCallback((button: string) => {
//     setActiveButton(button);
//   }, []);
  return (
    <>
      <CadastroBackView
        // style={activeButton === "triagem" ? { display: "none" } : {}}
        >
        <BodyCadastroCard>
          <Cadastro>

            {/* <form> */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 0 1%"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <LabelCadastro>Altura</LabelCadastro>
              </div>
              <Div>
                <Input
                  value={altura}
                  onChange={(event) => {
                    setAltura(event.target.value);
                  }}
                  type="text"
                />
              </Div>
            </div>

            <div
              style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 0 1%"
              }}
            >
              <div 
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
                >
                <LabelCadastro> Peso </LabelCadastro>
              </div>
              <Div>
                <Input
                  value={peso}
                  onChange={(event) => {
                    setPeso(event.target.value);
                  }}
                  type="text"
                  />
              </Div>
            </div>
            <div
              style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 0 1%"
              }}
            >
              <div 
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
                >
                <LabelCadastro> CPF </LabelCadastro>
              </div>
              <Div>
                <Input
                  value={cpf}
                  onChange={(event) => {
                    setCpf(event.target.value);
                  }}
                  type="text"
                  />
              </Div>
            </div>
{/* </form> */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 0 5%"
              }}
              >
              {/* <button></button> */}
              <div
                style={{
                  display: "grid",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Tri>
                  {/* <BtnSen
                    src={button}
                    // title="dados"
                    alt="botão login"
                    onClick={Click}
                    /> */}
                  <TextBtn> Triagem </TextBtn>
                </Tri>
                    {showSpan && <span style={{color: '#000', marginTop: '3%'}}>Apurando dados</span>}
                {/* <BtnCad src={btnCad} alt="botão cadastro" onClick={Click} /> */}
              </div>
            </div>
          </Cadastro>
        </BodyCadastroCard>
      </CadastroBackView>
    </>
  );
}

export default PesoAltura;

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
