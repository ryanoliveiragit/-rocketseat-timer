import styled from "styled-components";

export const IconLocation = styled.div`
  border-radius: 100%;
  display: flex;
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.purple};
  svg {
    margin: 0rem;
    padding: 0rem;
    border-radius: 100%;
    color: white;
  }
`;
export const IconTimer = styled.div`
  border-radius: 100%;
  display: flex;
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.yellow};
  svg {
    margin: 0rem;
    padding: 0rem;
    border-radius: 100%;
    color: white;
  }
`;

export const IconDollar = styled.div`
border-radius: 100%;
  display: flex;
  height: 32px;
  width: 32px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme["yellow-dark"]};
  svg {
    margin: 0rem;
    padding: 0rem;
    border-radius: 100%;
    color: white;
  }
`
export const Image = styled.div`
margin-top: 5rem;
    img {
        width: 35.75rem;
    }
`
export const Container = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {

    list-style: none;

    > p {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 130%;
      /* identical to box height, or 26px */

      /* Base/Subtitle */
      margin: 0rem;
      color: ${(props) => props.theme["base-subtitle"]};
      font-stretch: 100;
    }
  }
`;

export const ContainerAdress = styled.div`
  border-radius: 6px 36px;
  margin-top: 2.5rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.background};
  box-shadow: 0px 0px 0px 1px #DBAC2C, 0px 0px 0px 2px #8047F8;

`;
export const DeliveryAdressPrimary = styled.div`
  display: flex;
  gap: 12px;
  div > p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    /* or 21px */

    /* Base/Text */

    color: #574f4d;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const DeliveryAdress = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 2.5rem;
  div > p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    /* or 21px */

    /* Base/Text */

    color: #574f4d;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
`;

export const Title = styled.h1`
  /* Title/Title L */

  margin: 0rem;
  font-family: "Baloo 2";
  font-style: normal;
  font-weight: 800;
  font-size: 32px;
  line-height: 130%;
  /* identical to box height, or 42px */

  /* Brand / Yellow Dark */

  color: ${(props) => props.theme["yellow-dark"]};
`;
