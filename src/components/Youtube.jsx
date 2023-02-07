import styled, { css } from 'styled-components';

export const Player = styled.div`
    width: 327px;
    height: 223px;
    /* margin: 30px; */
    position: relative;
    ${".btn_play"}{
        position: absolute;
        top: 92.42px;
        left: 119.5px;
        &:hover{
            cursor: pointer;
        }
    }
    ${".btn_replay"}{
        position: absolute;
        top: 92.42px;
        left: 191px;
        &:hover{
            cursor: pointer;
        }
    }
`;