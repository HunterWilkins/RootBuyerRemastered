import React from "react";
import "./style.css";
var path = require("path");

function About(props) {
    return(
        <div id = "about">

            <h2>Home</h2>
            <br></br>
            <p>
                To ensure the presence of marketable botanicals for future generations, 
                we encourage all harvesters to be familiar with their local, state, and federal guidelines on harvesting. Always practice conservation!
            </p>
            <br></br>
            <p>
                For over 45 years we have been buying herbs and roots from diggers and cultivators. To help you with questions about cultivating, finding, and harvesting herbs and roots, we have included many categories of interesting facts.                
            </p>
            <br></br>
            <figure>
                <img src = "/Ginseng.jpg" alt = "Ginseng"/>
                <p>Ginseng is our most popular product!</p>
                <p className = "half-opacity">(Image courtesy of Gary Kauffman)</p>

            </figure>
            <br></br>
            <p>
                Please be responsible: All roots, herbs, leaves and barks must be legally obtained. Please check your state's laws prior to removing any plant or plant part from its native territory.
            </p>

            <p>
           
            </p>
                        
        </div>
    )
}

export default About;