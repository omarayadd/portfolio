import React from "react";

function Connect (){
    return(
        <>
            <div className="connect-container">
                <div className="connect-body">
                    <p>See My Projects at Once & Leave Here Your E-mail Address</p>
                </div>
                <div className="connect-connect">
                    <input className="connect-text" type="text" placeholder="Enter Your Email"></input>
                    <input className="connect-btn" type="button" value="Submit"></input>
                </div>
            </div>
        </>
    )
}

export default Connect;