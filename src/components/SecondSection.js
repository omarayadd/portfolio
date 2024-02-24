import React from "react";
import img from '../images/b.png';

const SecondSection = () =>{
    return(
        <>
            <div className="secondSection-container">
                <div className="secondSection-img">
                    <img src={img} alt="Description of the image"></img>
                </div>
                <div className="secondSection-body">
                    <h2>Get In Touch</h2>
                    <input className="text" type="textbox" placeholder="First Name"/>
                    <span className="second-nav-spacer"></span>
                    <input className="text" type="textbox" placeholder="Last Name"/>
                    <br/>
                    <br/>
                    <input className="text" type="textbox" placeholder="Email"/>
                    <span className="second-nav-spacer"></span>
                    <input className="text" type="textbox" placeholder="Phone No."/>
                    <br></br>
                    <br></br>
                    <input className="long-text" type="textbox" placeholder="Message..."/>
                    <br/>
                    <br/>
                    <input className="header-button" type="button" value="Send"/>
                </div>
            </div>
        </>
    )
}

export default SecondSection