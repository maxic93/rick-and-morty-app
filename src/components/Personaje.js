import React from 'react'
import './personaje.css'

const Personaje = ({personaje}) => {
    console.log(personaje)
  return (
    <div className='card_personaje'>
      <h3>{personaje.name}</h3>
      <img src={personaje.image}/>
    </div>
  )
}

export default Personaje
