import React from "react";

const ButtonModal = ({ setModal }) => {

  function handleClick() {
    //UTILIZANDO O setAtivo com CALLBACK PARA IMPEDIR ALTERAR O ESTADO
    //SEM ALTERAR A VARIÁVEL DIRETAMENTE
    //TENDO ACESSO AO MODAL PQ TO PASSANDO O VALOR ANTERIOR
    setModal((ativo) => !ativo);
  }

  /*
    Antigo botão do USESTATEX1
    <button onClick={() => setModal(true)}>Abrir</button>
  */
  return (
    <>
      <button onClick={handleClick}>Abrir</button>
    </>
  );
};

export default ButtonModal;
