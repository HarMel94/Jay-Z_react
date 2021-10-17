import React from "react";
import { useHistory } from "react-router-dom";

import "./Home.css";

import J1 from "../assets/images/J1.jpg";
import J2 from "../assets/images/J2.jpg";
import J3 from "../assets/images/J3.jpg";
import MapPng from "../assets/images/Map.png";


export default function Home(){

    const history = useHistory()
    const history_02 = useHistory()

    return(

        <div>

            <div className="Header">
               <div onClick={() => history.push("/")}>
                   COMPANY NAME
               </div>

               <div>
                    <div>
                        MAIN SIMPLE TEXT
                    </div>
                    <div>
                        second simple text
                    </div>
               </div>

               <div>
                    <div className="Burger">
                        <div className="BurgerDiv"
                        onClick={() => history_02.push('/slider')}>
                        </div>
                    </div>

                    <div className="Resurs">
                        facebook
                        instagram                       
                    </div>
               </div>

            </div> 


            <div className="CenterImg">
                <div>
                    <img src={J1} alt="J1" />  
                    <div className="number">01</div>
                    <div className="line"></div>
                    <div className="text">Text 01</div>
                </div>  

                <div>
                    <img src={J2} alt="J2" />  
                    <div className="number">02</div>
                    <div className="line"></div>
                    <div className="text">Text 02</div>
                </div>

                <div>
                    <img src={J3} alt="J3" />  
                    <div className="number">03</div>
                    <div className="line"></div>
                    <div className="text">Text 02</div>
                </div>
            </div>

            <div className="Credits">
                <button onClick={() => history.push("/credits")}>
                    CREDITS
                </button> 
            </div> 
                      

            <div className="Map">
                <img src={MapPng} alt="MapPng"
                onClick={() => window.open("https://www.google.ru/maps/@40.1793067,44.5199722,15z")}
                />
            </div>

            <div className="Line"></div>    

        </div>
    );
};

