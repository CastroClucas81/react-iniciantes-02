import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

/*
  O QUE SERÁ FEITO?
  HOOKS - useState

  ESTADO - REPRESENTA AS CARACTERISTICAS DELA NAQUELE MOMENTO
  EX.: BOTÃO ATIVO. Se tiver ativo, uma mensagem será demonstrada

  MUDA UM ESTADO ESPECÍFICO. TODA VEZ QUE A FUNÇÃO FOR ATIVADA,
  RENDERIZE A TELA NOVAMENTE
*/

const App = () => {
  //UTILIZANDO O HOOK
  //O FALSE REPRESENTA O ESTADO INICIAL
  //O USESTATE RECEBE O MEU VALOR E UMA FUNCAO PRA ATUALIZAR
  //O VALOR QUE EU PASSEI ex: usetate(false, f)

  //const ativoHook = React.useState(false);
  //OU
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: "andre", idade: "30" });
  const [modal, setModal] = React.useState(false);

  //pegando o false do meu state
  //const ativoValor = ativoHook[0];

  //pegando a funcao do meu state
  //const atualizaValor = ativoHook[1];

  //A FONTE DA VERDADE DO ESTADO
  //let ativo = true;

  //OBSERVE QUE APESAR DE TER MUDADO, NÃO ATUALIZOU NA TELA
  function handleClick() {
    //O VALOR Q EU PASSAR É O Q VAI MUDAR A MINHA VARIAVEL
    //ERA FALSE AGORA É TRUE
    setAtivo(!ativo);
    //ativo = !ativo;

    //atualizar o objeto sem alterar o primeiro
    /*
      desestruturado dados e criando um novo objeto a partir do antigo
    */
    setDados({...dados, faculdade: 'Possui faculdade'});
  }

  return (
    <>
      <div>
        {modal ? 'Modal Aberto' : 'Modal Fechado'}
        <Modal modal={modal} setModal={setModal} />
      </div>

      <p>
        {dados.nome}
      </p>
      <p>
        {dados.idade}
      </p>
      <p>
        {dados.faculdade}
      </p>
      <button onClick={handleClick}>{ativo ? "ativo" : "inativo"}</button>
      <ButtonModal setModal={setModal} />
    </>
  );
};

export default App;
