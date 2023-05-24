import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  gap: 4px;

  background: ${(props) => props.theme["base-button"]};

  border-radius: 6px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin-right: 8px;

  button {
    cursor: pointer;
    color: ${(props) => props.theme.purple};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    p {
      color: ${(props) => props.theme["base-text"]};
      text-transform: uppercase;
      margin: 0;
      padding: 0;
      font-size: 0.85rem;
    }
  }
`;
