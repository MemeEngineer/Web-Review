import React from "react";
//import * as data from '../db.json';
import WebReview from "./Web-Review.png"


function Home() {

  return (
    <div>
      <img src={WebReview} style={{ backgroundRepeat:"no-repeat",backgroundSize:"contain", height:"100%", width:"100%"}}/>
      <h1>The Web App for Movies</h1>

      <div style={{display: 'flex', justifyContent: 'center'}}>
      <img  src={"https://media1.giphy.com/media/oW4csEbiMzVjq/giphy.gif?cid=790b761193254b049dc66dafdfb15cecb8e0d5f3cdcb41d5&rid=giphy.gif&ct=g"} alt="Bulley Maguire"
      style={{backgroundRepeat:"no-repeat",backgroundSize:"contain", height:"25%", width:"25%"}}
      />
        </div>
    </div>
  );
}

export default Home;
