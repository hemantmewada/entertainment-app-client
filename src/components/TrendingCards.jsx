import React from "react";

import {
  Movies as Movie,
  Tv,
  Bookmark as BookmarkEmpty,
  Play,
} from "../assets";
import { useNavigate } from "react-router-dom";

// TrendingCards Component
function TrendingCards() {
  const navigate = useNavigate();
  const detail = () => {
    navigate("/tv/123");
  };
  // Mapping over trending shows to render individual trending cards
  const renderedCards = [...Array(10)].map((_, index) => {
    const imgSrc =
      "https://cdn.pixabay.com/photo/2023/08/21/03/34/droplets-8203505_640.jpg";

    return (
      <div className="card card--trending" key={index}>
        {/* Display full bookmark icon for bookmarked trending shows */}
        {/* <button className="btn__bookmark btn__bookmark--trending">
          <BookmarkFull />
        </button> */}

        {/* Display empty bookmark icon for non-bookmarked trending shows */}
        <button className="btn__bookmark btn__bookmark--trending">
          <BookmarkEmpty />
        </button>

        {/* Play button for the trending show */}
        <button className="btn btn--play">
          <span className="btn--play__icon btn--play__icon--trending">
            <Play />
            <h4>Play</h4>
          </span>

          {/* Information section for the trending show */}
          <span className="card--trending__info">
            <p>
              2018
              <span className="card__dot"></span>
              {index < 4 ? <Movie /> : <Tv />}
              {index < 4 ? "Series" : "Movie"}
              <span className="card__dot"></span>
              {index < 4 ? "5" : "3"}
            </p>
            <h3 className="cursor-pointer text-3xl" onClick={detail}>
              Beyond Earch
            </h3>
          </span>

          {/* Image for the trending show */}
          <img
            src="https://cdn.pixabay.com/photo/2023/08/18/15/02/cat-8198720_640.jpg"
            alt="title of the movie/series"
          />
        </button>
      </div>
    );
  });

  // JSX structure for rendering TrendingCards component
  return <>{renderedCards}</>;
}

// Export the TrendingCards component
export default TrendingCards;
