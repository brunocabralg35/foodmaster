import { useContext } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import MyContext from "../MyContext";

function Payment() {
  const navigate = useNavigate();
  const { user } = useContext(MyContext);

  return (
    <div className="payment">
      <div className="column-pay">
        <span
          onClick={() => {
            navigate("/order");
          }}
        >
          <MdKeyboardBackspace />
          Voltar
        </span>
        <div className="form-pay">
          <h2>Seus dados</h2>
          <h3>Nome</h3>
          <input
            type="text"
            id="nome"
            placeholder="Digite seu nome"
            value={user}
          />
          <h3>Celular</h3>
          <input type="tel" id="tel" placeholder="Digite seu celular" />
          <h3>Endereço</h3>
          <div className="endereco">
            <input
              type="radio"
              name="endereco"
              id="retirar"
              value="Retirar na loja"
            />
            <label for="retirar">Retirar na loja</label>

            <input
              type="radio"
              name="endereco"
              id="delivery"
              value="Delivery"
            />
            <label for="delivery">Delivery</label>
          </div>
          <h3>Pagamento</h3>
          <p>Método de pagamento</p>
          <div className="pagamento">
            <input
              type="radio"
              id="dinheiro"
              name="endereco"
              value="Dinheiro"
            />
            <label for="dinheiro">Dinheiro</label>

            <input type="radio" id="cartao" name="endereco" value="Cartão" />
            <label for="cartao">Cartão</label>
          </div>

          <button>Concluir pedido</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
