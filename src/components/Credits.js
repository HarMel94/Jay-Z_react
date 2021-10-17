import React from "react";
import "./Credits.css"
import { useHistory } from "react-router-dom";

export default function Credits(){

const history = useHistory()
    
    return(
            <div>

                <div className="Header" 
                onClick={() => history.push("/")}>
                    <div>
                        COMPANY NAME
                    </div>               
                    <div>
                        <div className="To_Resurs">
                            facebook
                            instagram
                        </div>
                    </div>
                </div> 

                <div className="X" onClick={() => history.push("/home")}>
                            <div className="X_1"></div>
                            <div className="X_2"></div>
                </div>

                <div className="CreditsWord">
                    Credits
                </div>

                <div className="CompanyName">
                    Company Name
                </div>

                <div className="Closer"> 
                    Closing credits
                </div>

                <div className="Line"></div>    

            </div>        
    );
};