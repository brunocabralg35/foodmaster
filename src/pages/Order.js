import { useContext, useState } from "react";
import MyContext from "../MyContext";
import data from "../Assets/data.json";
import { FaPizzaSlice, FaCandyCane, FaHamburger } from "react-icons/fa";
import { GiFrenchFries } from "react-icons/gi";
import { BiDrink } from "react-icons/bi";
import Cart from "../components/Cart";

function Order() {
  const { user } = useContext(MyContext);
  const { addToCart } = useContext(MyContext);
  const [selected, setSelected] = useState("pizzas");

  const handleMenuChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="order">
      <div className="menu">
        <input
          type="radio"
          id="pizzas"
          name="opcao_food"
          value="pizzas"
          checked={selected === "pizzas"}
          onChange={handleMenuChange}
        />
        <label for="pizzas">
          <FaPizzaSlice size={30} />
          Pizza
        </label>
        <input
          type="radio"
          id="bebidas"
          name="opcao_food"
          value="bebidas"
          checked={selected === "bebidas"}
          onChange={handleMenuChange}
        />
        <label for="bebidas">
          <BiDrink size={30} />
          Bebidas
        </label>
        <input
          type="radio"
          id="doces"
          name="opcao_food"
          value="doces"
          checked={selected === "doces"}
          onChange={handleMenuChange}
        />
        <label for="doces">
          <FaCandyCane size={30} />
          Doces
        </label>
        <input
          type="radio"
          id="combos"
          name="opcao_food"
          value="combos"
          checked={selected === "combos"}
          onChange={handleMenuChange}
        />
        <label for="combos">
          <GiFrenchFries size={30} />
          Combos
        </label>
        <input
          type="radio"
          id="burguers"
          name="opcao_food"
          value="burguers"
          checked={selected === "burguers"}
          onChange={handleMenuChange}
        />
        <label for="burguers">
          <FaHamburger size={30} />
          Burguers
        </label>
      </div>

      <div className="food">
        <div className="cards">
          {data
            .filter((dbs) => dbs.type === selected)
            .map((db, index) => {
              let maskPrice = db.price.toFixed(2);
              return (
                <div
                  className="card"
                  key={index}
                  onClick={() => {
                    addToCart(db.name, db.price, db.image);
                  }}
                >
                  <img src={require("../Assets/images/" + db.image)}></img>
                  <h1>{db.name}</h1>
                  <p>{db.description}</p>
                  <p>R${maskPrice.replace(".", ",")}</p>
                </div>
              );
            })}
        </div>
      </div>

      <Cart />
    </div>
  );
}

export default Order;
