import { useContext, useState } from "react";
import MyContext from "../MyContext";
import data from "../Assets/data.json";

function Order() {
  const { user } = useContext(MyContext);

  return (
    <div className="order">
      <div className="menu"></div>

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

      <div className="cart"></div>
    </div>
  );
}

export default Order;
