import Image from 'next/image';
import styled, {css, keyframes } from 'styled-components';


// const setAttr = (attr) => {
//     switch (attr) {
//     case 'cont':
//         return css`
//     display: flex;
//     margin-top: 10px;
//     `;
//     case 'feedback':
//         return css`
//     display: flex;
//     position: relative;
//     width: 329px;
//     height: 185px;
//     background: rgba(255, 255, 255, 0.3);
//     box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
//     border-radius: 10px;
//     margin:26px auto;
//     cursor: pointer;
//     `;
    
//     }
// }

export const BtnBack = styled(Image)`
    cursor: pointer;
    margin-left: 35px;
`;

export const BtnFeed = styled(Image)`
  
`;

export const Wrap = styled.div`
max-width: 450px;
    margin: 0 auto;
    padding: 13px 23px;
    display: flex;
    flex-direction: column;
`;


export const Title = styled.h2`
    font-size: 20px;
    text-align: center;
    margin: 23px 0 25px;
`;


export const BtnFeedback = styled.button`
    width: 207px;
    height: 50px;
    position: relative;
    background: ${(props) => props.theme.mainColor};
    opacity: ${(props) => props.attr&& 0.5};
    /* background: ${(props)=>{ props.attr?props.theme.mainColor:props.theme.gray}}; */
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin: 0 auto;
    text-align: end;
    padding-right: 27px;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: -0.5px;
    color: #FFFFFF;
    margin-bottom: 45px;
    ${'img'}{
        position: absolute;
        margin: 5px 25px  ;
        
    }

`;

export const ContFeed = styled.div`
    overflow-y: scroll;
    height: 62vh;
    &::-webkit-scrollbar {
    width: 4px;
    height: 8px;
    border-radius: 6px;
    border: 1px solid #6e6b651c;
    background: #fff8ec;
  }
  &::-webkit-scrollbar-thumb {
    background:  #d6d6d6;
    border-radius: 6px;
  }
`

export const WrapFeed = styled.div`
    width: 330px;
    margin: 0 auto 22px;

`;

export const Nickname = styled.div`
    display: flex;
    justify-content: space-between;
    ${"span"}{
        font-size: 12px;
        line-height: 30px;
        color: #818181;
        font-family: 'SUIT';
        font-style: normal;
    }
    ${"p"}{
        font-size: 15px;
        line-height: 30px;
        color: #EF6363;
    }
`;

export const Feed = styled.div`
    background: #FFFFFF;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 10px 15px;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: -0.24px;
    color: ${(props) => props.attr? props.theme.gray:"black"}

`
