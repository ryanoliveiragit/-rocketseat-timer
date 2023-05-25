import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Form } from "../pages/payment/form/form";
import { Sucess } from "../pages/sucess/sucess";
import { History } from "../pages/history";

export function Router() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Form />} />
      <Route path="/sucess" element={<Sucess />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
