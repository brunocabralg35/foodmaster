import logo from "../Assets/images/icon.png";
import { useContext, useState } from "react";
import MyContext from "../MyContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setUser } = useContext(MyContext);
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="loginBox">
        <img src={logo}></img>
        <h1>Olá!</h1>
        <p>Bem-vindo ao FoodMaster!</p>
        <input
          onChange={(e) => {
            setNome(e.target.value);
          }}
          type="text"
          placeholder="Digite seu nome"
          value={nome}
        />
        <button
          onClick={() => {
            if (nome === "") {
              alert("Preencha o campo de nome.");
            } else {
              setUser(nome);
              navigate("/order");
            }
          }}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
