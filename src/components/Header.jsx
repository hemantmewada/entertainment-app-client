import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Logo, Home, Bookmark, Movies, Tv } from "../assets";

// Header Component
function Header() {
  const redColor = "#fc4747";
  const grayishColor = "#5a698f";

  const { pathname } = useLocation();
  // JSX structure for rendering Header component
  return (
    <header className="header">
      {/* Application logo */}
      <Link to="/" aria-label="Home">
        <Logo />
      </Link>
      {/* Navigation links */}
      <nav>
        <Link to="/" aria-label="Home">
          <Home color={pathname == "/" ? redColor : grayishColor} />
        </Link>
        <Link to="/movies" aria-label="Movies">
          <Movies color={pathname == "/movies" ? redColor : grayishColor} />
        </Link>
        <Link to="/tv" aria-label="Tv">
          <Tv color={pathname == "/tv" ? redColor : grayishColor} />
        </Link>
        <Link to="/bookmarks" aria-label="Bookmarks">
          <Bookmark
            color={pathname == "/bookmarks" ? redColor : grayishColor}
          />
        </Link>
      </nav>
      {/* User section - Display different content based on user authentication */}
      <div className="header__user" style={{ display: "none" }}>
        {/* Logout button for authenticated users */}
        <button className="btn" title="User">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt="User"
          />
        </button>

        {/* User information and logout option */}
        <div className="header__user__tag">
          <p>hemant</p>
          <p>Logout</p>
        </div>
      </div>
      <div className="header__user">
        {/* Link to login page for non-authenticated users */}
        <Link to="/login" aria-label="Login">
          <img src="/image-avatar.png" alt="" />
        </Link>

        {/* Login prompt for non-authenticated users */}
        <div className="header__user__tag">
          <p>Login</p>
        </div>
      </div>
    </header>
  );
}

// Export the Header component
export default Header;
