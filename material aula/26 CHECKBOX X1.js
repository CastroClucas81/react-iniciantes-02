import React from "react";

/*
  O QUE SERÁ FEITO?
  CHECKBOX
*/

const App = () => {
  const [termos, setTermos] = React.useState(false);
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
      {termos && <p>Aceitou os termos</p>}
      <label>
        <input
          type="checkbox"
          value="Termos"
          checked={termos}
          onChange={({ target }) => setTermos(target.checked)}
        />
        li os termos do site.
      </label>

      <label>
        <input
          type="checkbox"
          value="azul"
          //verificar se já está chegado
          checked={cores.includes("azul")}
          onChange={handleChange}
        />
        Azul
      </label>

      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={cores.includes("vermelho")}
          onChange={handleChange}
        />
        vermelho
      </label>
    </form>
  );
};

export default App;
