import styled, { keyframes } from 'styled-components';
import Link from "next/link"
import speaker from '../assets/images/speaker.png'
import Image from 'next/image';


export const focusIn = keyframes` 
    100% {
        filter: blur(2.5px);
    }
    66%{
        filter: blur(6px);

    }
    0% {
        filter: blur(0px);
    }
`

export const Wrap = styled.div`
    width: 329px;
    display: flex;
    flex-direction: column;
    margin: 0 auto ;
    padding-top: 67px;
    text-align: center;
    background-image: url(speaker);
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
    position: absolute;
    font-size: 50px;
    left: 20px;
top: 60px;
z-index: 100;
color:white;
/* text-shadow: -2px 0px #EF6363, 0px 2px #EF6363, 2px 0px #EF6363, 0px -2px #EF6363; */
/* -webkit-text-stroke: 2px red; */
/* border: 6px solid #EF6363; */
` 
export const HB = styled.h1`
    position: absolute;
    font-size: 50px;
    left: 20px;
top: 60px;
color:#EF6363;
/* text-shadow: -2px 0px #EF6363, 0px 2px #EF6363, 2px 0px #EF6363, 0px -2px #EF6363; */
-webkit-text-stroke: 15px #EF6363;
text-shadow: 11px 11px 12px rgb(1 1 1);
/* border: 6px solid #EF6363; */
` 

export const WrapMain = styled.div`
    position: relative;

`

export const Input = styled.input`
    margin: 12px 0 52px;
    padding: 8px;

    /* 텍스트창 구분을 위해 임시로 넣음 */
    border-bottom: 1px solid black;

`

export const ImageMain= styled(Image)`
    margin-left: -30px;
    animation: ${focusIn} 3s both;
    /* -webkit-filter: blur(5px); */
`