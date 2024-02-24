import React from "react";
import web1 from "../images/web1.png"
import { Link } from "react-router-dom";
const FirstSection = () =>{
    const openWeb=(id)=>{
        switch(id){
            case 1:window.open('https://omarayadd.github.io/Web-design/', '_blank');
                    break;
            case 2: window.open('https://omarayadd.github.io/Web-design2/', '_blank');
                    break;   
            case 3: window.open('https://omarayadd.github.io/Web-design3/', '_blank');
                    break; 
            case 4: window.open('https://omarayadd.github.io/javaScriptProject1/', '_blank');
                    break;        
            case 5: window.open('https://github.com/omarayadd/Bachelor-Project', '_blank');
                    break;                   
            default: window.open('https://www.facebook.com', '_blank');
        }
        
    }

    return(
        <>
            <div className="firstSection-container">
                <div className="row">
                    <div className="box box1">
                        <div className="box-body">
                            <p>Skills: HTML, CSS</p>
                            <a href="#" onClick={() =>openWeb(1)}>Show more..</a>
                        </div>
                    </div>
                    <div className="box box2">
                        <div className="box-body">
                            <p>Skills: HTML5, CSS3</p>
                            <a href="#" onClick={()=>openWeb(2)}>Show more..</a>
                        </div>
                    </div>
                    <div className="box box3">
                        <div className="box-body">
                            <p>Skills: Bootstrap</p>
                            <a href="#" onClick={()=>openWeb(3)}>Show more..</a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="box box4">
                        <div className="box-body">
                            <p>Skills: javaScript</p>
                            <a href="#" onClick={()=>openWeb(4)}>Show more..</a>
                        </div>
                    </div>
                    <div className="box box5">
                        <div className="box-body">
                            <p>Skills: Python, openGym</p>
                            <a href="#" onClick={()=>openWeb(5)}>Show more..</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FirstSection