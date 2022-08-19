import { useContext, useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import MyContext from "../MyContext";
import { AiFillCloseCircle } from "react-icons/ai";

function Payment() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(MyContext);
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");

  //radio buttons de endereco
  const [selectedEndereco, setSelectedEndereco] = useState("retirar");

  const handleEnderecoChange = (event) => {
    setSelectedEndereco(event.target.value);
  };

  //modal para endereco
  const [enderecoModal, setEnderecoModal] = useState(false);

  //radio buttons de forma de pagamento
  const [selectedPagamento, setSelectedPagamento] = useState("dinheiro");

  const handlePagamentoChange = (event) => {
    setSelectedPagamento(event.target.value);
  };

  const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
    setTel(valor);
  };

  return (
    <div className="payment">
      {!enderecoModal ? (
        <span></span>
      ) : (
        <div className="bg-modal">
          <div className="modal-delete">
            <AiFillCloseCircle
              size={30}
              className="close-btn"
              onClick={() => {
                setEnderecoModal(false);
              }}
            />
            <h2>Adicionar endereço</h2>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Cidade" />
            <div className="inputs-rua">
              <input type="text" placeholder="Rua" />
              <input type="number" placeholder="Número" />
            </div>

            <div className="btns-modal-payment">
              <button
                onClick={() => {
                  setEnderecoModal(false);
                }}
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  setEnderecoModal(false);
                }}
              >
                Adicionar
              </button>
            </div>
          </div>
        </div>
      )}

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
          <input
            type="tel"
            id="tel"
            placeholder="Digite seu celular"
            value={tel}
            onChange={(e) => {
              mascaraTelefone(e.target.value);
            }}
            maxLength={15}
          />
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
            <p
              onClick={() => {
                setEnderecoModal(true);
              }}
              className="add_address"
            >
              Adicionar endereço
            </p>
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
