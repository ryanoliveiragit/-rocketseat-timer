import { useContext, useEffect, useMemo } from "react";
import {
  ContainerCards,
  BuyCart,
  Count,
  Cart,
  Price,
  Container,
  Tags,
} from "./styles";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import cartContext from "../../contexts/myContexts";
import { coffeList } from "../../components/coffeList/list";
import { CoffeeType } from "../../@types/coffe";

export function CafeList() {
  const { coffee, setCoffee } = useContext(cartContext);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCoffee(JSON.parse(cartItems));
    }
  }, [setCoffee]);

  const memoizedCoffeList = useMemo(() => {
    return coffeList.map((cafe) => {
      const itemCount = coffee.reduce((acc: number, curr: { id: string }) => {
        if (curr.id === cafe.id) {
          return acc + 1;
        }
        return acc;
      }, 0);
      return {
        ...cafe,
        quantity: itemCount.toString(),
      };
    });
  }, [coffee]);

  function handleRemoveToCart(coffeeName: string, cafeId: string) {
    const selectedCafe = memoizedCoffeList.find((cafe) => cafe.id === cafeId);
    if (selectedCafe == null) {
      console.log("Erro: café não encontrado na lista.");
      return;
    }

    const updatedCoffeList = [...memoizedCoffeList];
    const aaaaa = updatedCoffeList.findIndex((cafe) => cafe.id === cafeId);
    updatedCoffeList[aaaaa].quantity = (
      parseInt(selectedCafe.quantity) - 1
    ).toString();

    const updatedCoffee = [...coffee];
    const index = updatedCoffee.findIndex(
      (item: { name: string }) => item.name === coffeeName
    );

    if (index === -1) {
      console.log("Erro: item não encontrado no carrinho.");
      return;
    }

    updatedCoffee.splice(index, 1);

    setCoffee(updatedCoffee);
    localStorage.setItem("cartItems", JSON.stringify(updatedCoffee));
  }

  function handleAddToCart(cafeId: string) {
    const selectedCafe = memoizedCoffeList.find((cafe) => cafe.id === cafeId);
    if (selectedCafe == null) {
      console.log("Erro: café não encontrado na lista.");
      return;
    }

    const updatedCoffeList = [...memoizedCoffeList];
    const index = updatedCoffeList.findIndex((cafe) => cafe.id === cafeId);
    updatedCoffeList[index].quantity = (
      parseInt(selectedCafe.quantity) + 1
    ).toString();

    const newCartItem: CoffeeType = {
      id: selectedCafe.id,
      name: selectedCafe.name,
      price: selectedCafe.price,
      quantity: updatedCoffeList[index].quantity,
      description: selectedCafe.description,
      image: selectedCafe.image,
      tag: selectedCafe.tag,
    };

    const updatedCoffee = [...coffee, newCartItem];
    setCoffee(updatedCoffee);
    
    localStorage.setItem("cartItems", JSON.stringify(updatedCoffee));
  }

  const cartItemsCount = coffee.reduce(
    (acc: { [x: string]: number }, curr: { id: string }) => {
      if (curr.id in acc) {
        acc[curr.id] += 1;
      } else {
        acc[curr.id] = 1;
      }
      return acc;
    },
    {}
  );

  const numItems = Object.keys(coffee).length;
  console.log(numItems);

  return (
    <Container>
      <h1>Nossos cafés</h1>
      <ul>
        {coffeList.map((cafe: CoffeeType) => {
          const itemCount = cartItemsCount[cafe.id] || 0;
          return (
            <li key={cafe.id}>
              <ContainerCards>
                <img src={cafe.image} alt={cafe.name} />
                {cafe.tag.length === 2 ? (
                  <>
                    <Tags>
                      <span>{cafe.tag[0]}</span>
                      <span>{cafe.tag[1]}</span>
                    </Tags>
                  </>
                ) : cafe.tag.length === 3 ? (
                  <>
                    <Tags>
                      <span>{cafe.tag[0]}</span>
                      <span>{cafe.tag[1]}</span>
                      <span>{cafe.tag[2]}</span>
                    </Tags>
                  </>
                ) : (
                  <Tags>
                    <span>{cafe.tag[0]}</span>
                  </Tags>
                )}
                <h2>{cafe.name}</h2>
                <p>{cafe.description}</p>
                <BuyCart>
                  <div>
                    <span>R$</span>
                    <Price>{cafe.price}</Price>
                  </div>
                  <Count>
                    <div className="count">
                      <button
                        onClick={() => handleRemoveToCart(cafe.name, cafe.id )}
                        className="remove"
                      >
                        -
                      </button>
                      <span>{itemCount}</span>
                      <button
                        className="add"
                        onClick={() => handleAddToCart(cafe.id)}
                      >
                        +
                      </button>
                    </div>
                    <Cart>
                      <ShoppingCartSimple size={15} weight="fill" />
                    </Cart>
                  </Count>
                </BuyCart>
              </ContainerCards>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
