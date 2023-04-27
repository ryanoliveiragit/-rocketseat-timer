import { useCallback, useContext } from "react";
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
import cartContext from '../../contexts/myContexts'
import { coffeList } from '../../components/coffeList/list'

interface CartItem {
    id: string;
    name: string;
    description: string;
    image: string;
    tag: string[];
    price: string;
    quantity: string;
}

export function CafeList() {

    const { coffee, setCoffee }: any = useContext(cartContext);

    function handleRemoveToCart(cafeId: string) {
        setCoffee((prevCoffee: any) => {
          const selectedItem = prevCoffee.find((item: CartItem) => item.id === cafeId);
          if (selectedItem) {
            if (selectedItem.quantity > 1) {
              const updatedCart = prevCoffee.map((item: CartItem) =>
                  item.id === cafeId ? { ...item, quantity: parseInt(item.quantity) - 1 } : item
              );
              return updatedCart;
            } else {
              const updatedCart = prevCoffee.filter((item: CartItem) => item.id !== cafeId);
              return updatedCart;
            }
          } else {
            console.log('erro');
            return prevCoffee;
          }
        });
      }

      function handleAddToCart(cafeId: string) {
        const selectedCafe = coffeList.find((cafe) => cafe.id === cafeId);
        if (selectedCafe == null) {
          console.log("erro");
        } else {
          const updatedCoffeList = [...coffeList];
          const index = updatedCoffeList.findIndex((cafe) => cafe.id === cafeId);
          updatedCoffeList[index].quantity = (parseInt(selectedCafe.quantity) + 1).toString();
          const newCartItem: CartItem = {
            id: selectedCafe.id,
            name: selectedCafe.name,
            price: selectedCafe.price,
            quantity: updatedCoffeList[index].quantity,
            description: selectedCafe.description,
            image: selectedCafe.image,
            tag: selectedCafe.tag,
          };
          setCoffee([...coffee, newCartItem]);
        }
      }
    const cartItemsCount = coffee.reduce((acc: { [x: string]: number; }, curr: { id: string; }) => {
        if (curr.id in acc) {
          acc[curr.id] += 1;
        } else {
          acc[curr.id] = 1;
        }
        return acc;
      }, {});

    console.log(coffee)
    console.log(coffee.price)
    return (
        <Container>
            <h1>Nossos cafés</h1>
            <ul>
                {coffeList.map((cafe) =>{
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
                                        <button onClick={() =>  handleRemoveToCart(cafe.id)}
                                            className="remove"
                                        >
                                            -
                                        </button>
                                        <span>{itemCount}</span>
                                        <button className="add" onClick={() => handleAddToCart(cafe.id)}>+</button>

                                    </div>
                                    <Cart>
                                        <ShoppingCartSimple size={15} weight="fill" />
                                    </Cart>
                                </Count>
                            </BuyCart>
                        </ContainerCards>
                    </li>
                    )
                }
                )}
            </ul>
        </Container>
    );
}
