import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import GifGrid from "./components/GifGrid"


const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
    const [categories, setcategories] = useState(['One Punch'])

/*     const handleApp = () => {
        // [ 'Hola' , ...categories]
        // setcategories( (c) => c.concat('Hola') )
        setcategories( (c) => [...c, 'Hola'] )
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            < AddCategory setcategories={ setcategories }/>
            <hr/>
            {/* <button onClick={ handleApp }>Agregar</button> */}

            <ol>
               { categories.map( (category, i) => 
                // Insertar el GifGrid
                //  {return <li key={category}>{category}</li>  }        
                  (
                  < GifGrid 
                    key={ category }
                    category={ category } />
                  )        
               )}
            </ol>
        </>

    )
}

export default GifExpertApp