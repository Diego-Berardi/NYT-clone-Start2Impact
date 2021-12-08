import React, { useRef } from "react";
import { useGlobalContext } from "../context";
const SearchBar = () => {
  const { handleSubmit, refContainer } = useGlobalContext();
  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        ref={refContainer}
        type="text"
        placeholder="Search..."
        className="search-bar"
      />
      <input type="submit" value="Go" className="btn-submit" />
    </form>
  );
};

export default SearchBar;
