import React from "react";
import "./style.css";
import axios from "axios";
import {Link} from "react-router-dom";
import RootInfo from "../RootInfo/index.js";
import Home from "../../pages/Home/index.js";

function Plants(props) {

    return(
        <div id = "plants">

            <h2><strong>What We Buy</strong></h2>
            <br></br>

            <ul>
                {
                props.roots.length > 0 ? 
                props.roots.map(item => {
                    return(
                        <li><Link to = {"/root/" + item.id} onClick = {() => {props.routeFunction("root")}}>{item.name}</Link></li>
                    )
                })
                :
                null
                }
            </ul>
            
                      
        </div>
    )
}

export default Plants;