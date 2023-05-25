import { useCart } from "../../contexts/myContexts";
import { Navbar } from "../../components/header/navBar";
import { Layout } from "../../components/layout";
import { CoffeeType } from "../../@types/coffe";
import { ItemName, Container } from "./styles";

export function History() {
  const { history } = useCart();

  const groupedItems: CoffeeType[] =
    history && history.length > 0
      ? history.reduce((accumulator: CoffeeType[], currentItem: CoffeeType) => {
          const existingItemIndex = accumulator.findIndex(
            (item) => item.name === currentItem.name
          );

          if (existingItemIndex !== -1) {
            accumulator[existingItemIndex].count++;
          } else {
            accumulator.push({ ...currentItem, count: 1 });
          }

          return accumulator;
        }, [])
      : [];

  return (
    <Layout>
      <Navbar />
      <h1>Historico de Compras</h1>
      <Container>
      <ul>
        {groupedItems.map((item) => (
          <li key={item.id}>
            <div>
            <img src={item.image} alt="" />
            <ItemName>
            {item.count}x {item.name}
            </ItemName>
            </div>
            <div>Total: R$ {item.price}</div>
          </li>
        ))}
      </ul>
      </Container>
    </Layout>
  );
}
