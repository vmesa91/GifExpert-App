import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

const useFetchGifs = ( category ) => {
  
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    // Se ejecutar el getGifs sólo la primera vez
    useEffect( () => {
    // Esto ahora es una promesa, al sacar la funcion y devolver directamente los gifs
        getGifs( category )
        .then( (imgs) => {        
            setState({
                data: imgs,
                loading: false
            })
        })
    }, [category] )

    return state
}

export default useFetchGifs