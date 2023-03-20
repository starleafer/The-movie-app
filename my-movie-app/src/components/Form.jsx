import React, { useState, useEffect } from 'react'
import myStyle from './myStyle.module.css'


const Form = ({state, selectedType, setSelectedType, onChange,  errorMessage}) => {


  return (
    <>
      <form action="" className={myStyle.formSection}>
        <input type="text" value={state} className={myStyle.inputs} onChange={onChange}/>
        <select 
        value={selectedType} 
        className={myStyle.inputs} 
        onChange={(e) => setSelectedType(e.target.value)}>
          <option value="all">All</option>
          <option value="movie">Movie</option>
          <option value="series">Serie</option>
          <option value="game">Game</option>
        </select>
        <p className={myStyle.error}>{errorMessage}</p>     
      </form>
    </>
  )
}

export default Form