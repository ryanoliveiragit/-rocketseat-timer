import styled from "styled-components";
import Background from "../../assets/Background.png";

export const BackgroundContainer = styled.div`
  position: relative;
  /* outras propriedades */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${Background});
    filter: blur(70px);
  }
`;

export const Container = styled.div`
  main {
    align-items: center;
    margin-top: 5.8rem;
    display: flex;
    justify-content: space-between;
  }
`;
export const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: ${(props) => props.theme["base-title"]};

    margin: 0;
    font-family: "Baloo 2", cursive;
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    max-width: 45rem;
    line-height: 130%;
  }
  p {
    color: ${(props) => props.theme["base-subtitle"]};

    margin-top: 1rem;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
  }
`;
export const Benefits = styled.div`
  margin-top: 4.4rem;
  display: flex;
  justify-items: start;
  color: ${(props) => props.theme.white};
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  div {
    gap: 0.75rem;
    h2 {
      color: ${(props) => props.theme["base-text"]};
      font-family: "Roboto", sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  svg {
    justify-content: center;
    padding: 8px;
    width: 16px;
    border-radius: 100%;
    background-color: ${(props) => props.theme.purple};
  }
  .yellowDark {
    background-color: ${(props) => props.theme["yellow-dark"]};
  }
  .yellow {
    background-color: ${(props) => props.theme.yellow};
  }
  .gray {
    background-color: ${(props) => props.theme["base-text"]};
  }
`;
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0rem;
  background-color: ${(props) => props.theme.background};

  ul {
    display: flex;
    list-style: none;
    gap: 0.75rem;
  }
`;

export const Button = styled.button`

  background-color: ${(props) => props.theme["purple-light"]};

  display: flex;
  align-items: center;

  padding: 0.5rem;
  gap: 4px;
  border-radius: 6px;


  background-color: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  border: none;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  :hover {
    transition: background-color 0.15s ease-out;
    cursor: pointer;
    color: ${(props) => props.theme["yellow-light"]};
    background-color: ${(props) => props.theme["purple-dark"]};
    svg {
      color: ${(props) => props.theme["purple-light"]};
    }
  }

  svg {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
export const HistoryCart = styled(Button)`
  margin-left: 2.5rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["yellow-light"]};
  :hover {
    transition: background-color 0.15s ease-out;
    cursor: pointer;
    background-color: ${(props) => props.theme["yellow-dark"]};
    svg {
      color: ${(props) => props.theme["yellow-light"]};
    }
  }
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
  p {
    position: absolute;
    color: ${(props) => props.theme.white};
    font-size: 0.7rem;
    background-color: ${(props) => props.theme["yellow-dark"]};;
    padding: 0.25rem .4rem;
    border-radius: 100%;
    right: -0.3rem;
    top: -1.6rem;
  }
`
export const Cart = styled(Button)`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["yellow-light"]};
  :hover {
    transition: background-color 0.15s ease-out;
    cursor: pointer;
    background-color: ${(props) => props.theme["yellow-dark"]};
    svg {
      color: ${(props) => props.theme["yellow-light"]};
    }
  }
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
  p {
    position: absolute;
    color: ${(props) => props.theme.white};
    font-size: 0.7rem;
    background-color: ${(props) => props.theme["yellow-dark"]};;
    padding: 0.25rem .4rem;
    border-radius: 100%;
    right: -0.3rem;
    top: -1.6rem;
  }
`;

export const None = styled.span`
  display: none;
`

export const Image = styled.div`
  img {
    width: 38rem;
  }
`;
