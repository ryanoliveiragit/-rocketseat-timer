import {
    HeaderContainer,
    Button,
    Cart
  } from "./styles";
    import Logo from "../../assets/Logo.svg";
    import {
    ShoppingCart,
    MapPin,
  } from "@phosphor-icons/react";

export function Navbar() {
    return (
        <HeaderContainer>
        <a href="/">
            <img src={Logo} alt="" />
        </a>
        <ul>
          <li>
            <Button>
              <MapPin size={22} weight="fill" />
              Porto Alegre, RS
            </Button>
          </li>
          <li>
            <a href="/checkout">
            <Cart>
              <ShoppingCart size={22} weight="fill" />
            </Cart>
            </a>
          </li>
        </ul>
      </HeaderContainer>
    )
}