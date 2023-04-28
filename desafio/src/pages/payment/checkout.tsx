import { useContext, useEffect } from "react";
import { Navbar } from "../../components/header/navBar";
import { Layout } from "../../components/layout";
import cartContext from "../../contexts/myContexts";

export function Checkout() {
  
  const itensString = localStorage.getItem('cartItems');
  const itens = itensString ? JSON.parse(itensString) : [];

  return (
    <Layout>
      <Navbar />
      <ul>
        {itens.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </Layout>
  );
}