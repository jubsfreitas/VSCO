// // import React, { useState } from 'react';
// import styled from "styled-components";
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import lrt from "./assets/LRT.png";
// import reply from "./assets/reply.png";
// import Card from './card';

// const CadContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   // background-color: #fff;
//   // min-height: 100vh;
//   // min-width: 100vw;

//   @media screen and (max-width: 480px) {
//   }
// `;

// const CadSession = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   margin-top: -20%;
//   padding-bottom: 5%;
//   position: absolute;

//   @media screen and (max-width: 480px) {
//     margin-top: -65%;
//   }

//   @media screen and (min-width: 480px) and (max-width: 768px) {
//     margin-top: -40%;
//   }

//   @media screen and (min-width: 1156px) {
//     /* margin-top: -25%; */
//   }
// `;

// const Logo = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   position: absolute;
//   top: 0;
// `;

// const LRT = styled.img`
//   width: 200px;
//   padding: 2%;

//   @media screen and (max-width: 480px) {
//     width: 130px;
//   }
// `;

// const Reply = styled.img`
//   width: 237px;
//   height: 62.5px;
//   padding: 2%;

//   @media screen and (max-width: 480px) {
//     width: 158px;
//     height: 41.67px;
//   }
// `;

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <>
//       <CadContainer>
//       <Logo>
//         <LRT src={lrt} alt="logo LRT" />{" "}
//         <Reply style={{}} src={reply} alt="logo Reply" />{" "}
//       </Logo>
//       <CadSession>
//         <Card />
//         {/* <PaginaTriagem /> */}
//       </CadSession>
//       {/* <CadSession style={{ height: "50px" }} /> */}
//     </CadContainer>
//       {/* <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>AAAAAAAAA</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           Dante {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   )
// }

// export default App


import React from "react";
import "./App.css";
import { AuthProvider } from "./contexts/auth";

import Routers from "./routers";

function App() {
    return (
        <AuthProvider>
            <React.StrictMode>
                <Routers />
            </React.StrictMode>
        </AuthProvider>
    );
}

export default App;