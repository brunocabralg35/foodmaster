import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Order from "./Order";
import Cart from "../components/Cart";
import Payment from "./Payment";

function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/order" element={<Order />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default Pages;
