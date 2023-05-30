import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CartContainer = styled.div`
  border-radius: 6px 36px;
  height: 100%;
  background-color: ${(props) => props.theme["base-card"]};
`;
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
  #cidade {
    width: 20%;
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
  margin-top: 0rem;
  padding: 2.5rem 0rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
`;
export const ContainerButtons = styled.div`
    margin-top: 2rem;
    gap: 12px;
    display: flex;
    label {
      font-size: 13px;
      text-transform: uppercase;
      color: ${(props) => props.theme["base-text"]};
    svg {
      width: 1.3rem;
      color: ${(props) => props.theme.purple}
    }
    display: flex;
    align-items: center;
    align-content: center;

    input {
      width: 0px;
      display: none;
      visibility: hidden;
      position: absolute;
    }
    cursor: pointer;
    background-color: red;
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 13px;
    gap: 12px;

    /* Brand/Purple Light */

    background: ${(props) => props.theme["base-button"]};
    /* Brand/Purple */

    border-radius: 6px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;
  }
  label.active {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme["purple-light"]};
    }
`

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

export const Values = styled.div`
  padding: 0rem 2.5rem;
  > div {
    span {
      font-size: 14px;
      line-height: 18.2px;
      font-weight: 400;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const ValueNumber = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;

  display: flex;
  align-items: center;
  color: ${(props) => props.theme["base-text"]};
  text-align: right;
`;
export const ValueTotalNumber = styled.h1`
  /* Text/Bold L */

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  display: flex;
  align-items: center;
  text-align: right;

  /* Base/Subtitle */

  color: ${(props) => props.theme["base-subtitle"]};

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;
export const Total = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;
  /* identical to box height, or 26px */

  display: flex;
  align-items: center;
  text-align: right;

  /* Base/Subtitle */

  color: ${(props) => props.theme["base-subtitle"]};

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const ButtonSubmit = styled.button`
  cursor: pointer;
  &.enabled:hover {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
  &.disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme["base-label"]};
  }
  margin-top: 1.5rem;
  margin-left: 2rem;
  background-color: ${(props) => props.theme.yellow};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;
  width: 85%;
  border: none;
  border-radius: 6px;
  flex: none;
  order: 5;
  align-self: stretch;
  flex-grow: 0;

  /* Components/Button G */

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  /* or 22px */

  text-transform: uppercase;

  /* Base/White */

  color: ${(props) => props.theme.white};
  font-stretch: 100;

  margin-bottom: 2.5rem;
`;
