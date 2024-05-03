import React from "react";

import ShowCards from "./ShowCards";

// BookmarkedShows Component
function BookmarkedShows() {
  // JSX structure for rendering BookmarkedShows component
  return (
    <section className="show-grid">
      {/* Header for BookmarkedShows */}
      <h1 className="text-5xl">Bookmarks</h1>

      {/* Display shows if the user is logged in */}

      <div className="show-grid__shows">
        {/* ShowCards component displaying bookmarked shows */}
        <ShowCards />
      </div>

      {/* Display login prompt if the user is not logged in */}
      <div className="show-grid__shows" style={{ display: "none" }}>
        <div className="account__footer">
          <p>
            {/* Login link for users without an account */}
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </section>
  );
}

// Export the BookmarkedShows component
export default BookmarkedShows;
