import React from 'react';

const InputSearch = ( { value, onChange} ) => {
  function handleChange(event) {
    onChange(event.target.value);
  }
  return(
    <input type="search" value={value} onChange={handleChange}></input>
  )
}

export default InputSearch;