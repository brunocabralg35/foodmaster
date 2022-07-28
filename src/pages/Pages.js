import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Order from "./Order";
import Cart from "./Cart";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/order" element={<Order />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default Pages;
