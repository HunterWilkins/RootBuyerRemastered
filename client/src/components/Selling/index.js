import React from "react";
import "./style.css";
import {Link} from "react-router-dom";
import RootInfo from "../RootInfo/index.js";
import Home from "../../pages/Home/index.js";

function Selling(props) {

    let roots = [
        "Barberry Root",
    ]

    return(
        <div id = "selling">

            <h2>What We Buy</h2>
            <br></br>

            <ul>
                {roots.map(item => {
                    return(
                        <li><Link to = {"/rootinformation/" + item.toLowerCase().replace(/ /g, "")} onClick = {() => {props.routeFunction("rootinformation")}}>{item}</Link></li>
                    )
                })}
            </ul>
            
                      
        </div>
    )
}

export default Selling;