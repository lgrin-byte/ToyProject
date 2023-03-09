import styled, { keyframes,css } from 'styled-components';
import Link from "next/link"
import Image from 'next/image';



const setYear = (year) => {
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
    switch (img) {
    case 'result1':
        return css`
            background-image:url("/result1.png");  
            height: 357px; 
        @media all and (min-width: 720px) {

            background-image:url("/result1.png");   
            }
        @media not all and (min-resolution:.001dpcm)
        { @supports (-webkit-appearance:none) {
            /* 이 안에 Safari(10.1 이상)에서만 적용할 스타일 작성 */
            background-image:url("/low_result1.png");   
        }}
        `;
    case 'result2':
        return css`
            background-image:url("/low_result2.png");   
            height: 354px; 
        @media all and (min-width: 720px) {
            background-image:url("/result2.png");   
            }
        @media not all and (min-resolution:.001dpcm)
        { @supports (-webkit-appearance:none) {
            /* 이 안에 Safari(10.1 이상)에서만 적용할 스타일 작성 */
            background-image:url("/low_result2.png");   
        }}
        `;
    case 'result3':
        return css`
            background-image:url("/low_result3.png");   
            height: 359px; 
        @media all and (min-width: 720px) {
            background-image:url("/result3.png");   
            }
        @media not all and (min-resolution:.001dpcm)
        { @supports (-webkit-appearance:none) {
            /* 이 안에 Safari(10.1 이상)에서만 적용할 스타일 작성 */
            background-image:url("/low_result3.png");   
        }}
        `;
    case 'result4':
        return css`
            background-image:url("/low_result4.png");   
            height: 361px; 
        @media all and (min-width: 720px) {
            background-image:url("/result4.png");   
            }
        @media not all and (min-resolution:.001dpcm)
        { @supports (-webkit-appearance:none) {
            /* 이 안에 Safari(10.1 이상)에서만 적용할 스타일 작성 */
            background-image:url("/low_result4.png");   
        }}
        `;
    case 'result5':
        return css`
            background-image:url("/low_result5.png");   
            height: 353px; 
        @media all and (min-width: 720px) {
            /* height: 400px;  */
            background-image:url("/result5.png");   
            }
        @media not all and (min-resolution:.001dpcm)
        { @supports (-webkit-appearance:none) {
            /* 이 안에 Safari(10.1 이상)에서만 적용할 스타일 작성 */
            background-image:url("/low_result5.png");   
        }}
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
    margin-top: 10px;
    `;
    case 'feedback':
        return css`
    display: flex;
    position: relative;
    width: 329px;
    height: 185px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin:26px auto;
    cursor: pointer;
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
        margin-top: -7px;
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
    padding: -2px 0 59px;
    
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
export const Hall = styled.span`
position: absolute;
    font-size: 50px;
    color : ${({ year }) => setYear(year)};
    top: 4px;
    left: -6px;
    letter-spacing: 2.5px;
    margin-left: 30px;
`
export const HallB = styled.span`
width: fit-content;
-webkit-text-stroke: 10px white;
letter-spacing: -2.3px;
margin-left: 23px;

    font-size: 53px;
    color: white;

`
export const Year = styled.span`
    position: absolute;
    font-size: 53px;
    color : ${({ year }) => setYear(year)};
    top: 4px;
    left: -6px;

`

export const H = styled.span`
    position: absolute;
    font-size: 53px;
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
    color: white;

`

export const Box= styled.div`
    /* background-image: url('/dot.png')  ;
    */
    ${({ type }) => setDot(type)}

`


export const ContYear =styled.div`
    ${({ attr }) => setAttr(attr)}
        /* cursor: pointer; */

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
    width: 370px;
    /* 740 × 706 */
    left: 15px;
    top: 5px;
    z-index: 999;
    background-size: cover;
    ${({ img }) => setResultImg(img)}

`

export const Back = styled.div`
    width: 370px;
    height: 359px;
    position: relative;
    /* margin: 0 19px; */
    background-size: cover;
    margin-top: -10px;
    ${({ img }) => setResultImg(img)}

`

export const WrapCard = styled.div`
    margin: 0 auto 6px;
    text-align: center;
    width:390px;
    height:770px;
    padding-top:27px;
    background-color : ${({ year }) => setYear(year)};

`
export const ContAnswer = styled.div`
    width: 390px;
    padding: 28px 30px 43px;
    margin:10px 0 43px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: inset 0px 0px 7px rgba(0, 0, 0, 0.3);
`

export const AnswerTitle = styled.h3`
    font-size: 20px;
    margin-bottom: 14px ;

`
export const Answer = styled.p`
    font-size: 12px;
    line-height: 20px;
`

export const ImageFeed = styled(Image)`
    filter: blur(2.5px);
    margin-top: -10px;

`

export const SpanFeed = styled.span`
    position: absolute;
    font-size: 29px;
    line-height: 30px;
    text-align: center;
    color: white;
    margin: 61px 70px 64px;
`

export const SpanFeedB = styled.span`
    position: absolute;
    margin: 61px 70px 64px;
    line-height: 30px;
    text-align: center;
    -webkit-text-stroke: 9px black;
    /* letter-spacing: -1.8px;
    margin-left: 23px; */

    font-size: 29px;
    color: black;
`

export const ContBtn = styled.div`
    display: flex;
    position: relative;
    width: 329px;
    height: 185px;
    background: rgba(255, 255, 255, 0.3);
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    margin:26px auto;
    cursor: pointer;
`