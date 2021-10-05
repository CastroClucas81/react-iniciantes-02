import React from 'react'

const Produto = () => {
    //toda a vez q o produto é executado, o evento era recriado
    React.useEffect(() => {
        function handleScroll(e){
            console.log(e);
        }

        window.addEventListener('scroll', handleScroll);

        //essa funcao só ocorre quando o componente some da tela
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <div style={{height: '200vh'}}>
         Meu produto
        </div>
    )
}

export default Produto
