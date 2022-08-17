import { useContext, useState } from "react";
import MyContext from "../MyContext";
import { AiFillCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { user } = useContext(MyContext);
  const { cartItems, addToCart, removeFromCart } = useContext(MyContext);

  const [confirmModal, setConfirmModal] = useState(false);
  const [iModal, setiModal] = useState(false);

  const [removal, setRemoval] = useState();

  const [obsIndex, setObsIndex] = useState();
  const [obsInput, setObsInput] = useState();

  const navigate = useNavigate();

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

  const handleObs = (e) => {
    setObsInput(e.target.value);
  };

  return (
    <div className="cart-page">
      {!confirmModal ? (
        <span></span>
      ) : (
        <div className="bg-modal">
          <div className="modal-delete">
            <AiFillCloseCircle
              size={30}
              className="close-btn"
              onClick={() => {
                setConfirmModal(false);
              }}
            />
            <h2>Deseja remover esse item do carrinho?</h2>
            <div>
              <button
                onClick={() => {
                  setConfirmModal(false);
                }}
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  removeFromCart(removal);
                  setConfirmModal(false);
                }}
              >
                Sim, remover
              </button>
            </div>
          </div>
        </div>
      )}

      {!iModal ? (
        <span></span>
      ) : (
        <div className="bg-modal">
          <div className="modal-delete modal-obs">
            <AiFillCloseCircle
              size={30}
              className="close-btn"
              onClick={() => {
                setiModal(false);
              }}
            />
            <h2>Adicionar observação</h2>
            <textarea value={obsInput} onChange={handleObs}></textarea>
            <div>
              <button
                onClick={() => {
                  setObsInput("");
                  setiModal(false);
                }}
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  cartItems[obsIndex].obs = obsInput;
                  setObsInput("");
                  setiModal(false);
                }}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}

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
                  <div className="quantidade">
                    <span
                      onClick={() => {
                        if (cartItem.qntd > 1) {
                          removeFromCart(
                            cartItem.name,
                            cartItem.price / cartItem.qntd,
                            cartItem.image,
                            1
                          );
                        } else {
                          setConfirmModal(true);
                          setRemoval(
                            cartItem.name,
                            cartItem.price / cartItem.qntd,
                            cartItem.image,
                            1
                          );
                        }
                      }}
                    >
                      -
                    </span>
                    <div>{cartItem.qntd}</div>
                    <span
                      onClick={() => {
                        addToCart(
                          cartItem.name,
                          cartItem.price / cartItem.qntd,
                          cartItem.image,
                          1
                        );
                      }}
                    >
                      +
                    </span>
                  </div>
                  <div className="rect">
                    <img
                      src={require("../Assets/images/" + cartItem.image)}
                    ></img>
                  </div>
                  <div className="rect-name">
                    <h3>{cartItem.name}</h3>
                    <button
                      onClick={() => {
                        setObsIndex(index);
                        setiModal(true);
                      }}
                    >
                      Adicione observação
                    </button>
                    <span className="obs">{cartItem.obs}</span>
                  </div>

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
            <button
              onClick={() => {
                navigate("/payment");
              }}
            >
              Finalizar compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
