import React from "react";

import Input from "./Form/Input";

/*
  O QUE SERÁ FEITO?
  VALIDAÇÃO

  ONBLUR: MOMENTO QUE O ELEMENTO PERDE O FOCO

  JAVASCRIPT COM REGEX
*/

const App = () => {
  const [cep, setCep] = React.useState("");
  const [erro, setErro] = React.useState("");

  function validateCep(value) {
    //verificar se o usuário digitou alguma coisa
    if (value.length === 0) {
      setErro("preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setErro("Preencha com um CEP válido");
      return false;
    } else {
      setErro(null);
      return true;
    }
  }

  //validar assim que o usuário finalizar a digitação...
  //mas tem q entrar na caixa de erros primeiro
  //valida caso tenha algum erro
  function handleChange({ target }) {
    if (erro) validateCep(target.value);
    setCep(target.value);
  }

  //validando quando eu tirar o foto
  function handleBlur({ target }) {
    //validando com regex
    validateCep(target.value);
  }

  //validar para que o usuário nao insira os dados erraos
  //valida quando o formulario for enviado
  function handleSubmit(e) {
    e.preventDefault();

    //passamos o cep pq nao possuimos o target e o cep possui o dado
    if (validateCep(cep)) {
      console.log("Enviou");
    } else {
      console.log("nao enviar")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        value={cep}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="00000-000"
      />
      {erro && <p>{erro}</p>}
      <button>Enviar</button>
    </form>
  );
};

export default App;
