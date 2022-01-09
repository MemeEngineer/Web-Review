import React, { useEffect } from "react";
import MovieDisplay from "./MovieDisplay";

function MovieInfo({ movieInfoDisplay }) {
  return (
    <div>
      <div>
        <h1>{movieInfoDisplay.title}</h1>
        <div style={{
            display: "flex",
            justifyContent: "center",
            textAlign: 'center',
          }}>
        <img
          src={movieInfoDisplay.poster}
          style={{
            width: "200px",
            height: "300px",
          }}
        />
        </div>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: 'center',
          }}
        >
          Release Date: {movieInfoDisplay.date}
        </p>
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignSelf: "center",
            textAlign: 'center',
          }}
        >
          Movie Plot: {movieInfoDisplay.description}
        </p>
      </div>
    </div>
  );
}

export default MovieInfo;

