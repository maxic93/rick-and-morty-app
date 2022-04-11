import React, { useEffect, useState } from 'react'
import "./form.css"


const Form = ({setNombrePersonaje}) => {


    const [personaje, setPersonaje] = useState("")
    const [msj, setmsj] = useState("")

    useEffect(()=> {
    },[personaje]) 

    const handleChange = e =>{
        const newPersonaje = e.target.value
        setPersonaje(newPersonaje)
    }

    const handleClick = e =>{
        e.preventDefault()
        if(!personaje.trim()){
           setmsj("Por favor introduzca un nombre")
        }else {
            setmsj("")
            setNombrePersonaje(personaje.trim())}
    }

  return (
    <form className='form'>
        <input 
        type="text" 
        placeholder='Nombre del personaje'
        name='name'
        onChange={handleChange}
        />
        <span className='span'>{msj}</span>
        <button 
        type='submit'
        onClick={handleClick}
        >Buscar</button>
    </form>
  )
}

export default Form
