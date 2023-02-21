import styled, {css, keyframes } from 'styled-components';
// import speaker from '../../assets/images/css_sprites.png'
// import Image from 'next/image';

export const ani = keyframes` 
    to {
        background-position: -6560px, 0;
    }
`;

const styles = css`
    width: 328px;
    height: 225px;
    /* background-image: url('/css_sprites.png'); */
    background: url('/css_sprites.png') no-repeat 0 0 / auto ;
    /* background-image: url('/css_sprites.png'); 
    background-repeat: no-repeat; */
    /* background-size: 654px 448px; */
    animation: ${ani} 3s infinite steps(20);
    animation-fill-mode: forwards;
`

export const LoadingImg = styled.div`
    ${styles}
`

export const Div=styled.div`
    width: 328px;
    height: 225px;
    background-size: cover;
    /* background-color: aliceblue; */
    margin: 0 auto;
    /* padding-top: 280px; */
    
`