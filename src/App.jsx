import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import FilteredShows from "./components/FilteredShows";
import PageNotFound from "./components/PageNotFound";
import BookmarkedShows from "./components/BookmarkedShows";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Route for Movies */}
          <Route
            path="/movies"
            element={
              <FilteredShows filterType={"Movie"} pageTitle={"Movies"} />
            }
          />
          {/* Route for TV Series */}
          <Route
            path="/tv"
            element={
              <FilteredShows filterType={"TV Series"} pageTitle={"Tv"} />
            }
          />
          {/* Route for Bookmarked Shows */}
          <Route path="/bookmarks" element={<BookmarkedShows />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* detail page */}
          <Route path="/:type/:id" element={<Detail />} />
          {/* Route for Page Not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
