import { useState } from "react";
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
    const [counts, setCounts] = useState<{ [key: number]: number }>({});

    function handleAddCount(id: number) {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1,
        }));
    }

    function handleRemoveCount(id: number) {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: Math.max((prevCounts[id] || 0) - 1, 0),
        }));
    }

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
                                        <span>{counts[cafe.id] ?? 0}</span>
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