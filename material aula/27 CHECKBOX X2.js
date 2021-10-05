import React from "react";

/*
  O QUE SERÁ FEITO?
  CHECKBOX ATIVIDADE - otimizar criação dos inputs
*/

const App = () => {
  const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"];

  const [cores, setCores] = React.useState(["vermelho"]);

  function handleChange({ target }) {
    if (target.checked) {
      //pegando os valores anteriores mais os novos
      setCores([...cores, target.value]);
    } else {
      //removendo itens do array caso não esteja marcado
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  return (
    <form>
      {coresArray.map((cor) => (
        <label key={cor}>
          <input
            type="checkbox"
            value={cor}
            checked={cores.includes(cor)}
            onChange={handleChange}
          />
          {cor}
        </label>
      ))}
    </form>
  );
};

export default App;
