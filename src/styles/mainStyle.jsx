import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { ModalBtn } from "../components/Button";

export const focusIn = keyframes` 
    100% {
        filter: blur(3px);
    }
    0% {
        filter: blur(0px);
    }
`;

export const focusSize = keyframes` 
    100% {
        font-size: 50px;
    }
    0% {
        font-size: 14px;
        
    }    

`;

export const focusScale = keyframes` 
    0% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1);
    }

`;

export const Wrap = styled.div`
    width: 329px;
    height: 100vh;
    min-height: 844px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 32px;
    text-align: center;
    ${".info"} {
        font-size: 15px;
        margin: 0px 0 13px 3px;
        line-height: 54px;
        letter-spacing: -0.8px;
        font-style: normal;
        color: #3f3f3f;
    }
`;

export const ImgMain = styled(Image)`
    position: absolute;
    animation: ${focusScale} 1s cubic-bezier(0.775, 0.885, 0.32, 1.275) forwards
        alternate infinite;

    width: 291px;
    height: 116px;
    left: 20px;
    top: 100px;
`;
export const H = styled.h1`
    position: absolute;
    font-size: 50px;
    animation: ${focusScale} 1s cubic-bezier(0.775, 0.885, 0.32, 1.275) forwards
        alternate infinite;
    left: 20px;
    top: 90px;
    z-index: 3;
    color: white;
`;
export const HB = styled.h1`
    position: absolute;
    font-size: 50px;
    left: 20px;
    top: 90px;
    animation: ${focusScale} 1s cubic-bezier(0.775, 0.885, 0.32, 1.275) forwards
        alternate infinite;
    color: #ef6363;
    -webkit-text-stroke: 15px #ef6363;
    text-shadow: 11px 11px 12px rgb(1 1 1);
`;

export const WrapMain = styled.div`
    position: relative;
    margin-bottom: 10px;
    ${ModalBtn} {
        position: absolute;
        top: 245px;
        left: 96px;
    }
`;

export const Input = styled.input`
    margin: 2px 0 30px;
    padding: 8px;
    text-align: center;
    font-size: 30px;
    color: black;
    text-shadow: -2px 0px white, 0px 2px white, 2px 0px white, 0px -2px white;
    border-bottom: 1px solid black;
`;

export const ImageMain = styled(Image)`
    margin-left: -30px;
    animation: ${focusIn} 2s both alternate;
`;
