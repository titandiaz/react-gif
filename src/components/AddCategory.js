import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

  
  const [inputValue, setInputValue] = useState("")
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats])
      setInputValue("")
    }
  }
  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <input 
        id="inputCategory" 
        className="p-2 pl-4 rounded-md mr-3 appearance-none border focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-transparent" 
        type="text" placeholder="agregar categoría" 
        value={inputValue} 
        onChange={handleInputChange}
        />
      <button 
        className="bg-purple-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-purple-800" 
        type="submit">Agregar</button>
    </form>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}