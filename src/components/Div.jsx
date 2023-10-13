import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    margin: 0 auto;
    /* margin-bottom: 54px; */
    align-items: center;

    p {
        color: ${(props) => (props.time < 11 ? "#EF6363" : "black")};
    }
`;

export const DivRate = styled.div`
    display: flex;
    margin-left: 6px;
`;
