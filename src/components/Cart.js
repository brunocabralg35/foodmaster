import { useContext, useState } from "react";
import MyContext from "../MyContext";

function Cart() {
  const { user } = useContext(MyContext);
  const { cartItems } = useContext(MyContext);

  function getFinalPrice() {
    let soma = 0;
    if (cartItems.length === 0) {
      return soma;
    } else {
      for (let i = 0; i < cartItems.length; i++) {
        soma += cartItems[i].price;
      }
      let maskPrice = soma.toFixed(2);
      return maskPrice.replace(".", ",");
    }
  }

  return (
    <div className="cart-page">
      <div className="cart">
        <h1>Olá, {user}</h1>
        <h2>Seu pedido</h2>

        <div className="listedCartItems">
          {cartItems.length === 0 ? (
            <p>Seu carrinho ainda está vazio</p>
          ) : (
            cartItems.map((cartItem, index) => {
              let maskPrice = cartItem.price.toFixed(2);
              return (
                <div className="cartItem" key={index}>
                  <div className="quantidade">{cartItem.qntd}</div>
                  <img
                    src={require("../Assets/images/" + cartItem.image)}
                  ></img>
                  <h3>{cartItem.name}</h3>
                  <p>R${maskPrice.replace(".", ",")}</p>
                </div>
              );
            })
          )}
        </div>

        {cartItems.length === 0 ? (
          <p></p>
        ) : (
          <div className="info-total">
            <p>Total: R${getFinalPrice()}</p>
            <button>Finalizar compra</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;