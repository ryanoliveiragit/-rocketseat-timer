import {
    HeaderContainer,
    Button,
    Cart,
    None
  } from "./styles";
    import Logo from "../../assets/Logo.svg";
    import {
    ShoppingCart,
    MapPin,
  } from "@phosphor-icons/react";
  import { useContext } from "react";
  import cartContext from "../../contexts/myContexts";

export function Navbar() {
  const { coffee } = useContext(cartContext);
  
  const numItems = Object.keys(coffee).length;

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
            {numItems ? <p>{numItems}</p> : <None />}
              <div>
              <ShoppingCart size={22} weight="fill" />
              </div>
            </Cart>
            </a>
          </li>
        </ul>
      </HeaderContainer>
    )
}