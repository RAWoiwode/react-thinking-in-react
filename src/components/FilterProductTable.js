import React from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterProductTable = ({ products }) => {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
};

export default FilterProductTable;
