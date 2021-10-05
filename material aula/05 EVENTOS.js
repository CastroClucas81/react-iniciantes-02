import React from "react";

/*
  O QUE SERÁ FEITO?
  
  EVENTOS 
  -onClick - onClick={eventoClick}
  -onMouseMove - onMouseMove={eventoClick}

  TARGET PEGA O ELEMENTO
  TARGET.INNERTEXT PEGA O CONTEÚDO DO ELEMENTO

  EVENTO ANONIMO
  onClick = {() => console.log(e)}
*/

const App = () => {
  function eventoClick(e) {
    console.log(e);
  }

  function eventoScroll(e) {
    console.log(e);
  }

  //evento
  window.addEventListener("scroll", eventoScroll);

  return (
    <>
      <button onClick={(e) => console.log(e.target.innerText)}>
        Clique aqui
      </button>
    </>
  );
};

export default App;
