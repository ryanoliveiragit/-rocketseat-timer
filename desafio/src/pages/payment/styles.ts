import styled from "styled-components";

export const Container = styled.div`    
    display: flex;
    justify-content: space-between;

    background-color: ${(props) => props.theme.background};
`
export const Title = styled.h1`
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 130%;

    color: ${(props) => props.theme["base-subtitle"]}
`

export const Card = styled.div`
    ul {
        background: red;
    }
    background: color;
`