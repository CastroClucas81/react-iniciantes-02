import React from "react";

const titulo = "esse é um titulo";

/*
  O QUE SERÁ FEITO?
  TRATAMENTO DE ARRAYS

  FOREACH TU FAZ COM O MAP
*/

const App = () => {
  //ARRAY SIMPLES
  const empresas = ["Veracel", "Cabral", "Rodo diesel"];

  //ARRAY COM ELEMENTOS DE JSX... Tem q ter a KEY IGUAL AO VUE
  const empresasJsx = [<li key="el">Apple</li>, <li key="e2">Googler</li>];

  /*
    IMPORTANTE NOTAR QUE CADA FILHO DEVE TER UMA KEY
  */

  //TRABALHANDO COM ARRAY DE OBJETOS
  const livros = [
    { nome: "Livro 1", ano: 1996 },
    { nome: "Livro 2", ano: 1997 },
    { nome: "Livro 3", ano: 1998 },
    { nome: "Livro 4", ano: 1999 },
  ];

  /*
  FOREACH PARA ARRAY SIMPLES
    {empresas.map(empresa => (
           <li key={empresa}>
             {empresa}
           </li>
         ))}
  
  */

  /*
  FOREACH PARA ARRAY DE OBJETOS
  - USANDO DESESTRUTURACAO {ano} e {nome, ano}
  - FILTER É QUASE UM IF
  - MAP RETORNA UM ARRAY ATUALIZADO

  {livros.filter(({ano}) => ano > 1996).map(({nome, ano}) => (
    <li key={nome}>
      <p>
        Nome: {nome} - ano: {ano}
      </p>
    </li>
  ))}
 */
  return (
    <>
      <ul>
        {livros
          .filter(({ ano }) => ano > 1996)
          .map(({ nome, ano }) => (
            <li key={nome}>
              <p>
                Nome: {nome} - ano: {ano}
              </p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default App;
