import styled from "styled-components";

export const EmptyHistory = styled.div`
h1 {
    margin: 0rem;
}
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
a {
    text-decoration: none;
    background-color: ${(props) => props.theme.purple};
    color: white;
    font-weight: 400;
    border: none;
    border-radius: 4px;
    padding: .5rem 3rem;

    cursor: pointer;

    :hover {
        background-color: ${(props) => props.theme["purple-dark"]};
    }
}
`
export const Title = styled.div`
  margin-left: 1rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  h1 {
    margin: 0rem;
    font-size: 1.2rem;
  }
`;
export const IdPurshase = styled.div`
  display: flex;
  margin-left: 1.1rem;
  align-items: center;
  h1 {
    margin: 0rem;
  }
`;
export const ItemName = styled.div`
  font-size: 1rem;
`;
export const ContainerCart = styled.div`
  background-color: transparent;
`;
export const Items = styled.div`
  margin-bottom: 2rem;
  border-radius: 8px;
  padding: 1rem;
  background-color: ${(props) => props.theme["base-card"]};
`;

export const Flex = styled.div`
  color: ${(props) => props.theme["base-subtitle"]};
  display: flex;
  align-items: center;
  width: 95%;
  justify-content: space-between;

  img {
    width: 30rem;
  }
`;
export const Container = styled.div`
  display: flex;
  h1 {
    padding: 1rem 0rem;
    font-size: 1rem;
  }
  ul {
    border-radius: 8px;
    padding: 0rem 1rem;
    max-height: 33rem;
    overflow-y: auto;
    width: 50rem;
    display: flex;
    flex-direction: column;
    list-style: none;

    li {
      margin-top: 1rem;
      border-bottom: 1px solid ${(props) => props.theme["base-button"]};
      width: 96%;
      div {
        padding: 0.5rem;
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
`;
