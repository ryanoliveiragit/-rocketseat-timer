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
      }, []);

      console.log(item)
    return(
        <Layout>
        <Navbar />
        <h1>oi</h1>
        </Layout>
    )
}