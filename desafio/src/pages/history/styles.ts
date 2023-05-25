import styled from "styled-components";

export const ItemName = styled.div`
    font-size: 1rem;
`
export const Container = styled.div`
    display: flex;

    ul {
        padding: 2rem;
        background-color: ${(props) => props.theme["base-button"]};
        max-height: 35rem;
        overflow-y: scroll;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 1rem;
        list-style: none;

        li {
            width: 96%;
            div {
                align-items: center;
                gap: 2rem;
                display: flex;
            }
            img {
                width: 3rem;
            }
            gap: 2rem;
            justify-content: space-between;
            align-items: center;
            display: flex;
            border-radius: 8px;
            padding: .5rem 2rem;
            background-color: ${(props) => props.theme["base-card"]};
        }
    }
`