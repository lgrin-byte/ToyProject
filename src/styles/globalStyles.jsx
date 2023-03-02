import { createGlobalStyle,css } from 'styled-components';
import reset from 'styled-reset';
const setAttr = (attr) => {
    console.log(attr);
    switch (attr) {
    case '2020':

        return css`
        background-color: white;
        `;
    case '2010':
        return css`
        background-color: #EF6363;
        color: white;
        /* animation: ${scale} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both; */
        `;
    case '2000':
        return css`
        background-color: var(--deep-gray);
        margin-bottom: 25px;
        `;
    case '':
        return css`
            border: 1px solid black;
            background-color: white;
            animation: ${scaleDown} 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

        `;
    
    default:
        return css`

            
        `;
    }
};

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'NeoDunggeunmo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.3/NeoDunggeunmo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
${reset}
*{
    box-sizing: border-box;
}
a {
    color: inherit;
    text-decoration: none;
}
input, button {
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    font-family: var(--font);
}
textarea {
  padding: 0;
  margin: 0;
}
::placeholder {
}
label {
  /* color: var(--super-gray); */
}
ol, ul, li {
    list-style: none;
}
img{
    display: block;
}
:root {
    --font: 'NeoDunggeunmo';
    --black: #1C1C1C;
    --light-red: #FF5757;
    --deep-red: #FF1818;
    --light-gray: #E8E8E8;
    --light-purple: #E5DEF5;
    --gray: #CDCDCD;
    --deep-gray: #B4B4B4;
    --super-gray: #767676;
    --success-green: #50c927;
}
html {
    min-width: 390px;
    
    /* height: 100%; */
    /* background-color: var(--light-gray); */
    margin: 0 auto ;
}
body {
    ${( attr ) => setAttr(attr)}
    /* width: 100%; */
    position: relative;
    /* height: 100%; */
    /* color: var(--black); */
    line-height: 1.4;
    /* background-color: ${props => props.theme.mainColor}; */
    /* background-color: ${(props) => props.theme.bgColor}; */
    background-color: var(--light-purple);
    font-family: var(--font);
    font-size: 20px;
    /* box-shadow: 0 0 10px var(--deep-gray); */
}
.ir {
    position: absolute;
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    overflow: hidden;
}

.color2020{
    background-color: ${props => props.theme.color2020};
    /* height: 100%; */
}
.color2010{
    background-color: ${props => props.theme.color2010};
    /* height: 100%; */

}
.color2000{
    background-color: ${props => props.theme.color2000};
    /* height: 100%; */

}
.color1990{
    background-color: ${props => props.theme.color1990};
    height: 100vh;

}
.colorAll{
    background-color: ${props => props.theme.colorAll};
    height: 100%;

}

.feedback{
    background-color: ${props => props.theme.feedback};
    height: 100vh;
}

@media all and (min-width: 720px) {
  html {
    /* width: 100vw; */
  }
}
`;


export default GlobalStyle;