import React from "react";
//import * as data from '../db.json';

function Actors({ movies }) {
  return (
    <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
      <h1> Actors Page</h1>
      {movies.map((movie) => (
        <div key={movie.id} style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
          <h2 key={movie.id}>Title: {movie.title}</h2>

          <ul style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'left'}}>
            {movie.actors.map((actor) => (
              <li key={actor}>{actor}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
