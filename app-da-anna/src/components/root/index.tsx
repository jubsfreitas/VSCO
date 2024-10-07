import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../menu";
// import Footer from "../footer";
// import ContainterBackNavBar from "./navbar";

const RootElement: React.FC = () => {
    return (
        <div style={{ border: 0, padding: 0, width: "100vw", display: "flex"
        // minWidth: "400px"
         }}>
            {/* <ContainterBackNavBar /> */}
            <Menu />
            <Outlet />
            {/* <Footer /> */}
        </div>
    );
};

export default RootElement;