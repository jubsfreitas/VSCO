// import { useState, useCallback, useContext } from "react";
import { useState, useCallback } from "react";
// import ReactDOM from "react-dom/client";
import styled from "styled-components";
// import * as Yup from "yup";
// import { Formik } from "formik";
// import { useNavigate } from "react-router-dom";
// import BtnCadastro from "../components/btnCadastro";
// import BtnLogin from "./components/btnLogin";
// import btnLgn from "../src/assets/btnLogin.png";
// import btnCad from "../assets/btnCadastro.png";
// import btnSolSenha from "../assets/solicitarSenha.png";
// import * as Yup from "yup";
// import { cpf } from "cpf-cnpj-validator";
// import { FormContext } from "./root";
// import { Formik } from "formik";
// import { Form, useNavigate, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import button from "../assets/button.png";
// import axios from 'axios';


// const validator = Yup.object().shape({
//   nome: Yup.string().min(6, "Nome não é valido").required("Nome é necessário."),
//   sobrenome: Yup.string().min(2, "Sobrenome não é valido").required("Sobrenome é necessário."),
//   cpf: Yup.string().required("CPF é necessário.").test((value) => cpf.isValid(value)),
//   idade: Yup.number().min(1, "idade não é valida").required("idade é necessária."),
// });

const CadastroBackView = styled.div`
  width: 600px;
  height: 700px;
  background: #fff;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.4),
    0px 208px 125px rgba(0, 0, 0, 0.05), 0px 93px 93px rgba(0, 0, 0, 0.09),
    0px 23px 51px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 60px;
  display: grid;
  align-items: start;

  @media screen and (max-width: 480px) {
    width: 350px;
    height: 530px;
    border-radius: 40px;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    width: 450px;
    height: 600px;
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
  padding: 4% 0;

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
  width: 380px;
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

// const Label = styled.label`
//   /* display: block;
//   position: relative;
//   padding-left: 35px;
//   margin-bottom: 12px;
//   cursor: pointer;
//   font-size: 22px; */
// `;

const Checkbox = styled.input`
  width: 25px;
  height: 50px;
  font-family: "Rubik", sans-serif;
  border: 0 none;
  outline: none;
  background-color: #e1edff;
  text-align: center;
  border-radius: 8px;
  font-weight: 400;
  font-size: 18px;
  /* position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0; */
  /* all: unset;
  border: 1px solid #ddd;
  color: #e1edff;
  width: 20px;
  height: 20px; */
  /* display: inline-block; */

  /* :hover {
    background-color: #ccc;
  } */

  /* input :checked {
    background-color: #ff0a54;
  } */

  @media screen and (max-width: 480px) {
    width: 15px;
    height: 15px;
  }
`;

// const Checkmark = styled.span`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 25px;
//   width: 25px;
//   background-color: #e1edff;
//   border-radius: 2px;
// `;

const BtnCad = styled.img`
  width: 266px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 177px;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    /* width: 200px; */
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

const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: unset;
  width: 300px;
  height: 100px;
  background: #24a2f8;
  border-radius: 15px;

  @media screen and (max-width: 480px) {
    width: 200px;
    height: 66.7px;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    width: 225px;
    height: 75px;
  }
`;

const ButtonCadastro = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 143px;
  height: 88px;
  background: #fff;
  border-radius: 10px;
  position: unset;
  border: 0 none;
  outline: none;
  cursor: pointer;
  outline-offset: none;

  span {
    color: #787d82;
  }

  @media screen and (max-width: 480px) {
    width: 95.3px;
    height: 58.67px;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    width: 107.25px;
    height: 66px;
  }
`;

const ButtonLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 143px;
  height: 88px;
  background: #24a2f8;
  border-radius: 10px;
  position: unset;
  border: 0 none;
  margin-left: 7px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    width: 95.3px;
    height: 58.67px;
    margin-left: 4.7px;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    width: 107.25px;
    height: 66px;
    margin-left: 5.25px;
  }
`;

