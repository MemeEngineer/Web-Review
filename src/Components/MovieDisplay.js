import React, { useState } from "react";
//import { Route, Switch } from "react-router-dom";
//import * as data from '../db.json';
import { NavLink } from "react-router-dom";
import MovieInfo from "./MovieInfo";

function MovieDisplay({movies, search, uploadMovie, movieInfoDisplay }) {

const [formData, setFormData]= useState({ 

  id: "",
  title: "",
  poster:"",
  date: 0,
  likes: 0,
  actors: [],
});

const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value});
}

const onSubmit = (e) => {
  e.preventDefault();
uploadMovie(formData);
e.target.reset();
}

function handleClick(movie){
  movieInfoDisplay(movie);
  //console.log(movie)
}

 //filters movies
 const filter = movies.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-evenly',alignItems:'center'}}>
      {filter.map((movie)=> 
      <div key={movie.id} onClick={handleClick} name="id">
      <h3 value={movie.title} name="title" onClick={handleClick}>{movie.title}</h3>
      <NavLink
        to="/movieInfo"
        exact
      >
        <img src={movie.poster} style={{width: "200px", height: "300px"}} name="poster" value={movie.poster}  onClick={()=>{handleClick(movie)}}/>
      </NavLink>
      
      </div>
      )}
      </div>
      
      <div>
      <div style={{display:'flex', justifyContent:'center',alignItems:'center'}}>
      <form style={{display:'flex'}} onSubmit={onSubmit}>
        <div >
          <div>
            <label>Imdb Movie ID</label>
          <input type="text" name="id" placeholder="Movie id" onChange={handleChange}/>
          </div>
          <div>
            <label>Movie Title </label>
          <input type="text" name="title" placeholder="Title" onChange={handleChange}/>
          </div>
          <div>
          <label>Movie Poster URL </label>
          <input type="url" name="poster" placeholder="Poster image" onChange={handleChange}/>
          </div>
          <div>
          <label>Release Date </label>
          <input type="text" name="date" placeholder="Release date" onChange={handleChange}/>
          </div>
          <div>
          <label>Review Likes </label>
          <input type="number" name="likes" placeholder="likes" onChange={handleChange}/>
          </div>
          <div>
          <label>Actors </label>
          <input type="text" name="actors" placeholder="actor1 , actor2, ..." onChange={handleChange}/>
          </div>
        </div>
        <button  className="button" type="submit">
          Add Movie
        </button>
      </form>
    </div>  
      </div>
    </div>
   
  );
}

export default MovieDisplay;
