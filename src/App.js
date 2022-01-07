import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Actors from "./Components/Actors";
import MovieDisplay from "./Components/MovieDisplay";
import SearchBar from "./Components/SearchBar";
import MovieInfo from "./Components/MovieInfo";

function App() {
  const [info, setInfo] = useState("");
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  //Fetch Data from API or db.json file
  const getMovies = () => {
    fetch("http://localhost:8005/Movies")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  };

  useEffect(() => {
    getMovies();
  }, []);

  //Adding new movie from Form
  const uploadMovie = (formData) => {
    formData.actors = formData.actors.split(",");

    fetch("http://localhost:8005/Movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newMovie) => setMovies([...movies, newMovie]));
  };

  const movieInfoDisplay = (movie) => {
    setInfo(movie);
    console.log(movie);
  };

  return (
    <div>
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/movieDisplay">
          <SearchBar setSearch={setSearch} />
          <MovieDisplay
            movies={movies}
            search={search}
            uploadMovie={uploadMovie}
            movieInfoDisplay={movieInfoDisplay}
          />
        </Route>

        <Route exact path="/movieInfo">
          <MovieInfo movies={movies} movieInfoDisplay={movieInfoDisplay} info={info}/>
        </Route>

        <Route exact path="/actors">
          <Actors movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
