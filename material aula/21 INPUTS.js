import React from "react";

/*
  O QUE SERÁ FEITO?
  inputs
*/

const App = () => {
  //pra cada input, criar um estado (primeira alternativa)
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  //criar um objeto pro form que guarde os inputs
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  //tratando form para ele nao recarregar a página
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  function handleChange({ target }) {
    const {id, value} = target;
    //passando os valores antigos e os novos valores
    setForm({...form, [id]: value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">nome</label>
      <input
        id="nome"
        name="nome"
        type="text"
        /*primeira situacao: value={email}*/
        value={form.nome}
        /*primeira situacao: (e) => setNome(e.target.value) */
        onChange={handleChange}
      />

      <label htmlFor="email">email</label>
      <input
        id="email"
        name="email"
        type="text"
        /*primeira situacao value={email}*/
        value={form.email}
        /*primeira situacao: (e) => setNome(e.target.value) */
        onChange={handleChange}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
