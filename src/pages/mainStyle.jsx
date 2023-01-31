import styled, { keyframes } from 'styled-components';
import Link from "next/link"


export const Wrap = styled.div`
    width: 329px;
    display: flex;
    flex-direction: column;
    margin: 0 auto ;
    padding-top: 67px;
    text-align: center;
    justify-content: space-around;
    ${'.info'}{
        font-size: 15px;
        margin: 0 0 13px 3px;
        line-height:54px;
        letter-spacing: -0.8px;
        font-style: normal;
        color: #3F3F3F;

    }
`;


export const H = styled.h1`
    font-size: 40px;
` 

export const Image = styled.div`
height: 312px;
margin: 32px 0 23px;
background-color: beige;

`

export const Input = styled.input`
    margin: 12px 0 52px;
    padding: 8px;

    /* 텍스트창 구분을 위해 임시로 넣음 */
    border-bottom: 1px solid black;

`