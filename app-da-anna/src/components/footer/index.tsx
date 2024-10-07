import React from "react";
import { ContentFooter } from "./styled";
// import { idText } from "typescript";
// import { Link } from "react-router-dom";

// export const email = "comercial@xcene.com.br";
// export const number = "+5511958746055";

// const Numero = <A href={`https://wa.me/${number}`} rel="noreferrer" target="_blank">
// +55 (11) 95874-6055
// </A>;

// const EmailX = <A id="emailX" style= {{ color: "#1C70BB" }} 
// href={`mailto:${email}?body=Vim%20pelo%20site`}>{email}</A>;


const Footer: React.FC = () => {
    // const handleClick = () => {
    //     window.scrollTo({top: 0, behavior: 'smooth'});
    // };

    return (
        <ContentFooter>
            {/* <div>
                <RedesSociais>
                    <a href="https://www.facebook.com/Xcenecontrole/">
                        <img src={Facebook} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/oficialxcenebr/">
                        <img style={{ padding: "1vw" }} src={Instagram} alt="Instagram" />
                    </a>
                </RedesSociais>
            </div> */}

            {/* <Session>
                <Pre>
                        <NavIten onClick={handleClick} to="/sobre">Sobre</NavIten>
                        <NavIten onClick={handleClick} to="/products">Produtos</NavIten>
                        <NavIten onClick={handleClick} to="/register">Revenda</NavIten>
                        <NavIten onClick={handleClick} to="/assistencia">Assistência</NavIten>
                        <NavIten onClick={handleClick} to="/contato">Contato</NavIten>
                </Pre>
            
                <Pree>
                    <Contato>Vendas</Contato>
                    <Contato>Phone: {Numero}</Contato>
                    <Contato>Email: {EmailX}</Contato>
                </Pree>
            </Session> */}
        </ContentFooter>
    );
};

export default Footer;