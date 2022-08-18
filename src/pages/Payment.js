import { useContext, useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import MyContext from "../MyContext";

function Payment() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(MyContext);
  const [nome, setNome] = useState("");

  //radio buttons de endereco
  const [selectedEndereco, setSelectedEndereco] = useState("retirar");

  const handleEnderecoChange = (event) => {
    setSelectedEndereco(event.target.value);
  };

  //radio buttons de forma de pagamento
  const [selectedPagamento, setSelectedPagamento] = useState("dinheiro");

  const handlePagamentoChange = (event) => {
    setSelectedPagamento(event.target.value);
  };

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
          {user.length === 0 ? (
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => {
                setNome(e.target.value);
              }}
            />
          ) : (
            <input
              type="text"
              id="nome"
              placeholder="Digite seu nome"
              value={user}
              className="userInputDone"
              disabled
            />
          )}

          <h3>Celular</h3>
          <input type="tel" id="tel" placeholder="Digite seu celular" />
          <h3>Endereço</h3>
          <div className="endereco">
            <input
              type="radio"
              name="endereco"
              id="retirar"
              value="retirar"
              checked={selectedEndereco === "retirar"}
              onChange={handleEnderecoChange}
            />
            <label htmlFor="retirar">Retirar na loja</label>

            <input
              type="radio"
              name="endereco"
              id="delivery"
              value="delivery"
              checked={selectedEndereco === "delivery"}
              onChange={handleEnderecoChange}
            />
            <label htmlFor="delivery">Delivery</label>
          </div>
          {selectedEndereco === "delivery" ? (
            <p className="add_address">Adicionar endereço</p>
          ) : (
            ""
          )}
          <h3>Pagamento</h3>
          <p>Método de pagamento</p>
          <div className="pagamento">
            <input
              type="radio"
              id="dinheiro"
              name="pagamento"
              value="dinheiro"
              checked={selectedPagamento === "dinheiro"}
              onChange={handlePagamentoChange}
            />
            <label htmlFor="dinheiro">Dinheiro</label>

            <input
              type="radio"
              id="cartao"
              name="pagamento"
              value="cartao"
              checked={selectedPagamento === "cartao"}
              onChange={handlePagamentoChange}
            />
            <label htmlFor="cartao">Cartão</label>
          </div>

          <button
            onClick={() => {
              setUser(nome);
            }}
          >
            Concluir pedido
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
