import React from "react";

import ShowCards from "./ShowCards";

// Recommended Component
function Recommended() {
  // JSX structure for rendering Recommended component
  return (
    <section className="show-grid">
      {/* Title for the Recommended section */}
      <h1 className="text-5xl">Recommended for you</h1>

      {/* Display shows based on the data from the Redux store */}
      <div className="show-grid__shows">
        {/* ShowCards component displaying recommended shows */}
        <ShowCards />
      </div>
    </section>
  );
}

// Export the Recommended component
export default Recommended;
