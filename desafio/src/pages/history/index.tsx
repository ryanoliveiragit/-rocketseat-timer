import { useCart } from "../../contexts/myContexts";
import { Navbar } from "../../components/header/navBar";
import { Layout } from "../../components/layout";
import { CoffeeType } from "../../@types/coffe";
import {
  ItemName,
  Container,
  ContainerCart,
  Items,
  Flex,
  IdPurshase,
  Title,
  EmptyHistory
} from "./styles";
import delivery from "../../assets/delivery.svg";
import purshase from "../../assets/purshase.svg";
import { ClipboardText, Coffee } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function History() {
  const { history, historyContext } = useCart();

  const groupedItems = history.reduce((groups, item) => {
    const group = groups.find((g) => g.idCompra === item.idCompra);
    if (group) {
      group.items.push(item);
    } else {
      const newGroup = { idCompra: item.idCompra, items: [item] };
      groups.push(newGroup);
    }
    return groups;
  }, [] as { idCompra: number; items: CoffeeType[] }[]);

  return (
    <Layout>
      <Navbar />
      <Title>
        <Coffee size={25} weight="fill" color="#8047F8" />
        <h1>Histórico de compras</h1>
      </Title>
      <Flex>
        <Container>
          {history.length > 0 ? (
            <ul>
              {groupedItems.map((group) => {
                let totalPrice = 0;

                return (
                  <Items>
                    <IdPurshase>
                      <ClipboardText size={25} weight="fill" color="#C47F17" />
                      <h1>ID da Compra: #{group.idCompra}</h1>
                    </IdPurshase>
                    {group.items.map((item) => {
                      totalPrice += item.price;

                      return (
                        <ContainerCart>
                          <li key={item.id}>
                            <div>
                              <img src={item.image} alt="" />
                              <ItemName>1x {item.name}</ItemName>
                            </div>
                            <div>R$ {item.price}</div>
                          </li>
                        </ContainerCart>
                      );
                    })}
                    <li>
                      <div>
                        <img src={delivery} width={90} alt="delivery" />
                        <div>Frete</div>
                      </div>
                      <div>R$: 30</div>
                    </li>
                    <h1>Total: R$ {totalPrice + 30}</h1>
                  </Items>
                );
              })}
            </ul>
          ) : (
            <EmptyHistory>
              <h1>Sem itens no histórico :(</h1>
              <Link to="/">comprar café!</Link>
            </EmptyHistory>
          )}
        </Container>
        <div>
          <img src={purshase} alt="" />
        </div>
      </Flex>
    </Layout>
  );
}
