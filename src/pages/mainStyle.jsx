import styled, { keyframes } from 'styled-components';
import Link from "next/link"


export const Wrap = styled.div`
    width: 329px;
    height: 720px;
    display: flex;
    flex-direction: column;
    margin: 0 auto ;
    text-align: center;
    justify-content: space-around;

`;

export const H = styled.h1`
    font-size: 40px;
` 

export const Image = styled.div`
height: 312px;

background-color: beige;

`

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

export const Input = styled.input`
    margin: 12px 0;
    padding: 8px;

    /* 텍스트창 구분을 위해 임시로 넣음 */
    border-bottom: 1px solid black;

`