import { createContext, useContext, useEffect, useRef, useState } from "react";
import { CoffeeType } from "../@types/coffe";

type CartContextType = {
  addNewItem: (data: CoffeeType) => void;
  removeItem: (itemId: number) => void;
  countItems: (productId: number) => number;
  shoppingCart: CoffeeType[];
  cart: CoffeeType[];
  submitRef: React.MutableRefObject<HTMLButtonElement | null>;
};

const CartContext = createContext({} as CartContextType);

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CoffeeType[]>(() => {
    const storedCart = localStorage.getItem("coffeeCart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const submitRef = useRef<HTMLButtonElement | null>(null);

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

  return (
    <CartContext.Provider
      value={{
        addNewItem,
        cart,
        removeItem,
        countItems,
        shoppingCart: cart,
        submitRef,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
