import React from "react";
import Styles from "../styles/SearchStyles";

const Search = ({ query, handleChange }) => {
  return (
    <Styles>
      <input
        type="text"
        placeholder="Search ..."
        id="name-input"
        value={query}
        onChange={handleChange}
      />
    </Styles>
  );
};

export default Search;
