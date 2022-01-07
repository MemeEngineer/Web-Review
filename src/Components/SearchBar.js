import React from "react";

function SearchBar({setSearch}) {
  return (
    <div className="search" style= {{display: 'flex', justifyContent: 'center'}}>
      
      <input
      type= "text"
      placeholder= "search..." 
       onChange={(e)=> setSearch(e.target.value)}
       />
    </div>
  );
}

export default SearchBar;