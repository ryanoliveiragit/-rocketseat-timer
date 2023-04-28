import {Layout} from "../../components/layout";
import { Navbar } from "../../components/header/navBar";


export function Checkout() {
  const itensString = localStorage.getItem('cartItems');
  const itens = itensString ? JSON.parse(itensString) : [];
  
  const countByName = itens.reduce((count: any, { name, price }: any) => {
    if (!count[name]) {
      count[name] = {
        quantity: 1,
        price: parseFloat(price),
      };
    } else {
      count[name].quantity += 1;
    }
    return count;
  }, {});
    
  console.log(countByName);
  const items = Object.entries(countByName);
  const total = items.reduce((acc: number, [, item]: [string, any]) => {
    const itemPrice = Number(item.price);
    return acc + itemPrice * item.quantity;
  }, 0);
    
  return (
    <Layout>
      <Navbar />
      <ul>
        {items.map(([name, data]: [string, any]) => (
          <li key={name}>
            {name} ({data.quantity}x) - R$ {parseFloat(data.price) * data.quantity}
          </li>
        ))}
      </ul>
      <div>Total: R$ {total}</div>
    </Layout>
  )
}