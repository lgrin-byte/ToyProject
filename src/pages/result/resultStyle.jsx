import styled, { keyframes,css } from 'styled-components';
import Link from "next/link"

const setAttr = (attr) => {
    switch (attr) {
    case 'cont':
        return css`
    display: flex;
    margin: 0 auto;

        `;
    case 'cont_share':
        return css`
    display: flex;
    width:314;
    justify-content: space-around;

        `
    case 'effect':
        return css`
    display: flex;
    width: 196px;
    margin-left: 21px;
    justify-content: space-around;
    align-items: center;

        `;
    case 'score':
        return css`
        display: flex;
        width: 196px;
        margin-right: 21px;
        justify-content: space-around;
        align-items: center;
    
            `
    case 'share':
        return css`
        display: flex;
        margin-top: 17px;
        flex-direction: column;
        align-items: center;
            `

    }
}

export const ChoiceYear = styled.h2`
    text-align: center;
    margin-bottom: 38px;
`;

export const P = styled.p`
    text-align: center;
    font-size: 16px;
    margin:25px 0 50px;
    color: red;
`;


export const Wrap = styled.div`
    width: 329px;
    text-align: center;

    display: flex;
    flex-direction: column;
    margin: 0 auto ;
    padding-top: 79px;
    
`;

export const Image = styled.div`
height: 350px;
width: 390px;
margin-left: -35px;
background-color: beige;

`
export const YearTitle = styled.div`
    margin-left: 10px;
    position:relative;

`
export const H = styled.span`
    position: absolute;
    font-size: 53px;
    color: #E5DEF5;
    top: 4px;
    left: 3px;
    letter-spacing: 0.5px;

`
export const HB = styled.span`
-webkit-text-stroke: 10px white;
letter-spacing: -1.5px;

    font-size: 58px;
    color: black;

`

export const Box= styled.div`
    width: 5px;
    height: 7px;
    background-color: white;
`


export const ContYear =styled.div`
    ${({ attr }) => setAttr(attr)}

` 


export const Story =styled.p`
    font-size: 15px;
    margin-top: 15px;
    margin-bottom: 70px;
    /* line-height: 23px */
    letter-spacing: -0.7px;

` 

export const Share = styled.span`
    font-size: 12px;
    margin-top: 14px;
`


export const Back = styled.div`
    background: url("/Rectangle.png");
    width: 390px;
    height: 350px;
    margin-top: -28px;
    margin-left: -30px;
    margin-bottom: -18px;
`