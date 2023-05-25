import styled from "styled-components";

export const ItemName = styled.div`
    font-size: 1rem;
`
export const ContainerCart = styled.div`
`
export const Items = styled.div`
margin-top: 1rem;
padding: 1rem;
background-color: ${(props) => props.theme["base-card"]};
`
export const Container = styled.div`
    display: flex;
    h1 {
        padding: 1rem 0rem;
        margin-left: 1.1rem;
        font-size: 1rem;
    }
    ul {
        border-radius: 8px;
        padding: 1rem;
        background-color: ${(props) => props.theme["base-button"]};
        max-height: 38rem;
        overflow-y: scroll;
        width: 100%;
        display: flex;
        flex-direction: column;
        list-style: none;


        li {
            margin-top: 1rem;
            border-bottom: 1px solid ${(props) => props.theme["base-button"]};;
            width: 96%;
            div {
                padding: .5rem;
                align-items: center;
                gap: 2rem;
                display: flex;
            }
            img {
                width: 3rem;
            }
            justify-content: space-between;
            align-items: center;
            display: flex;
        }
    }
`