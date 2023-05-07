import styled from "styled-components";

export const Container = styled.div`
  border-radius: 6px;

  form {
    flex-direction: column;
    display: flex;
    gap: 0.75rem;
  }
`;
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
`;
export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
  }
`;
const baseInput = styled.div`
  input:focus {
    outline: 1px solid ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme["base-text"]};
  }
  input {
    background-color: ${(props) => props.theme["base-input"]};

    display: flex;
    flex-direction: row;

    border: 1px solid ${(props) => props.theme["base-button"]};
    border-radius: 4px;
    padding: 0.85rem;
  }
`;

export const DefaultInput = styled(baseInput)`
  width: 100%;
  input {
    width: 30%;
  }
`;

export const InputNumberAndComplement = styled(baseInput)`
  #uf {
    width: 5%;
  }
  #numero {
    width: 45%;
  }
  width: 100%;
  gap: 0.75rem;
  div {
    width: 100%;
    input {
      width: 100%;
    }
  }
`;

export const InputStreat = styled(baseInput)`
  width: 100%;
  div {
    width: 100%;
    input {
      width: 100%;
    }
  }
`;

export const AdressDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  > div {
    gap: 0.5rem;
    h1 {
      color: ${(props) => props.theme["base-subtitle"]};
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1rem;

      line-height: 130%;

      margin: 0;
    }
    align-items: center;
    display: flex;
  }
  p {
    color: ${(props) => props.theme["base-text"]};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 0.85rem;

    line-height: 130%;

    margin: 0;
    margin-left: 1.8rem;
  }
`;

export const Payment = styled.div`
  padding: 2.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const StyledButton = styled.input`
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 8px 16px;
  margin-right: 8px;
  cursor: pointer;
  outline: none;

  &.selected {
    background-color: black;
    color: white;
  }
`;

export const ToggleButton = styled.div`
  background-color: red;
`;
