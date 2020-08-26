import React, { useState } from 'react';
import Proptypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories(ctgs => [inputValue, ...ctgs]);
    setInputValue("")
  };

    return (
        <form onSubmit={handleSubmit}>
          <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              required
          /> 
        </form>
    )
}

AddCategory.propTypes = {
  setCategories: Proptypes.func.isRequired
 }