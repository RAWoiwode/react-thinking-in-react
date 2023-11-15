import React from "react";

const SearchBar = ({ filter, inStock, onFilterChange, onInStockChange }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          value={inStock}
          onChange={(e) => onInStockChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
