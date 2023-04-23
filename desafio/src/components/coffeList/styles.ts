import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;

  ul {
    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;
    justify-content: flex-start;
    list-style: none;
  }

  li {
    width: 16rem;
  }
`;

export const ContainerCards = styled.div`
  background-color: ${(props) => props.theme["base-card"]};

  border-radius: 6px 36px;
  padding: 0rem 1.25rem;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  text-align: center;

  > span {
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};

    border-radius: 100px;
    padding: 4px 8px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 5rem;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 0.6rem;
    line-height: 130%;
  }

  > h2 {
    margin: 0rem;
    color: ${(props) => props.theme["base-subtitle"]};

    margin-top: 1rem;
    font-family: "Baloo 2";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }
  > p {
    margin-top: 0.5rem;
    color: ${(props) => props.theme["base-label"]};

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8rem;
    line-height: 130%;
  }
  > img {
    top: -1.25rem;
    position: relative;
  }
`;

export const BuyCart = styled.div`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
  }
  padding-bottom: 2rem;
  display: flex;
  align-items: center;

  justify-content: space-between;
  width: 100%;
`;
export const Price = styled.span`
  color: ${(props) => props.theme["base-text"]};
  font-size: 1.5rem;
  font-family: "Baloo 2";
  font-style: normal;
  line-height: 130%;
  font-weight: 800;
`;
export const Count = styled.div`
  align-items: center;
  display: flex;
  .remove {
    margin-top: -0.3rem;
  }
  .count {
    justify-content: space-between;
    width: 4.3rem;
    padding: 0rem 0.2rem;
    background-color: ${(props) => props.theme["base-button"]};
    align-items: center;
    display: flex;

    border-radius: 6px;

    flex-wrap: wrap;
  }
  > div > button {
    background-color: transparent;
    border: none;
    font-weight: 200;
    font-size: 2rem;
    color: ${(props) => props.theme.purple};
  }
`;

export const Cart = styled.div``;
