import React from "react";
import Modal from "./arquivos-aula/modal/Modal";
import ButtonModal from "./ButtonModal";

/*
  O QUE SERÁ FEITO?
  HOOKS - useState, REATIVIDADE

  ATUALIZAR O ESTADO SEM ATUALIZA-LO DIRETAMENTE 

  UM PROBLEMA DE USAR O setState DIRETAMENTE É INSERIR NOVOS ELEMENTOS
  NUM ARRAY... ELE NÃO SABE QUE TERÁ Q RENDERIZAR NOVAMENTE
  ESSE PROBLEMA ACONTECE COM ARRAYS E OBJETOS

  O CONSOLE.LOG VAI DUPLICAR SEMPRE QUE EU USAR UM USESTATE NO MODO
  DE DESENVOLVIMENTO
*/

const App = () => {
  const [modal, setModal] = React.useState(false);

  const [items, setItems] = React.useState("Teste");

  const [contar, setContar] = React.useState(1);
  //suponha uma quantidade de itens
  const [contarItems, setContarItems] = React.useState(["Item 1"]);

  function handleClick() {
    //mudar o contador do contarItems
    setContar((contar) => {
      return contar + 1;
    });

    //o modo estrito dá um bug quando a gente tenta inserir funcao
    //funcao, funcao dentro uma da outra
    //criando novos elementos com um contador state externo
    setContarItems((items) => [...items, "Item " + (contar + 1)]);

    //não funciona assim
    //items = 'outro';

    //funciona assim... use sempre a funcao
    setItems("outro");
  }

  return (
    <>
      <ul>
        {contarItems.map((items) => (
          <li>{items}</li>
        ))}
      </ul>
      <p>{contar}</p>
      <button onClick={handleClick}>clicar para alterar items</button>

      <br />
      <br />
      {items}
      <button onClick={handleClick}>clicar</button>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </>
  );
};

export default App;
