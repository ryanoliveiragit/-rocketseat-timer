import styled from "styled-components";

export const Container = styled.div`
  width: 30rem;
`;
export const Title = styled.h1`
  font-family: "Baloo 2", cursive;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%;

  color: ${(props) => props.theme["base-subtitle"]};
`;
export const Value = styled.li`
  span {
    /* Text/Bold M */

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    /* identical to box height, or 21px */

    display: flex;
    align-items: center;
    text-align: right;

    /* Base/Text */

    color: ${(props) => props.theme["base-text"]};

    /* Inside auto layout */

    flex: none;
    order: 1;
  }
`;
export const ControlerContainer = styled.div`
  width: 100%;
  align-items: center;

  img {
    width: 5rem;
  }
  display: flex;
  div {
    li {
      list-style: none;
    }
    display: block;

    div {
      display: flex;
    }
  }
`;
export const ContainerCountValue = styled.div`
  width: 100%;
  margin-right: 2rem;
  display: flex;
  justify-content: space-between;
`;
export const NameAndPrice = styled.div`
  div {
    li {
      color: ${(props) => props.theme["base-subtitle"]};
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      font-size: 1rem;
    }
    margin-bottom: 1.2rem;
    width: 100%;
    justify-content: space-between;
    display: flex;
  }
  display: flex;
  width: 100%;
`;
export const Flex = styled.div``;
export const ImageCoffe = styled.div`
  display: flex;
  margin-right: 20px;
`;
export const Card = styled.div``;

export const Divider = styled.div`
  width: 92%;
  border: 1px solid #e6e5e5;
  margin: 24px 0px;
`;
