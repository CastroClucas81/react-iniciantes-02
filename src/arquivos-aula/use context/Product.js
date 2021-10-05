import React from 'react'
import {GlobalContexto} from './GlobalContexto';

const Product = () => {
    //recebendo o value definido no userContext em app
    //const dados = React.useContext(Contexto);
    const global = React.useContext(GlobalContexto);
    console.log(global.contar)

    function handleClick() {
      global.setContar((contar) => contar + 1);
      global.teste();
    }

    return (
        <div>
            <button onClick={handleClick}>clickar</button>
        </div>
    )
}

export default Product
