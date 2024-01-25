import React from 'react';
import './SearchBar.css';
function SearchBar({ onSearch }){
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="Search City..." onChange={handleChange} />
    </div>
  );
};

export default SearchBar;