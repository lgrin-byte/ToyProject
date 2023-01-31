import styled, {css, keyframes } from 'styled-components';
import Image from 'next/image';


    // const setAttr = (attr) => {
    //     switch (attr) {
    //     case 'year':
    //         return css`
    //         width: 50px;
    //         height: 50px;
    //         background-size: 30px;
    //         `;


    export const vibration = keyframes` 
        from {
            transform: rotate(10deg);
        }
        to {
            transform: rotate(-10deg);
        }
    `;
    export const vibration2 = keyframes` 
    from {
        transform: rotate(15deg);
    }
    to {
        transform: rotate(-15deg);
    }
`;
const styles = css`
    animation: ${vibration} 0.2s infinite;
`

const stylesFast = css`
    animation: ${vibration2} 0.2s infinite;
`

const setAttr = (time) => {
    if(time<=20){
        return styles
    }else if(time<=10){
        return stylesFast
    }
}

export const Wrap = styled.div`
    width: 329px;
    height: 100vh;
    margin: 0 auto ;
    padding-top: 70px;
    
`;

export const Div = styled.div`
    display: flex;
    margin-bottom: 36px;
    justify-content: space-between;
    align-items: center;
    /* ${".vibration"}{
        animation: 
        ${vibration} 0.1s infinite;

        ${(props) => props.time<20 && `${vibration} 0.1s infinite`};
    } */
    span{
        margin-left: 22px;
    }
    p{
        color: ${(props) => props.time<11?"#EF6363": "black" };

    }
`;



export const MyProgress = styled.div`
    margin: 26px 0 10px;
    width: 328px;
    height:3px;
    background-color:white;        
`;

export const StateBar = styled.div`
    width:  calc(100/30*${(props)=>props.width}%);
    /* transition: 0.5s; */
    height:3px;
    background-color: #EF6363;;       
`;

export const Rate = styled.div`
    /* margin-top: 6px; */
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.range>props.level?"white": "#EF6363" };
    /* background-color:#EF6363; */
    margin-left: 10px;
    border-radius: 50%;
`
export const TimerImg = styled(Image)`
    ${({ time }) => setAttr(time)}
`

export const Img = styled(Image)`
    position: absolute;
    top: 76px;
`

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
    font-size: 16px;
    margin: 56px 0 20px;
`