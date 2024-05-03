import React from "react";
import { useParams } from "react-router-dom";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";
import { BiLogoImdb } from "react-icons/bi";

const Detail = () => {
  const { type, id } = useParams();
  console.log(type, id);
  const genres = [
    "Action",
    "Animation",
    "Comedy",
    "Crime",
    "Fantasy",
    "Historical",
    "Horror",
  ];
  const casts = [
    "Cillian Murphy",
    "J. Robert Oppenheimer",
    "Emily Blunt",
    "Emily Blunt",
    "Kitty Oppenheimer",
    "Matt Damon",
    "Matt Damon",
    "Leslie Groves",
    "Robert Downey Jr.",
    "Robert Downey Jr.",
    "Lewis Strauss",
    "Gregory Jbara",
    "Chairman Magnuson",
    "Ted King",
    "Steven Houska",
    "Senator Scott",
  ];

  const gerneCss = {
    marginRight: "10px",
    wordBreak: "normal",
    overflowWrap: "break-word",
    padding: "5px 10px",
    display: "inline-block",
    marginTop: "10px",
    borderRadius: "10px",
    border: "1px solid white",
    backgroundColor: "white",
    color: "black",
    fontWeight: "500",
  };
  const castCss = {
    marginRight: "10px",
    wordBreak: "normal",
    overflowWrap: "break-word",
    padding: "5px 10px",
    display: "inline-block",
    marginTop: "10px",
    borderRadius: "10px",
    border: "1px solid white",
    backgroundColor: "transparent",
    fontWeight: "500",
  };
  return (
    <div className="grid grid-cols-3 gap-10 p-4">
      <div className="col-span-3 md:col-span-1 text-center">
        <img className="w-full rounded-3xl" src="/movie_image.jpg" alt="" />
      </div>
      <div className="col-span-3 md:col-span-2">
        <h1 className="text-6xl">Law & Order: Special Victims Unit</h1>
        <p className="py-10 text-3xl text-gray-500">
          This series follows the Special Victims Unit, a specially trained
          squad of detectives in the New York City Police Department that
          investigate sexually related crimes.
        </p>
        <h2 className="text-3xl font-bold flex flex-row gap-10">
          <span className="text-6xl">4.5</span>{" "}
          <span className="flex flex-row gap-3">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </span>
        </h2>
        <div className="grid grid-cols-4 py-10">
          <div className="col-span-2 md:col-span-1">
            <p className="mb-4 text-gray-500 text-3xl font-bold">Length</p>
            <p className="mb-4 text-3xl font-medium">88 min.</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="mb-4 text-gray-500 text-3xl font-bold">Language</p>
            <p className="mb-4 text-3xl font-medium">English</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="mb-4 text-gray-500 text-3xl font-bold">Year</p>
            <p className="mb-4 text-3xl font-medium">2023</p>
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="mb-4 text-gray-500 text-3xl font-bold">Status</p>
            <p className="mb-4 text-3xl font-medium">N/A</p>
          </div>
        </div>
        <h2 className="text-3xl">Gerne</h2>
        <div>
          {genres.map((gerne) => (
            <div style={gerneCss}>{gerne}</div>
          ))}
        </div>
        <h2 className="text-3xl mt-10">Synopsis</h2>
        <p className="pt-3 text-3xl">
          This series follows the Special Victims Unit, a specially trained
          squad of detectives in the New York City Police Department that
          investigate sexually related crimes.
        </p>
        <h2 className="text-3xl mt-10">Casts</h2>
        <div>
          {casts.map((cast) => (
            <div style={castCss}>{cast}</div>
          ))}
        </div>
        <div className="flex flex-row">
          <div className="pr-10 py-10">
            <button className="bg-[#5a698f] rounded-xl flex flex-row gap-10 px-10 py-5 text-3xl items-center font-medium">
              Website <LuLink />
            </button>
          </div>
          <div className="pr-10 py-10">
            <button className="bg-[#5a698f] rounded-xl flex flex-row gap-10 px-10 py-5 text-3xl items-center font-medium">
              IMDB <BiLogoImdb />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