const Text = styled.h3`
  font-family: "Rubik", sans-serif;
  /* font-style: normal; */
  font-weight: 600;
  font-size: 28px;
  /* line-height: 145%; */
  color: #24a2f8;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 20px;
    line-height: 100%;
  }

  @media screen and (min-width: 480px) and (max-width: 768px) {
    font-size: 20px;
    /* line-height: 100%; */
  }
`;

const LoginBackView = styled.div`
  width: 600px;
  height: 600px;
  /* height: 700px; */
  background: #fff;
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.4),
    0px 208px 125px rgba(0, 0, 0, 0.05), 0px 93px 93px rgba(0, 0, 0, 0.09),
    0px 23px 51px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 60px;
  display: grid;
  align-items: start;

  @media screen and (max-width: 480px) {
    width: 350px;
    height: 400px;
  }
  
  @media screen and (min-width: 480px) and (max-width: 768px) {
    width: 450px;
    height: 550px;
    border-radius: 40px;
  }
`;

const BodyLoginCard = styled.div`
  display: flex;
    border-radius: 40px;
  flex-direction: column;
  justify-content: center;
  /* width: 470px; */
  align-items: center;
  /* margin-left: 9%; */

  @media screen and (max-width: 480px) {
  }
`;

const LabelLogin = styled.h1`
  font-family: "Rubik", sans-serif;
  /* font-style: normal; */
  font-weight: 600;
  font-size: 24px;
  /* line-height: 145%; */
  color: #787d82;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const Login = styled.div`
  display: grid;
  padding: 4% 0;

  @media screen and (max-width: 480px) {
    /* padding: 40px 35px; */
    align-items: center;
  }
`;

const Triagem = styled.h1`
  font-family: "Rubik", sans-serif;
  /* font-style: normal; */
  font-weight: 500;
  font-size: 20px;
  /* line-height: 145%; */
  color: #787d82;
  text-align: center;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

// const LabelError = styled(CaixaContainer)`
//     margin-left: 0;
//     display: grid;
//     padding: 5px 20px;
//     color: #a00;
//     background: transparent;

//     @media screen and (max-width: 480px) {
//         padding: 3px 10px;
//         font-size: 12px;
//     }
// `;

// const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
// `;

// const StyledCheckbox = styled.label`
// `;

// const validator = Yup.object().shape({
//   email: Yup.string()
//     .email("Email não valido.")
//     .required("Email é necessário."),
//   senha: Yup.string()
//     .min(5, "A senha deve conter 5 caracteres.")
//     .max(5, "A senha deve conter 5 caracteres.")
//     .required("Senha é necessária.")
// });

// const initialValues = {};
// interface Values {
//   nome: string;
//   sobrenome: string;
//   cpf: string;
//   cep: string;
//   idade: number;
// }

// const validator = Yup.object().shape({
//   nome: Yup.string().min(3, "Nome não é valido").required("Nome é necessário."),
//   sobrenome: Yup.string().min(3, "sobrenome não é valido").required("sobrenome é necessário."),
//   cpf: Yup.string().required("CPF é necessário.").test((value) => cpf.isValid(value)),
//   idade: Yup.number().min(1, "Idade não é valida").required("Idade é necessária."),
// });

// const initialValues = {
//   nome: "",
//   sobrenome: "",
//   cpf: "",
//   idade: "",
// };

