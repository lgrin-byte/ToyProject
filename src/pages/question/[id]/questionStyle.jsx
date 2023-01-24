import styled, { keyframes } from 'styled-components';

export const Wrap = styled.div`
    width: 329px;
    height: 700px;
    display: flex;
    flex-direction: column;
    margin: 0 auto ;
    justify-content: space-around;
`;

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Player = styled.div`
    width: 327px;
    height: 223px;
    padding: 30px;
    background-color: purple;
`;

export const Btn = styled.button`
    padding: 5px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid black;
`;

export const Input = styled.input`
    margin: 12px 0;
    padding: 8px;

    /* 텍스트창 구분을 위해 임시로 넣음 */
    border-radius: 10px;
    background-color: rgba(0, 29, 36, 0.1);


`

export const Ment = styled.p`
    text-align: center;
    color: red;
    margin: 10px 0;
`