import React, { useState, useEffect } from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {

  const {data, loading} = useFetchGifs(category)

  // const [images, setImages] = useState([])
//   getGifs()  

  return (
    <>
    
    <h3 className='animate__animated animate__fadeIn'> {category} </h3>
    {  loading && <p className='animate__animated animate__flash'>Loading....</p>}

    <div className='card-grid'>
        
      { 
        data.map(img => ( 
      // Desestructuramos image : {id, title} = { images.map( (image, i) =>  
            <GifGridItem 
              key={img.id}
              { ...img}
            />
          )        
        )
      }
    </div>
    </>

  )
}

export default GifGrid