import { useContext, useState } from "react";
import MyContext from "../MyContext";
import data from "../Assets/data.json";
import { FaPizzaSlice, FaCandyCane, FaHamburger } from "react-icons/fa";
import { GiFrenchFries } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";

function Order() {
  const { user } = useContext(MyContext);

  return (
    <div className="order">
      <div className="menu">
        <input type="radio" id="pizza" name="opcao_food" value="pizza" />
        <label for="pizza">
          <FaPizzaSlice size={30} />
          Pizza
        </label>
        <input type="radio" id="bebidas" name="opcao_food" value="bebidas" />
        <label for="bebidas">
          <BiDrink size={30} />
          Bebidas
        </label>
        <input type="radio" id="doces" name="opcao_food" value="doces" />
        <label for="doces">
          <FaCandyCane size={30} />
          Doces
        </label>
        <input type="radio" id="combos" name="opcao_food" value="combos" />
        <label for="combos">
          <GiFrenchFries size={30} />
          Combos
        </label>
        <input type="radio" id="burguers" name="opcao_food" value="burguers" />
        <label for="burguers">
          <FaHamburger size={30} />
          Burguers
        </label>
      </div>

      <div className="food">
        <div className="cards">
          {data.map((db, index) => {
            let maskPrice = db.price.toFixed(2);
            return (
              <div className="card" key={index}>
                <img src={require("../Assets/images/" + db.image)}></img>
                <h1>{db.name}</h1>
                <p>{db.description}</p>
                <p>R${maskPrice.replace(".", ",")}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="cart">
        <h1>Olá, {user}</h1>
        <p>Seu pedido</p>
      </div>
    </div>
  );
}

export default Order;
