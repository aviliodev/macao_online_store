import { useState } from "react";
import initialState from '../initialState'

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCart = payload => {
        setState({
            // state es el inicitalState que contiene nuestro cart y productos
            ...state, 
            // agregamos el contenido de payload dentro del arreglo cart de nuestro initialSate (state.cart)
            cart: [...state.cart, payload],
        })
    }

    const removeFromCart = payload => {
        setState({
            ...state, 
            // eliminamos del cart el item que viene en el payload.
            // Esto se hace filtrando el cart del state, buscando todos los items cuyo id sea diferente al del payload. 
            // Y esa lista filtrada es la que toma el carte del state.
            cart: state.cart.filter(items => items.id !== payload.id),
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state, 
            buyer: [state.buyer, payload],
        })
    }

    // Devuelve todas las funciones y el estado que vamos a usar en todo nuestro SVGTextPositioningElement.
    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        state,
    };
};



export default useInitialState;