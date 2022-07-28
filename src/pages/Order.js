import { useContext, useState } from "react";
import MyContext from "../MyContext";

function Order() {
  const { user } = useContext(MyContext);

  return <div className="order">Olá, {user}</div>;
}

export default Order;
