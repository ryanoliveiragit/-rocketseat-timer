import { useCart } from "../../contexts/myContexts";
import { Navbar } from "../../components/header/navBar";
import { Layout } from "../../components/layout";
import { CoffeeType } from "../../@types/coffe";
import { ItemName, Container, ContainerCart, Items } from "./styles";
import delivery from "../../assets/delivery.svg";
import empt from "../../assets/empt.png";

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
      <h1>Histórico de Compras</h1>
      <Container>
        {history.length > 0 ? (
          <ul>
            {groupedItems.map((group) => {
              let totalPrice = 0; 
  
              return (
                <Items>
                  <h1>ID de Compra: {group.idCompra}</h1>
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
                  <h1>Total: {totalPrice + 30}</h1>
                </Items>
              );
            })}
          </ul>
        ) : <div><img src={empt} alt="" /></div>} {/* Feche os parênteses aqui */}
      </Container>
    </Layout>
  )
}