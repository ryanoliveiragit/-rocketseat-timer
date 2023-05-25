import { HeaderContainer, HistoryCart, Button, Cart, None } from "./styles";
import Logo from "../../assets/Logo.svg";
import { ShoppingCart, MapPin, Notepad } from "@phosphor-icons/react";
import { useCart } from "../../contexts/myContexts";
import { Link, useNavigate } from "react-router-dom";

export function Navbar() {
  const { cart, adress, historyCount, sethistoryCount } = useCart();
  const lastAddress = adress.length > 0 ? adress[adress.length - 1] : null;

  function handleIconClick() {
    sethistoryCount(0)
  }
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <ul>
        <li>
          <Button>
            <MapPin size={22} weight="fill" />
            {lastAddress && (
              <span>
                {lastAddress.cidade}, {lastAddress.uf}
              </span>
            )}
          </Button>
        </li>
        <li>
          <Link to="/checkout">
            <Cart>
              {cart.length > 0 ? <p>{cart.length}</p> : <None />}
              <ShoppingCart size={22} weight="fill" />
            </Cart>
          </Link>
        </li>
        <li>
          <Link to="/history" onClick={handleIconClick}>
            <HistoryCart>
              {historyCount > 0 ? <p>{historyCount}</p> : <None />}
              <Notepad size={22} weight="fill" />
            </HistoryCart>
          </Link>
        </li>
      </ul>
    </HeaderContainer>
  );
}
