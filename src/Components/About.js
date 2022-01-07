import React from "react";
//import { Link } from "react-router-dom";
import {FaGithub} from "react-icons/fa";
import {IconContext} from "react-icons"


function About() {
 
  return (
    <IconContext.Provider value={{color: "black", size: "3em"}}>
    <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', textAlign: 'center'}}>
      <div>
        <h1>About US</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
      <img  src={"https://c.tenor.com/rQ5vMKi853MAAAAd/you-know-im-something-of-a-scientist.gif"} alt="Bulley Maguire"
      style={{backgroundRepeat:"no-repeat",backgroundSize:"contain", height:"50%", width:"50%"}}
      />
        </div>
      </div>
      <div>
        <p>Johnny Wu</p>
        <a
          href={"https://github.com/MemeEngineer"}
          target="_blank"
          title="MemeEngineer"
        >
          {" "}
          <FaGithub/>
        </a>
        <p>
          Grew up with Tobey Maguire as the original Spider-man and decided to
          make a web application dedicated to the superhero from Queens
          #Web-dev #TeamTobey.
        </p>
      </div>
      <br></br>

      <div>
        <p> Pedro Ramos</p>

        <a href={"https://github.com/peraba"} target="_blank" title="Peraba">
          {" "}
          <FaGithub/>
        </a>

        <p>
          A little about me is I like spider man and like to learn new things
          even if there hard like coding.
        </p>
      </div>
      <br></br>
      <div>
        <p> Chris Wiker</p>

        <a href={"https://github.com/cwiker"} target="_blank" title="cwiker">
          {" "}
          <FaGithub/>
        </a>

        <p>
          I also like Spiderman and Willem Dafoe plays the best villain in all
          the MCU. I also enjoy a variety of outdoor activities like kayaking,
          running, skiing, and disc golf.
        </p>
      </div>
    </div>
    </IconContext.Provider>
  );
}

export default About;
