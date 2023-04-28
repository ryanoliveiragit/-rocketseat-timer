import { Navbar } from "../../components/header/navBar";
import { Layout } from "../../components/layout";
import { CoffeeType } from "../../@types/coffe";

export function Checkout() {
  
  const itensString = localStorage.getItem('cartItems');
  const itens = itensString ? JSON.parse(itensString) : [];

  return (
    <Layout>
      <Navbar />
      <ul>
        {itens.map((item: CoffeeType) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </Layout>
  );
}