import React from "react";

import {
  Movies as Movie,
  Tv,
  Bookmark as BookmarkEmpty,
  Play,
} from "../assets";

import { useNavigate } from "react-router-dom";

// ShowCards Component
function ShowCards() {
  const navigate = useNavigate();
  const detail = () => {
    navigate("/movie/123");
  };
  const renderedCards = [...Array(10)].map((_, index) => {
    return (
      <div className="card card--show" key={index}>
        {/* Display full bookmark icon for bookmarked shows */}
        {/* <button className="btn__bookmark btn__bookmark--show">
          <BookmarkFull />
        </button> */}
        {/* Display empty bookmark icon for non-bookmarked shows */}
        <button className="btn__bookmark btn__bookmark--show">
          <BookmarkEmpty />
        </button>

        {/* Play button for the show */}
        <button className="btn btn--play">
          <span className="btn--play__icon btn--play__icon--show">
            <Play />
            <h4>Play</h4>
          </span>
          <img
            src="https://cdn.pixabay.com/photo/2024/03/09/12/48/water-8622588_640.png"
            alt="title of the image"
          />
        </button>

        {/* Show information section */}
        <div className="card--show__info">
          <p className="font-small pt-4">
            2024
            <span className="card__dot"></span>
            {index < 4 ? <Movie /> : <Tv />}
            {index < 4 ? "Movie" : "Series"}
            <span className="card__dot"></span>
            {index < 4 ? "4.9" : "2.3"}
          </p>
          <h4 className="cursor-pointer text-3xl mt-3" onClick={detail}>
            The Great Lands
          </h4>
        </div>
      </div>
    );
  });

  // JSX structure for rendering ShowCards component
  return <>{renderedCards}</>;
}

// Export the ShowCards component
export default ShowCards;
