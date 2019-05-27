import React from "react";
import "./index.css";

function Banner(props){
    
    return (
        <div className="heading">
            <h1>
            <span className="shopper">s</span> {props.title}
            </h1>
            
            <a href="#" className="visibility-cart transition is-open">X</a>    
        </div>
    );
}

export default Banner;