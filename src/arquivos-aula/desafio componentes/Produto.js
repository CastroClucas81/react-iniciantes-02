import React from 'react'

const Produto = ({nome, propriedades}) => {
    return (
        <div>
           <p>{nome}</p>
           <ul>
           {propriedades.map(prop => (
               <li>{prop}</li>
           ))}
           </ul> 
        </div>
    )
}

export default Produto
