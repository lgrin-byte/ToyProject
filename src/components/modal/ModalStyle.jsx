import styled, { css, keyframes } from 'styled-components';
import Image from 'next/image';

    const setAttr = (type) => {
        switch (type) {
        case 'question':
            return css`
                width: 358px;
                height: 196px;
                background-color: white;
                border-radius: 5px;

                line-height: 0;
                margin: auto auto 385px;
                animation: fadeInUp 0.5s;
                    
            `;

        default:
            console.log("djfpd",type);
            return css`
                width: 329px;
                height: 659px;
                background-color: white;
                border-radius: 5px;

                line-height: 0;
                margin: 140px auto auto;
                animation: fadeInUp 0.5s;
                        `;
        }
    };
export const Back = styled.div`
    position: fixed; 
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100vh;
    background-color : rgba(0,0,0,0.2);
    z-index : 100;
    box-sizing: border-box;
    display :flex; 
    justify-content:center;
    align-items: flex-end;
    `

export const WrapModal= styled.div`


    ${({ type }) => setAttr(type)}
`
export const CloseBtn = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 15px;
    margin: 23px 20.8px;
    /* span{
        margin-left: 9.2px;
    } */
    &:hover {

    }
`
export const CancelBar= styled(Image)`
    /* position: relative; */

    /* &:hover {
    cursor: pointer;
    background-color: #0F0B19; */

//}
cursor: pointer;

`

export const CloseSpan= styled.span`
    margin-right: 9.2px;
    cursor: pointer;

`



// .bar_modal{
//     position: absolute;
//     top: 16px;
//     left: 170px;
//     border: 2px solid #DBDBDB;
//     border-radius: 5px;
//     width: 50px;
// }

export const Btn= styled.button`
    height: 46px;
    width: 100%;


&:hover {
    cursor: pointer;
    font-weight: 600;
    color: white;
    background-color: #0F0B19;
    transition: 0.5s;
}
`


// @keyframes fadeInUp {
//     0% {
//         opacity: 0;
//         transform: translate3d(0, 100%, 0);
//     }
//     100% {
//         opacity: 1;
//         transform: translateZ(0);
//     }
// }

