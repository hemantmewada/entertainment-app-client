import React from "react";

import ShowCards from "./ShowCards";

// FilteredShows Component
function FilteredShows({ filterType, pageTitle }) {
  // JSX structure for rendering FilteredShows component
  return (
    <section className="show-grid">
      {/* Dynamic page title based on the prop */}
      <h1 className="text-5xl">{pageTitle}</h1>

      {/* Display shows based on the specified filter type */}
      <div className="show-grid__shows">
        {/* ShowCards component displaying filtered shows */}
        <ShowCards />
      </div>
    </section>
  );
}

// Export the FilteredShows component
export default FilteredShows;
