import React from 'react'
import myStyle from './myStyle.module.css'

const Form = ({ state, selectedType, setSelectedType, onChange, totalResults, page, handleNextPage, handlePrevPage, handlePrevPageEnabled, errorMessage}) => {

  if (state === "" || errorMessage) {
    page = 0;
    totalResults = 0;
  }

  return (
    <form action="" className={myStyle.formSection}>
      <input 
        type="text"
        value={state} 
        className={myStyle.inputs} 
        onChange={onChange}
        />
      <select 
      value={selectedType} 
      className={myStyle.inputs} 
      onChange={(e) => setSelectedType(e.target.value)}
      >
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Serie</option>
        <option value="game">Game</option>
      </select>
      <p className={myStyle.error}>{errorMessage}</p>     
      <div className={myStyle.pageNav}>
        <button 
          className={myStyle.pageButtons} 
          onClick={handlePrevPageEnabled ? (e) => handlePrevPage(e) : null}
          >
            &lt;Previous Page
        </button>
        <h4>
          Page {page} of {Math.floor(totalResults / 10)}
        </h4>
        <button 
          className={myStyle.pageButtons} 
          id={myStyle.next}
          onClick={handleNextPage}
          >
            Next Page &gt;
        </button>
      </div>
    </form>
  );
};

export default Form