import logo from "../Assets/icon.png";
import { useContext, useState } from "react";
import MyContext from "../MyContext";

function Login() {
  const { setUser } = useContext(MyContext);
  const [nome, setNome] = useState("");

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
            setUser(nome);
          }}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}

export default Login;
