import { useContext, useEffect, useState } from "react";
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

interface Cafe {
    id: number;
    name: string;
    description: string;
    image: string;
    tag: string[];
    price: string;
}

interface CafeListProps {
    cafes: Cafe[];
}

export function CafeList({ cafes }: CafeListProps) {
    const { item, setItem }: any = useContext(cartContext);

    useEffect(() => {
        const cachedItems = localStorage.getItem("cartItems");

        if (cachedItems) {
            setItem(JSON.parse(cachedItems));
        }
    }, [setItem]);

    function handleAddCount(id: number) {
        setItem((prevItems: any) => ({
            ...prevItems,
            [id]: (prevItems[id] || 0) + 1,
        }));

        localStorage.setItem(
            "cartItems",
            JSON.stringify({
                ...item,
                [id]: (item[id] || 0) + 1,
            })
        );
    }

    function handleRemoveCount(id: number) {
        setItem((prevItems: any) => ({
            ...prevItems,
            [id]: Math.max((prevItems[id] || 0) - 1, 0),
        }));

        localStorage.setItem(
            "cartItems",
            JSON.stringify({
                ...item,
                [id]: Math.max((item[id] || 0) - 1, 0),
            })
        );
    }
    console.log(item)

    return (
        <Container>
            <h1>Nossos cafés</h1>
            <ul>
                {cafes.map((cafe) => (
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
                                            className="remove"
                                            onClick={() => handleRemoveCount(cafe.id)}
                                        >
                                            -
                                        </button>
                                        <span>{item[cafe.id] ?? 0}</span>
                                        <button onClick={() => handleAddCount(cafe.id)}>+</button>
                                    </div>
                                    <Cart>
                                        <ShoppingCartSimple size={15} weight="fill" />
                                    </Cart>
                                </Count>
                            </BuyCart>
                        </ContainerCards>
                    </li>
                ))}
            </ul>
        </Container>
    );
}