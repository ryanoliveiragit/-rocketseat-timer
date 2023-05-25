import {
  Container,
  BackgroundContainer,
  Image,
  Benefits,
  ContentHeader,
} from "./styles";
import ImageCoffe from "../../assets/CoffeImageHeader.svg";
import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react";
import { Navbar } from "./navBar";

export function Header() {

  return (
    <Container>
      <Navbar />
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
              <ShoppingCart className="yellowDark" weight="fill" />
              <h2>Compra simples e segura</h2>
            </div>
            <div>
              <Package className="gray" weight="fill" />
              <h2>Entrega rápida e rastreada</h2>
            </div>
            <div>
              <Timer className="yellow" weight="fill" />
              <h2>Embalagem mantém o café intacto</h2>
            </div>
            <div>
              <Coffee weight="fill" />
              <h2>O café chega fresquinho até você</h2>
            </div>
          </Benefits>
        </BackgroundContainer>
        <BackgroundContainer>
          <Image>
            <img src={ImageCoffe} alt="imagem de café" />
          </Image>
        </BackgroundContainer>
      </main>
    </Container>
  );
}
