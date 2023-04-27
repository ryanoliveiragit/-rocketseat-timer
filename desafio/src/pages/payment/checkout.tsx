import { useContext, useEffect } from "react";
import { Navbar } from "../../components/header/navBar";
import { Layout } from "../../components/layout";
import cartContext from "../../contexts/myContexts";

export function Checkout() {
    const {item , setItem }:any = useContext(cartContext);

    useEffect(() => {
        const cachedItem = localStorage.getItem("cartItems");
        if (cachedItem !== null && cachedItem !== undefined) {
          setItem(JSON.parse(cachedItem));
        }
      }, [setItem]);

      const id = item.id
      console.log(id)
      
    return(
        <Layout>
        <Navbar />
        {Object.entries(item).map(([key, value]) => {
          return(
            <li key={key}> {`${item}`}</li>
          )
        })}
        </Layout>
    )
}