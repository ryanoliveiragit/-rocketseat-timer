import {
  Container,
  HeaderContainer,
  Button,
  BackgroundContainer,
  Cart,
  Image,
  Benefits,
  ContentHeader,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import ImageCoffe from "../../assets/CoffeImageHeader.svg";
import {
  ShoppingCart,
  Timer,
  MapPin,
  Package,
  Coffee,
} from "@phosphor-icons/react";

export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <img src={Logo} alt="" />
        <ul>
          <li>
            <Button>
              <MapPin size={22} weight="fill" />
              Porto Alegre, RS
            </Button>
          </li>
          <li>
            <Cart>
              <ShoppingCart size={22} weight="fill" />
            </Cart>
          </li>
        </ul>
      </HeaderContainer>
      <main>
        <BackgroundContainer>
          <ContentHeader>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </ContentHeader>
          <Benefits>
            <div>
              <ShoppingCart className="yellowDark" size={16} weight="fill" />
              <h2>Compra simples e segura</h2>
            </div>
            <div>
              <Package className="gray" size={16} weight="fill" />
              <h2>Entrega rápida e rastreada</h2>
            </div>
            <div>
              <Timer className="yellow" size={16} weight="fill" />
              <h2>Embalagem mantém o café intacto</h2>
            </div>
            <div>
              <Coffee size={16} weight="fill" />
              <h2>O café chega fresquinho até você</h2>
            </div>
          </Benefits>
        </BackgroundContainer>
        <BackgroundContainer>
          <Image>
            <img src={ImageCoffe} alt="" />
          </Image>
        </BackgroundContainer>
      </main>
    </Container>
  );
}
