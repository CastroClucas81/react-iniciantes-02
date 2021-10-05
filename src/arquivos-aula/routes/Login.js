import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //hook do próprio react router doom
  //utilizado para redirecionar o usuário após fazermos algum tipo de verificação
  //por exemplo. O usuário faz o login, o sistema valida os dados e depois o redireciona
  const navigate = useNavigate();

  function handleClick() {
    console.log("fazer login");
    navigate("/sobre");
  }

  return (
    <>
      <button onClick={handleClick}>Login</button>
    </>
  );
};

export default Login;
