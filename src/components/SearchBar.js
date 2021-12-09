import React from "react";
import { useGlobalContext } from "../context";
const SearchBar = () => {
  const { handleSubmit } = useGlobalContext();
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search..." className="search-bar" />
      <input type="submit" value="Go" className="btn-submit" />
    </form>
  );
};

export default SearchBar;
