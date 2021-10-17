import React from "react";
import {useHistory} from "react-router-dom";

import "./Video.css";

import JAYZ from "../assets/video/JAY-Z.mp4";

export default function Video() {

  const history = useHistory()

  return(

    <div>

      <video className="BackVideo" autoPlay loop controls
          style={{
          position:"absolute",
          width:"100%",
          left:"50%",
          top:"50%",
          height:"100%",
          objectFit:"cover",
          transform:"translate(-50%, -50%)",
          // zIndex:"-1"
          }}>
        <source src={JAYZ} type="video/mp4"/>
      </video>

      <div className="footer_two">
        Here should be some short info aboute product
      </div> 

      <div className="SkipButton_two"> 
        <button onClick={(e) => history.push("/home")}>
          SKIP
        </button> 
      </div>  

    </div>
  );
};