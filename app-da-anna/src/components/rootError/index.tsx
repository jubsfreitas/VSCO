import React from "react";
import "react-activity/dist/library.css";
import { Root, Img } from "./style"
import vsco from "../../assets/vsco.png";
import { Link } from "react-router-dom";

const RootError: React.FC = () => {
    return ( 
    <>
        <Root>
            <div>
                <Link to="/">                 
                    <Img src={vsco} alt="logo LRT" />
                </Link>
            </div>
        </Root>
    </>
    );
};

export default RootError;