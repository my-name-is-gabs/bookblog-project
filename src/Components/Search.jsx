import React from "react";

const Search = () => {
  return (
    <div className="search-box">
      <button className="search-btn">
        <i className="bx bx-search"></i>
      </button>

      <input type="text" class="search-input" placeholder="Search..." />
    </div>
  );
};

export default Search;
