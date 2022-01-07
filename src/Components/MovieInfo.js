import React from "react";
import MovieDisplay from "./MovieDisplay"

function MovieInfo({movies, info, movieInfoDisplay}) {

return(
<div>
    <img src={info.title}/>
</div>
);

}

export default MovieInfo;

//Need to work on Dynamic Routing section