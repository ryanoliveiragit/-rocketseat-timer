import { CoffeeType } from "../../@types/coffe";
import { useCart } from "../../contexts/myContexts";
import {
  Container,
  Card,
  ControlerContainer,
  ImageCoffe,
  NameAndPrice,
  Divider,
  ContainerCountValue,
  Value,
} from "./styles";
import { ControlerCart } from "../../components/controlerCart";
import { Trash } from "@phosphor-icons/react";

export function Checkout() {
  const { cart, addNewItem, removeItem, countItems } = useCart();

  function addcart(data: CoffeeType) {
    addNewItem(data);
    addNewItem(data);
  }

  function removeCart(itemId: number) {
    removeItem(itemId);
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

  console.log(cart);

  return (
    <Container>
      <Card>
        <ul>
          {sortedKeys.map((name) => {
            const cafe = groupedCoffees[name][0];
            const count = countItems(cafe.id);
            return (
              <div>
                <ControlerContainer>
                  <ImageCoffe>
                    <img src={cafe.image} alt={cafe.description} />
                  </ImageCoffe>
                  <ContainerCountValue>
                    <NameAndPrice>
                      <div>
                        <li>{cafe.name}</li>
                        <Value>
                          <span>R$ {cafe.price}</span>
                        </Value>
                      </div>
                    </NameAndPrice>
                    <div>
                      <ControlerCart>
                        <button
                          type="button"
                          onClick={() => removeCart(cafe.id)}
                        >
                          -
                        </button>
                        <span>{count}</span>
                        <button type="button" onClick={() => addcart(cafe)}>
                          +
                        </button>
                      </ControlerCart>

                      <ControlerCart>
                        <button type="button">
                          <Trash color="#8047F8" />
                          <p>Remover</p>
                        </button>
                      </ControlerCart>
                    </div>
                  </ContainerCountValue>
                </ControlerContainer>
                <Divider />
              </div>
            );
          })}
        </ul>
      </Card>
    </Container>
  );
}
