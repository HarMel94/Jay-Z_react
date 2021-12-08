import React from "react";
import Slider from "react-slick";
import { useHistory } from "react-router-dom";

import "./SliderFunc.css";

import J1 from "../assets/images/J1.jpg";
import J2 from "../assets/images/J2.jpg";
import J3 from "../assets/images/J3.jpg";
import J4 from "../assets/images/J4.jpg";
import J5 from "../assets/images/J5.jpg";
import J6 from "../assets/images/J6.jpg";
import J7 from "../assets/images/J7.jpg";
import J8 from "../assets/images/J8.jpg";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function SliderFunc(){

  const history = useHistory()
  const history_02 = useHistory()

  const settings = {
    // className: "center",
    // centerMode: true,
    infinite: false,
    centerPadding: "-10px",
    slidesToShow: 4,
    speed: 500,
    dots:true
  }

  return(

      <div className="Shadow">

            <div>        
              <div className="CN"
                onClick={() => history.push("/")}> 
                  COMPANY NAME
              </div>
              <div className="CenterTxt">
                  <div className="CenterTxtDiv">
                    MAIN SIMPLE TEXT
                  </div>
                  <div>
                    second simple text
                  </div>
                </div>
            </div>

            <div onClick={() => history_02.push("/home")} className="MainX">   
                <div onClick={() => history_02.push("/home")} className="X_1"></div>
                <div onClick={() => history_02.push("/home")} className="X_2"></div>
            </div>

            <div className="To_res">
              facebook
              instagram                       
            </div>        

        <div className="MainSlider">   
                  
          <Slider 
            dotsClass="slick-dots line-indicator"
            {...settings}>

              <div>
                  <img src={J1} alt="J1"/>
                  <div className="number">01</div>
                  <div className="line"></div>
                  <div className="text">Text 01</div>
              </div>

              <div>
                  <img src={J2} alt="J2"/>
                  <div className="number">02</div>
                  <div className="line"></div>
                  <div className="text">Text 02</div>
              </div>
              
              <div>
                  <img src={J3} alt="J3"/>
                  <div className="number">03</div>
                  <div className="line"></div>
                  <div className="text">Text 03</div>
              </div>

              <div>
                  <img src={J4} alt="J4"/>
                  <div className="number">04</div>
                  <div className="line"></div>
                  <div className="text">Text 04</div>
              </div>

              <div>
                  <img src={J5} alt="J5"/>
                  <div className="number">05</div>
                  <div className="line"></div>
                  <div className="text">Text 05</div>
              </div>

              <div>
                  <img src={J6} alt="J6"/>
                  <div className="number">06</div>
                  <div className="line"></div>
                  <div className="text">Text 06</div>
              </div>

              <div>
                  <img src={J7} alt="J7"/>
                  <div className="number">07</div>
                  <div className="line"></div>
                  <div className="text">Text 07</div>
              </div>

              <div>
                  <img src={J8} alt="J8"/>
                  <div className="number">08</div>
                  <div className="line"></div>
                  <div className="text">Text 08</div>
              </div> 

          </Slider>

            <div className="Line"></div>   

        </div>

    </div>
  );
};