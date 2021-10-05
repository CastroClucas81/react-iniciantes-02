import React from "react";
/*
  O QUE SERÁ FEITO?
  useREF retorna um objeto q retorna um current. Esse objeto pode ser utilizado
  para guadarmos valores que irão persisitir durante todo o ciclo de vida do elemento.

  o useRef deve ser usado dentro de um callback ou useeffect

  USOS: FORMULARIOS
*/

const App = () => {
  //sintaxe para usar o useref
  //ex.: array de comentarios
  const [comentarios, setComentarios] = React.useState([
    "teste",
    "teste 1",
    "teste 2",
    "teste 3",
  ]);

  //suponha um carrinho com zero itens
  const [carrinho, setCarrinho] = React.useState(0);

  const [input, setInput] = React.useState("");

  //criando referencia para focar no input assim que eu clicar no botao enviar
  const inputElement = React.useRef();
  //criando useref para eviar que o timeout bugue
  const timeoutRef = React.useRef();

  //notificacao do carrinho (também é um estado... se muda é um estado)
  const [notificacao, setNotificacao] = React.useState(null);

  //se definir uma valor como um estado, é necessario alterar o valor de forma reativa
  //ex: o value com o estado precisa de uma funcao reativa
  function handleClick() {
    //distribuindo os comentários: antigos e novo (input)
    setComentarios([...comentarios, input]);
    //limpando o input value
    setInput("");

    //setando um método onfocus sobre o useref
    inputElement.current.focus();
    setCarrinho(carrinho + 1);

    //exibindo a notificacao
    setNotificacao("item adicionado ao carrinho");

    //limpando o ultimo timeout
    clearTimeout(timeoutRef.current);
    
    //definindo o tempo para exibir uma notificacao
    //jogando o timeout no useRef
    timeoutRef.current = setTimeout(() => {
      setNotificacao("");
    }, 2000);
  }

  return (
    <>
      {comentarios.map((comentario, index) => (
        <li key={index}>{comentario}</li>
      ))}

      <input
        type="Text"
        ref={inputElement}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>enviar para os comentarios</button>
      <p>{notificacao}</p>
      <button onClick={handleClick}>adicionar ao carrinho</button>
    </>
  );
};

export default App;
