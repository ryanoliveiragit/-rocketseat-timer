import { CoffeeType } from "../../@types/coffe";
import { Navbar } from "../../components/header/navBar";
import { Layout } from "../../components/layout";
import { useCart } from "../../contexts/myContexts";
import { Form } from "../../components/form";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Container, Title, Card } from "./styles";

export function Checkout() {
  const { cart, addNewItem, removeItem, countItems } = useCart();

  function addcart(data: CoffeeType) {
    addNewItem(data);
  }

  function removeCart(itemId: number) {
    removeItem(itemId);
  }

  const groupedCoffees = cart.reduce(
    (groups: { [key: string]: CoffeeType[] }, cafe) => {
      const name = cafe.name;
      if (!groups[name]) {
        groups[name] = [];
      }
      groups[name].push(cafe);
      return groups;
    },
    {}
  );

  const sortedKeys = Object.keys(groupedCoffees).sort();
  const methods = useForm();

  console.log(cart);

  return (
    <Layout>
      <Navbar />
      <Title>Complete seu pedido</Title>
      <Container>
        <div>
          <FormProvider {...methods}>
            <Form />
          </FormProvider>
        </div>
        <Card>
          <ul>
            {sortedKeys.map((name) => {
              const cafe = groupedCoffees[name][0];
              const count = countItems(cafe.id);
              return (
                <div>
                  <li>{cafe.name}</li>
                  <button onClick={() => addcart(cafe)}>Adicionar</button>
                  <span>{count}</span>
                  <button onClick={() => removeCart(cafe.id)}>remover</button>
                </div>
              );
            })}
          </ul>
        </Card>
      </Container>
    </Layout>
  );
}
