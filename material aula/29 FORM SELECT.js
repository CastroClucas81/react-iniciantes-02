import React from "react";

import Input from "./Form/Input";
import Select from "./Form/Select";

/*
  O QUE SERÁ FEITO?
  FORMULARIO

  DICA: SEPARAR OS INPUTS TEXT, TEXTAREA E ETC dos checkbox e tal
*/

const App = () => {
  //o estado precisa ficar aqui pq é por aq que enviaremos o formulário
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");

  return (
    <form>
      <Select
        options={["smartphone", "notebook", "tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />

      <button>Enviar</button>
    </form>
  );
};

export default App;
