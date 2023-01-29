import styled, { css, keyframes } from 'styled-components';
import Link from "next/link"

const scale = keyframes` 
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }

`

const scaleDown = keyframes` 
    0% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }

`

    const setAttr = (attr) => {
        switch (attr) {
        case 'question':
            return css`
            background-color: white;
            border: none;
            `;
        case 'change':
            return css`
            background-color: #EF6363;
            color: white;
            animation: ${scale} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
            `;
        case 'choice':
            return css`
            background-color: var(--deep-gray);
            margin-bottom: 25px;
            `;
        case 'empty':
            return css`
                border: 1px solid black;
                animation: ${scaleDown} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

            `;
        
        default:
            return css`
                border: 1px solid black;
                
            `;
        }
    };


export const Btn = styled(Link)`
    height: 60px;
    width: 329px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    /* &:hover{
        border: 1px solid blue;          

    } */

    ${({ attr }) => setAttr(attr)}
`;