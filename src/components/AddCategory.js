import React, { useState } from "react"
import PropTypes from 'prop-types';

// props => desestructurar los argumentos { lo que sea }
//export const AddCategory = ( props ) => {

export const AddCategory = ({setcategories}) => {

    // Si dejamos useState() el valor es undefined, y se queja
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        // console.log(e.target.value)
        setInputValue (e.target.value)
    }

    const handleSubmit = ( e ) => {
        // No refrescar el navegador
        e.preventDefault()

        // Controlar que busque con un mín de 2 caracteres
        if ( inputValue.trim().length > 2 ) {

            // console.log(setcategories)
            setcategories( (c) => [ inputValue, ...c] )
            // Inicializamos el valor a 0 del buscador
            setInputValue('')

        }

    } 

    return (

        // Si existe form , o algo que agrupe, no es necesario los fragment <>
       
        <form onSubmit={ handleSubmit }>

            <h1> { inputValue} </h1>
            <input
                type="text"
                value= { inputValue }
                onChange= { handleInputChange }
            />

        </form>
      
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}