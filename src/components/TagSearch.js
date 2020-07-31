import React from "react";
import Styles from "../styles/SearchStyles";

const TagsSearch = ({ query, handleTags }) => {
  return (
    <Styles>
      <input
        type="text"
        placeholder="Search Tags ..."
        id="name-input"
        value={query}
        onChange={handleTags}
      />
    </Styles>
  );
};

export default TagsSearch;
