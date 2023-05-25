import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { CoffeeType } from "../@types/coffe";

type SubmitButtonContextType = {
  children: ReactNode;
  onSubmit: any;
};

const SubmitButtonContext = createContext({});

export function useFormContext() {
  return useContext(SubmitButtonContext);
}

export function SubmitButtonProvider({
  children,
  onSubmit,
}: SubmitButtonContextType) {
  return (
    <SubmitButtonContext.Provider value={onSubmit}>
      {children}
    </SubmitButtonContext.Provider>
  );
}

type CartContextType = {
  addNewItem: (data: CoffeeType) => void;
  removeItem: (itemId: number) => void;
  countItems: (productId: number) => number;
  shoppingCart: CoffeeType[];
  cart: CoffeeType[];
  adress: adressType[];
  setCart: React.Dispatch<React.SetStateAction<CoffeeType[]>>;
  addNewAdress: (data: adressType) => void;
  historyContext: (data: CoffeeType) => void;
  history: CoffeeType[];
  historyCount: number;
  sethistoryCount: (data: number) => void;
};

type adressType = {
  cep: number;
  uf: string;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
};
const CartContext = createContext({} as CartContextType);

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CoffeeType[]>(() => {
    const storedCart = localStorage.getItem("coffeeCart");
    if (storedCart) {
      const parsedCart: CoffeeType[] = JSON.parse(storedCart);
      return parsedCart.map((item) => ({ ...item, count: 1 }));
    }
    return [];
  });

  const [history, setHistory] = useState<CoffeeType[]>(() => {
    const historyCart = localStorage.getItem("historyCart");
    return historyCart ? JSON.parse(historyCart) : [];
  });

  const [adress, setAdress] = useState<adressType[]>(() => {
    const storeAdress = localStorage.getItem("adress");
    return storeAdress ? JSON.parse(storeAdress) : [];
  });

  useEffect(() => {
    localStorage.setItem("adress", JSON.stringify(adress));
  }, [adress]);

  useEffect(() => {
    localStorage.setItem("historyCart", JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    localStorage.setItem("coffeeCart", JSON.stringify(cart));
  }, [cart]);

  const addNewAdress = (data: adressType) => {
    const newAdress: adressType = {
      rua: data.rua,
      cidade: data.cidade,
      bairro: data.bairro,
      cep: data.cep,
      complemento: data.complemento,
      numero: data.numero,
      uf: data.uf,
    };
    setAdress([...adress, newAdress]);
  };

  const [historyCount, sethistoryCount] = useState(0);

  const historyContext = () => {
    setHistory([...history, ...cart]);
  };

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
        sethistoryCount,
        historyCount,
        historyContext,
        history,
        addNewItem,
        cart,
        removeItem,
        countItems,
        shoppingCart: cart,
        setCart,
        addNewAdress,
        adress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
