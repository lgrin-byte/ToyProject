import styled, { keyframes,css } from 'styled-components';
import Link from "next/link"
import Image from 'next/image';

const setYear = (year) => {
    console.log(year)
    switch (year) {
    case 'color2020':
        return css`
            ${(props) => props.theme.color2020};

        `;
    case 'color2010':
        return css`
            ${(props) => props.theme.color2010};

        `;
    case 'color2000':
        return css`
             ${(props) => props.theme.color2000};
        `;
    case 'color1990':
        return css`
             ${(props) => props.theme.color1990};
        `;
    case 'colorAll':
        return css`
            ${(props) => props.theme.colorAll};
        `;
    // default:
    //     return css`
    //         border: 1px solid black;
    //         background-color: white;
            
    //     `;
    }
};

const setResultImg = (img) => {
    console.log(img)
    switch (img) {
    case 'result1':
        return css`
            background-image:url("/result1.png");

        `;
    case 'result2':
        return css`
            background-image:url('/result2.png');

        `;
    case 'result3':
        return css`
            background-image:url("/result3.png");
        `;
    case 'result4':
        return css`
            background-image:url("/result4.png");
        `
    case 'result5':
        return css`
            background-image:url('/result5.png');
        `;

    // default:
    //     return css`
    //         border: 1px solid black;
    //         background-color: white;
            
    //     `;
    }
};


const setAttr = (attr) => {
    switch (attr) {
    case 'cont':
        return css`
    display: flex;
    
    

        `;
    case 'cont_share':
        return css`
    display: flex;
width: 338px;
    justify-content: space-around;
    margin:0 auto 35px;
        `
    case 'effect':
        return css`
    display: flex;

    align-items: center;

        `;
    case 'score':
        return css`
        display: flex;
        margin-top: 34px;
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

const setDot = (type) => {
    switch (type) {
    case 'year':
        return css`
        background-image: url('/dot.png')  ;
        width: 188px;
        height: 7px;
    margin-top: 6px;
    margin-left: 30px;

        `;
    case 'score':
        return css`
        background-image: url('/dot2.png')  ;
    /* margin-top: 4px; */
    margin-right: 3px;
        width: 237px;
    height: 7px;

        `
    case 'bottom':
        return css`
        background-image: url('/dot3.png')  ;
        width: 390px;
    height: 7px;
        `;
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
    width: 390px;
    text-align: center;

    display: flex;
    flex-direction: column;
    margin: 0 auto ;
    padding: 39px 0 59px;
    
`;

// export const Image = styled.div`
// height: 350px;
// width: 390px;
// margin-left: -35px;
// background-color: beige;

// `
export const YearTitle = styled.div`
    margin-left: 10px;
    position:relative;

`
export const H = styled.span`
    position: absolute;
    font-size: 53px;
    /* color: #E5DEF5; */
    /* ${({ year }) => setYear(year)} */

    color : ${({ year }) => setYear(year)};
    top: 4px;
    left: -6px;
    letter-spacing: 0.6px;
    margin-left: 30px;
`
export const HB = styled.span`
-webkit-text-stroke: 10px white;
letter-spacing: -1.8px;
margin-left: 23px;

    font-size: 58px;
    color: black;

`

export const Box= styled.div`
    /* background-image: url('/dot.png')  ;
    */
    ${({ type }) => setDot(type)}

`


export const ContYear =styled.div`
    ${({ attr }) => setAttr(attr)}
        cursor: pointer;

` 


export const Story =styled.p`
    font-size: 15px;
    /* margin-top: px; */
    margin-bottom: 32px;
    line-height: 23px;
    letter-spacing: -0.7px;

` 

export const Share = styled.span`
    font-size: 12px;
    margin-top: 14px;
`
export const ResultImg = styled.div`
    position: absolute;
    width: 340px;
    height: 282px;
    left: 10px;
    top: 15px;
    /* background-image: url('/result1.png')  ;
     */
    ${({ img }) => setResultImg(img)}

`

export const Back = styled.div`
width: 352px;
height: 316px;
    position: relative;
    margin: 0 19px;
    /* background-image: url('/css_sprites.png')  ; */

    /* margin-top: -28px; */
    /* margin-left: -30px; */
    /* margin-bottom: -18px; */
    background: rgba(255, 255, 255, 0.6);
    box-shadow: -4px -4px 6px rgba(255, 255, 255, 0.5), 4px 4px 4px rgba(0, 0, 0, 0.25), inset 2px 2px 9px rgba(90, 90, 90, 0.1);
    border-radius: 25px;
`

export const WrapCard = styled.div`
    margin: 0 auto;
    text-align: center;
    width:390px;
    height:770px;
    padding-top:27px;
    background-color : ${({ year }) => setYear(year)};

`
export const ContAnswer = styled.div`
    width: 390px;
    padding: 28px 30px 43px;
    margin-bottom: 43px;
    /* height: 353px; */
    background: rgba(255, 255, 255, 0.5);
    box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.3);
`
// , Answer, AnswerTitle
export const AnswerTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 14px ;

`
export const Answer = styled.p`
    font-size: 12px;
    line-height: 20px;
`
