import { HeaderContainer, Button, Cart, None } from "./styles";
import Logo from "../../assets/Logo.svg";
import { ShoppingCart, MapPin } from "@phosphor-icons/react";
import { useCart } from "../../contexts/myContexts";

export function Navbar() {
  const { cart } = useCart();

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
              <div>
                {cart.length > 0 ? <p>{cart.length}</p> : <None />}
                <ShoppingCart size={22} weight="fill" />
              </div>
            </Cart>
          </a>
        </li>
      </ul>
    </HeaderContainer>
  );
}
