/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { CoffeeType } from "../@types/coffe";

/** Aqui vai a tipagem de tudo o que você vai "exportar" para usar em outros lugares,
 * tanto funções, variáveis, e etc */
type CartContextType = {
  addNewItem: (data: CoffeeType) => void;
  removeItem: (itemId: number) => void;
  countItems: (productId: number) => number;

  shoppingCart: CoffeeType[];
  cart: CoffeeType[];
};

// Aqui cria o contexto passando a tipagem
const CartContext = createContext({} as CartContextType);

// Props do provider, todos os providers sempre vai receber o children, pois vai por volta de toda sua aplicação no App.tsx
type CartProviderProps = {
  children: React.ReactNode;
};

// Aqui tu cria o provider
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CoffeeType[]>(() => {
    const storedCart = localStorage.getItem("coffeeCart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("coffeeCart", JSON.stringify(cart));
  }, [cart]);

  const addNewItem = (data: CoffeeType) => {
    const newCart: CoffeeType = {
      name: data.name,
      id: data.id,
      description: data.description,
      image: data.image,
      tag: data.tag,
      price: data.price,
    };
    setCart([...cart, newCart]);
  };

  const countItems = (itemId: number) => {
    return cart.filter((item) => item.id === itemId).length;
  };

  const removeItem = (itemId: number) => {
    const itemIndex = cart.findIndex((item) => item.id === itemId);
    if (itemIndex === -1) {
      console.log("Item não encontrado no carrinho");
      return;
    }
    const updatedCart = [...cart];
    updatedCart.splice(itemIndex, 1);
    setCart(updatedCart);
  };

  /** Aqui tu retorna o provider passando os valores que definiu lá nos types */
  // E no value, passa as funcoes que tu quer usar em qualquer lugar no teu projet
  return (
    <CartContext.Provider
      value={{
        addNewItem,
        cart,
        removeItem,
        countItems,
        shoppingCart: cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Aqui tu cria um hook pra usar em outros lugares
export const useCart = () => useContext(CartContext);
