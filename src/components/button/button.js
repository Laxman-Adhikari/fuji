"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import Popup from '../popup/popup'

const Button = ({name,type,content}) => {

  const [click, setclick] =useState(false)
  const [state, setState]=useState(true)

const handleBold=()=>{
  setclick(true)
setState(!state)

}
const handleLight=()=>{
  alert("I am light")
}

console.log("inside btn component" + click)
 
  return (
<>
   <button className={type ? "bold": "light"} onClick={type ? handleBold : handleLight}>
    <span><h5>{name}</h5></span>
    <span>{content}</span>
    </button>
{
 
 <Popup click={click} state={state}  />


}


</>
  )

}

export default Button