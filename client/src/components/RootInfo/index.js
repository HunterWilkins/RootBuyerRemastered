import React, {Component} from "react";
import "./style.css";
import axios from "axios";

class RootInfo extends Component {

    state = {
    }

    componentDidMount = () => {
        axios.get("/api/roots/" + window.location.pathname.split("/")[2]).then((response) => {
            console.log(response.data);
            this.setState(response.data);
        });

        console.log(this.state);
    }

    render() {
       
        return (
            <div id = "rootinfo">
                <article>
                    <h1>{this.state.name}</h1>
                    <h3><em>{this.state.family}</em></h3>
                    <hr className = "brown-hr"/>
                    <p>{this.state.desc}</p>
                    <br></br> <br></br>
                    <h2>Harvesting</h2>  
                    <br></br>
                    <p>{this.state.harvesting}</p>
                </article>

                <aside>
                    <figure>
                        <img src = {this.state.imageLink} alt = {this.state.name}/>
                    </figure>
                    <br></br>
                    <p className = "center-x">Alternative Names</p>
                    <div className = "center-x">
                        
                        {
                        this.state.altNames ?     
                        this.state.altNames.map(item => {
                            return(
                                <span>{item}, </span>
                            )
                        })
                        :
                        null
                        }        
                    </div>
                    <br></br>
                    <h2>Planting</h2>
                    <br></br>
                    <p>{this.state.planting}</p>
                </aside>
            </div>
        )
    }
}

export default RootInfo;