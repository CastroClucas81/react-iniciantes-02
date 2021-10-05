import React from 'react'

//criando contexto global
export const GlobalContexto = React.createContext();

//um baú de onde guardamos a informacao
//contexto global passando o value
//CHILDREN REPRESENTA OS COMPONENTES
export const GlobalStorage = ({children}) => {
    const [contar, setContar] = React.useState(0);

    //definindo funcao global
    function teste() {
        alert('oi');
    }

    //Global contexto é um contexto
    //O CHILDREN REPRESENTA OS COMPONENTES
    return (
        <GlobalContexto.Provider value={{contar: contar, setContar: setContar, teste: teste}}>
            {children}
        </GlobalContexto.Provider>
      );
}