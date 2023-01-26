import styled, { css } from 'styled-components';
import Link from "next/link"

    const setAttr = (attr) => {
        switch (attr) {
        case 'question':
            return css`
            background-color: white;
            border: none;
            `;
        case 'change':
            return css`
            width: 36px;
            height: 36px;
            background-color: var(--deep-gray);
            `;
        case 'choice':
            return css`
            background-color: var(--deep-gray);
            margin-bottom: 25px;
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