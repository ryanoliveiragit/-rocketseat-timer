import { createContext } from "react";
import { CoffeeType } from '../@types/coffe'

type CartContext = {
  coffee: CoffeeType[];
  setCoffee: (coffees: CoffeeType[]) => void;
}

const initialCartContext: CartContext = {
  coffee: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCoffee: () => {},
};

const CartContext = createContext(initialCartContext);

export default CartContext;