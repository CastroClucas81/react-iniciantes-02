import React from 'react';

const useLocalStorage = (key, inicial) => {
    const [state, setState] = React.useState( () => {
        //pegando o item cadastrado no localstorage
        const local = window.localStorage.getItem(key);

        //verificando se a key já existe
        return local ? local : inicial;
    });

    //toda vez q o estado modificar, salvaremos no localstorage
    React.useEffect(() => {
        window.localStorage.setItem(key, state);
    }, [state, key]);

    return [state, setState];
}

export default useLocalStorage;