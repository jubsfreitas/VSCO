import styled from "styled-components";

export const Root = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2vw 0 2vw 0;
    padding: 0 10%;
    /* max-width: 1000px; */
`;

export const Img = styled.img`
    /* width: 15.65vw; 
    height: 3.5vw; */
    min-width: 200px;
    max-width: 250px;
    min-height: 45px;
    max-height: 90px;

    @media screen and (max-width: 480px) {
        width: 117.4px; 
        height: 25.3px;
        min-width: 78.5px;
        max-width: 200px;
        min-height: 17.5px;
        max-height: 45px;
    }
`;