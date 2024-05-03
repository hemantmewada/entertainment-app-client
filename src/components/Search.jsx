import React from "react";

import { SearchButton } from "../assets";

// Search Component
function Search() {
  // JSX structure for rendering Search component
  return (
    <form className="search">
      {/* Search button */}
      <button className="btn__search" title="Search">
        <SearchButton />
      </button>

      {/* Input field for entering search term */}
      <input
        className="input input__search heading-medium"
        type="text"
        placeholder="Search for movies or TV series"
      ></input>
    </form>
  );
}

// Export the Search component
export default Search;
