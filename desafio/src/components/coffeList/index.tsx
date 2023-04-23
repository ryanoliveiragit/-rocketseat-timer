import { useState } from 'react';
import { ContainerCards, BuyCart, Count, Cart, Price, Container } from './styles'

interface Cafe {
    id: number;
    name: string;
    description: string;
    image: string;
    tag: string;
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
        <ul>
            {cafes.map((cafe) => (
                <li key={cafe.id}>
                    <ContainerCards>
                        <img src={cafe.image} alt={cafe.name} />
                        <span>{cafe.tag}</span>
                        <h2>{cafe.name}</h2>
                        <p>{cafe.description}</p>
                        <BuyCart>
                            <div>
                                <span>R$</span>
                                <Price>{cafe.price}</Price>
                            </div>
                            <Count>
                                <div className='count'>
                                    <button className='remove' onClick={() => handleRemoveCount(cafe.id)}>-</button>
                                    <span>{counts[cafe.id] ?? 0}</span>
                                    <button onClick={() => handleAddCount(cafe.id)}>+</button>
                                </div>
                                <Cart><span>a</span></Cart>
                            </Count>
                        </BuyCart>
                    </ContainerCards>
                </li>
            ))}
        </ul>
        </Container>
    );
}