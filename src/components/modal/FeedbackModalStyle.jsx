import styled, { css, keyframes } from 'styled-components';

const setAttr = (attr) => {
    switch (attr) {
    case 'active':
        return css`
            background: #EF6363;
            color: white;
        `;
    default:
        return css`
            background: #DADADA;
            color: white;
        `;
}
}

export const Back = styled.div`
    position: fixed; 
    top: 200px;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    backdrop-filter: blur(2.5px);
    z-index : 100;
    box-sizing: border-box;
    display :flex; 
    justify-content:center;
    align-items: flex-end;
    `

export const Wrap = styled.div`
        width: 330px;
        margin: auto;
        margin-top: 30px;
        font-weight: 400;
        font-size: 15px;
        line-height: 30px;
        letter-spacing: -0.5px;
`

export const Cont = styled.div`
    display: flex;
    justify-content:space-between;
`

export const Input = styled.input`
font: inherit;
width: 210px;
padding-left: 8px;
margin-top: 2px;
/* letter-spacing: -0.5px; */
`

export const CheckBox = styled.div`
    ${'input'}{

        accent-color: #EF6363;
        width: 14px;
        height: 14px;
        position: relative;
        top: 4px;
        margin-right: 6px;
    }
    ${'label'}{
        position: relative;
        top: 1px;
        margin-right: 6px;
    }
`
export const Comment = styled.textarea`
    font: inherit;
    width: 295px;
    letter-spacing: -0.5px;
    line-height: 20px;
    margin: 6px 0 17px ;
    padding-top: 18px;
    padding-left: 8px;
    border: none;
    border-top: 1px solid #DADADA;
    resize: none;
    &:focus{
        outline:none
    }
`
export const BtnSubmit = styled.button`
    width: 75px;
    height: 34px;
    float: right;
    margin-top: 17px;
    border-radius: 25px;
    ${({ attr }) => setAttr(attr)}
`