function Card() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  // const [checked, setChecked] = useState(false);
  const [activeButton, setActiveButton] = useState<string>("");
  // const { formData, setFormData } = useContext(FormContext);

  function calcularIdade(dataNascimento: string) {
    const hoje = new Date();
    const dataNasc = new Date(dataNascimento);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
      idade--;
    }
    return idade;
  }

  const idade = calcularIdade(nascimento);

  const currentDate = new Date();
  const dataCriacao = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;

  console.log(dataCriacao)
  // console.log(new Date)

  
  // console.log(calcularIdade('23/11/2001'));

  // const enviarDados = async () => {
  //   const data = { nome, sobrenome, cpf, idade };
  //   const resposta = await axios.post("/enviar_dados", data);
  //   console.log(resposta.data);
  // };

  const Click = async() => {
    const data = {nome, sobrenome, cpf, idade, dataCriacao};
    
    try {
      const response = await fetch('http://127.0.0.1:5000/enviar_dados_e_acionar_acoes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        console.log('Dados enviados com sucesso!');
        handleClick("triagem")
      } else {
        console.error('Erro ao enviar os dados.');
      }
    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      navigate("triagem")
      // console.log(`paciente: ${nome + ' ' + sobrenome}, cpf: ${cpf}, idade: ${idade}`)
      // console.log(data)
    }    
  }

  const DadosTriagem = async() => {
    // const data = {nome, sobrenome, cpf, idade, dataCriacao};
    
    try {
      const response = await fetch('http://127.0.0.1:5000/reconhecimento_facial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify(data)
      });

      if (response.ok) {
        // console.log('Reconhecimento feito!');
        navigate("/pesoaltura")
      } else {
        console.error('Erro ao fazer reconhecimento.');
      }
    } catch (error) {
      console.error('Erro ao fazer reconhecimento:', error);
      navigate("/pesoaltura")
      // console.log(`paciente: ${nome + ' ' + sobrenome}, cpf: ${cpf}, idade: ${idade}`)
      // console.log(data)
    }    
  }



  // fetch('/data', {
  //   method: 'POST',
  //   headers: {'Content-Type': 'application/json'},
  //   body: JSON.stringify(data)
  // })
  // .then(response => response.json())
  // .then(data => console.log(data));  
   
  // function handleCheckboxChange(){
  //   setChecked(!checked);
  // }

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };

  const handleClick = useCallback((button: string) => {
    setActiveButton(button);
  }, []);
  // const navigate = useNavigate();
  return (
    <>
      <CadastroBackView
        style={activeButton === "triagem" ? { display: "none" } : {}}
      >
        <BodyCadastroCard>
          <Cadastro>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "5%"
              }}
            >
              <ContainerButton>
                <div>
                  <ButtonLogin
                    title="Triagem"
                    onClick={() => handleClick("triagem")}
                  >
                    <Text style={{ color: "#fff" }}>Triagem</Text>
                  </ButtonLogin>
                </div>
                <div>
                  <ButtonCadastro
                    title="Cadastro"
                    onClick={() => handleClick("cadastro")}
                  >
                    <Text>Cadastro</Text>
                  </ButtonCadastro>
                </div>
              </ContainerButton>
            </div>

            <form onSubmit={Click}>
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
                <LabelCadastro>Nome</LabelCadastro>
              </div>
              <Div>
                <Input
                  value={nome}
                  onChange={(event) => {
                    setNome(event.target.value);
                  }}
                  type="text"
                />
                {/* //   error={!!emailError}
                        //   type="email"
                        //   name="email"
                        //   onChange={handleChange("email")}
                        //   value={email}
                        // /> */}
                {/* {emailError && <LabelError>{emailError}</LabelError>} */}
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
                <LabelCadastro> Sobrenome </LabelCadastro>
              </div>
              <Div>
                <Input
                  value={sobrenome}
                  onChange={(event) => {
                    setSobrenome(event.target.value);
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
                <LabelCadastro>CPF</LabelCadastro>
              </div>
              <Div>
                <Input
                  value={cpf}
                  type="cpf"
                  name="cpf"
                  // onChange={handleChange("cpf")}
                  onChange={(event) => {
                    setCpf(event.target.value);
                  }}
                  // type="text"
                />
                {/* <Input
                          error={!!passError}
                          name="password"
                          type="password"
                          onChange={handleChange("pass")}
                          value={pass}
                        /> */}
                {/* {passError && <LabelError>{passError}</LabelError>} */}
              </Div>
            </div>

            <div
              style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 0 3%"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <LabelCadastro>Data de nascimento</LabelCadastro>
              </div>
              <Div>
                <Input
                  value={nascimento}
                  style={{ alignItems: 'center', paddingRight: '10px'}}
                  id="dataNascimento"
                  onChange={(event) => {
                    setNascimento(event.target.value);
                  }}
                  type="date"
                />
              </Div>
            </div>
</form>
            {/* <div>
                        <LabelCadastro> Escolha uma senha </LabelCadastro>
                      </div>
                      <Div>
                        <Input
                          value={se}
                          onChange={(event) => {
                            setSenha(event.target.value);
                          }}
                          type="password"
                        />
                      </Div> */}

            {/* <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between"
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column"
                          }}
                        >
                          <LabelCadastro> CEP </LabelCadastro>
                          <Div>
                            <Input
                              style={{ width: "220px" }}
                              value={cep}
                              onChange={(event) => {
                                setCep(event.target.value);
                              }}
                              type="text"
                            />
                          </Div>
                        </div>
                        <div>
                          <LabelCadastro> Número </LabelCadastro>
                          <Div>
                            <Input
                              style={{ width: "110px" }}
                              value={num}
                              onChange={(event) => {
                                setNum(event.target.value);
                              }}
                              type="text"
                            />
                          </Div>
                        </div>
                      </div> */}
            {/* </div> */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Input
                  style={{ width: "15px" }}
                  type="checkbox"
                  // checked={checked}
                  // onChange={handleChange}
                />
              </label>
              <LabelCadastro
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  paddingRight: "2px",
                  paddingLeft: "5px"
                }}
              >
                {"  "}
                Li e aceito os {"  "}
              </LabelCadastro>
              <LabelCadastro style={{ fontSize: "12px", fontWeight: "700" }}>
                {"  "}
                Termos de Responsabilidade{" "}
              </LabelCadastro>
            </div>
            {/* <a href="/sobre" style={{ display: "flex", alignItems: "center", textDecoration: "none", marginTop: "1%" }}>
              <div style={{alignItems: "center"}}> */}
                {/* <TextSession style={{ color: "#1C70BB" }}> Ler mais sobre nós </TextSession>
                <Img src={Arrow} alt="Arrow" /> */}
              {/* </div>
            </a> */}

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
                {/* <BtnCad src={btnCad} alt="botão cadastro" onClick={Click} /> */}
              </div>

              {/* <Button
                        loading={isSubmitting}
                        disable={!(dirty && isValid)}
                        title="Login"
                        color="#202E59"
                        style={{ width: "auto" }}
                        onClick={submitForm}
                      /> */}
              {/* {status && <LabelError>{status}</LabelError>} */}
            </div>
          </Cadastro>
          {/* </> */}
          {/* ); */}
          {/* }} */}
          {/* </Formik> */}
        </BodyCadastroCard>
      </CadastroBackView>

      <LoginBackView
        style={activeButton === "triagem" ? {} : { display: "none" }}
      >
        <BodyLoginCard>
          <Login>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "3%"
              }}
            >
              <ContainerButton>
                <div>
                  <ButtonLogin
                    style={{ background: "#fff" }}
                    title="Login"
                    onClick={() => handleClick("triagem")}
                  >
                    <Text>Triagem</Text>
                  </ButtonLogin>
                </div>
                <div>
                  <ButtonCadastro
                    style={{ background: "#24a2f8" }}
                    title="Cadastro"
                    onClick={() => handleClick("cadastro")}
                  >
                    <Text style={{ color: "#fff" }}>Cadastro</Text>
                  </ButtonCadastro>
                </div>
              </ContainerButton>
              {/* <BtnLogin /> */}
              {/* <button></button> */}
            </div>
            {/* <div style={{ margin: "11% 0 2%" }}>
                      <LabelLogin>Boas vindas a XCENE Parceria</LabelLogin>
                      <Title>Login</Title>
                    </div> */}
            <div
              style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 0 3%"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <LabelLogin
                  style={{
                    // fontSize: "20",
                    marginTop: "4%",
                    marginBottom: "4%"
                  }}
                >
                  {" "}
                  Marque caso se enquadre{" "}
                </LabelLogin>
              </div>
              <Div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginBottom: "-2%"
                  }}
                >
                  {/* <Label> */}
                    <Checkbox
                      type="checkbox"
                      // checked={checked}
                      // onChange={handleChange}
                    />
                    {/* <Checkmark></Checkmark> */}
                  {/* </Label> */}
                  
                  <Triagem> Desmaio; </Triagem>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginBottom: "-2%"
                  }}
                >
                  <Checkbox
                    type="checkbox"
                    // checked={checked}
                    // onChange={handleChange}
                  />
                  <Triagem> Dificuldade respiratória; </Triagem>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginBottom: "-2%"
                  }}
                >
                  <Checkbox
                    type="checkbox"
                    // checked={checked}
                    // onChange={handleChange}
                  />
                  <Triagem> Dor no peito; </Triagem>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginBottom: "-2%"
                  }}
                >
                  <Checkbox
                    type="checkbox"
                    // checked={checked}
                    // onChange={handleChange}
                  />
                  <Triagem> Episódio de convulsão; </Triagem>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginBottom: "-2%"
                  }}
                >
                  <Checkbox
                    type="checkbox"
                    // checked={checked}
                    // onChange={handleChange}
                  />
                  <Triagem> Febre nas últimas horas; </Triagem>
                  {/* <Triagem> febre superior a 38°C; </Triagem> */}
                </div>
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginBottom: "-2%"
                  }}
                >
                  <Checkbox
                    style={{ width: "25px" }}
                    type="checkbox"
                    // checked={checked}
                    // onChange={handleChange}
                  />
                  <Triagem> fez algum transplante recentemente </Triagem>
                </div> */}
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginBottom: "-2%"
                  }}
                >
                  <Checkbox
                    style={{ width: "25px" }}
                    type="checkbox"
                    // checked={checked}
                    // onChange={handleChange}
                  />
                  <Triagem> passou por alguma cirurgia recentemente </Triagem>
                </div> */}
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginBottom: "-2%"
                  }}
                >
                  <Checkbox
                    style={{ width: "25px" }}
                    type="checkbox"
                    // checked={checked}
                    // onChange={handleChange}
                  />
                  <Triagem>
                    {" "}
                    teve contato com um animal com suspeita de raiva{" "}
                  </Triagem>
                </div> */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginBottom: "-2%"
                  }}
                >
                  <Checkbox
                    type="checkbox"
                    // checked={checked}
                    // onChange={handleChange}
                  />
                  <Triagem> Tosse; </Triagem>
                  {/* <Triagem> tosse por mais de 2 semanas </Triagem> */}
                </div>
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    marginBottom: "-2%"
                  }}
                >
                  <Checkbox
                    style={{ width: "25px" }}
                    type="checkbox"
                    // checked={checked}
                    // onChange={handleChange}
                  />
                  <Triagem>
                    {" "}
                    visitou recentemente uma área onde a malária é comum{" "}
                  </Triagem>
                </div> */}
              </Div>
            </div>
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
                {/* <Link> */}
                <Tri>
                  {/* <BtnSen
                    src={button}
                    title="Solicitar senha"
                    alt="botão login"
                    onClick={DadosTriagem}
                  /> */}
                  <TextBtn> Triagem </TextBtn>
                </Tri>
                
                {/* </Link> */}
              </div>

              {/* <Button
                        loading={isSubmitting}
                        disable={!(dirty && isValid)}
                        title="Login"
                        color="#202E59"
                        style={{ width: "auto" }}
                        onClick={submitForm}
                      /> */}
              {/* {status && <LabelError>{status}</LabelError>} */}
            </div>
          </Login>
        </BodyLoginCard>
      </LoginBackView>
    </>
  );
}

export default Card;

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
