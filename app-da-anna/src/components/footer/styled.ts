import styled from "styled-components";
// import { Link } from "react-router-dom";

export const ContentFooter = styled.footer`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: ${({ theme: { background } }) => background};
    padding: 0 0 0 4vw; //
    /* height: 100%; */
    /* width: 100%; */
    background-size: cover;
    /* min-width: 300px; */
    /* max-width: 1000px; */

    /* Background/Card */
    background: ${({ theme: { footer } }) => footer};
    
    * {
        color: ${({ theme: { paper } }) => paper};
    }

    @media screen and (max-width: 480px) {
        /* flex-direction: column; */
        /* height: 1.5rem; */
        width: 100%;
        flex-wrap: nowrap;
        /* justify-content: center; */
        padding: 0;
    }
`;


