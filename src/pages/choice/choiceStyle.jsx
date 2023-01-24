import styled, { keyframes } from 'styled-components';
import Link from "next/link"

export const BtnYear = styled(Link)`
    height: 60px;
    width: 329px;
    border-radius: 5px;
    margin-bottom: 25px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;

`;

export const P = styled.p`
    text-align: center;
    margin-bottom: 10px;
    color: red;
`;

export const BtnChoice = styled(Link)`
    height: 60px;
    width: 329px;
    border-radius: 5px;
    margin-bottom: 25px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrap = styled.div`
    width: 329px;
    display: flex;
    flex-direction: column;
    margin: 0 auto ;
`;