import React, { useEffect, useState } from 'react'
import Personaje from './Personaje'
import './personajes.css'

const Personajes = ({nombrePersonaje}) => {
   

    useEffect(()=> {
        consumirApi(nombrePersonaje)
    },[nombrePersonaje])

    const [personajes, setPersonajes] = useState([])
    console.log(personajes)

    const consumirApi = async (nombre)=> {
        try {
            const res = await  fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`)
            const data = await res.json()
            setPersonajes(data.results)
            
        } catch (error) {
            console.log("error")
        }
    }
 
  return (
    <div className='card_container'>
      {personajes.map(personaje=> {
        return <Personaje personaje={personaje} key={personaje.id}/>
      }
      )}
    </div>
  )
}

export default Personajes
