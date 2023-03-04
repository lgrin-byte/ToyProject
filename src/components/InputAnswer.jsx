import styled,{css} from 'styled-components';


const setAttr = (attr) => {
    switch (attr) {
    case 'point2020':
        return css`
            background-color: ${(props) => props.theme.point2020};

        `;
    case 'point2010':
        return css`
            background-color: ${(props) => props.theme.point2010};

        `;
    case 'point2000':
        return css`
            background-color: ${(props) => props.theme.point2000};
        `;
    case 'point1990':
        return css`
            background-color: ${(props) => props.theme.point1990};
        `;
    case 'pointAll':
        return css`
            background-color: ${(props) => props.theme.pointAll};
        `;
    // default:
    //     return css`
    //         border: 1px solid black;
    //         background-color: white;
            
    //     `;
    }
};

export const Cont_Inp = styled.div`
    height: 50px;
    box-shadow: -4px -4px 4px rgba(255, 255, 255, 0.3), 4px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 50px;
    display: flex;
    overflow: hidden;
    margin: 24px 0 0;
`;

export const Title = styled.span`
    width: 65px;
    text-align: center;
    line-height: 50px;
    /* background-color:#D4CCE9; */
    ${({ attr }) => setAttr(attr)}
   color: #5D5B61;
   font-size: 18px;
`;

export const Inp = styled.input`
    width: 262px;
    height: 50px;
    padding: 15px 10px 17px;
    font-family: var(--font);
    font-size: 18px;
`;

export const MentEng = styled.p`
    margin: 5px auto -24px ;
    text-align: center;
    font-size: 14px;
    color: #EF6363;
`