import React from "react";
import {useHistory} from "react-router-dom";

import "./Main.css";

import JAYZ from "../assets/video/JAY-Z.mp4";


export default function Main() {

  const history = useHistory()

  return(

    <div className="App">

      <video className="BackVideo" autoPlay loop muted
          style={{
          position:"absolute",
          width:"100%",
          left:"50%",
          top:"50%",
          height:"100%",
          objectFit:"cover",
          transform:"translate(-50%, -50%)",
          zIndex:"-1"}}>

        <source src={JAYZ} type="video/mp4"/>

      </video>

        <div className="MainText">
          Here Is Simple Text
        </div>

        <div className="SecondText">
          here is second simple text
        </div>

        <div className="CenterButton">
          <button onClick={() => history.push("/video")}>
          <i className="arrow right"></i>
          </button>
        </div>

        <div className="footer">
          Here should be some short info aboute product
        </div>       

        <div className="SkipButton"> 
          <button onClick={(e) => history.push("/home")}>
            SKIP
          </button> 
        </div>  
        
    </div>
  );
};

