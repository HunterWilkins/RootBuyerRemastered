import React, {Component} from "react";
import "./style.css";
import axios from "axios";

class RootInfo extends Component {

    state = {
    }

    componentDidMount = () => {
        axios.get("/api/roots/" + window.location.pathname.split("/")[2]).then((response) => {
            this.setState(response.data);   
        }).catch((err) => {
            console.log(err);
        });
    }

    render() {
               
        let demandPercent = (this.state.demand / 2) * 100 + "%";
        let demandDictionary = ["Poor", "Normal", "Great"];
 
        console.log(demandPercent);
        if (this.state.name) {
            return (
                <div id = "rootinfo">
                    <article>
                        <h1><strong>{this.state.name}</strong></h1>
                        <h3><em>{this.state.family}</em></h3>
                        <p>Demand: {demandDictionary[this.state.demand]}</p>

                        {
                            this.state.demand ?                            
                            <div className = "demand-slider" style = {{
                                background: `linear-gradient(to right, var(--brown) 0%, var(--brown) ${demandPercent}, var(--mainBackgroundDark) ${demandPercent}, var(--mainBackgroundDark) 100%)`
                            }}>
                                
                            </div>
                            :
                            null
                            }
                        <hr className = "brown-hr"/>
                        <p>{this.state.desc}</p>
                        <br></br> <br></br>
                        <h2>Harvesting</h2>  
                        <br></br>
                        <p>{this.state.harvesting}</p>
                    </article>
                    {/* <br /><br /> */}
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
                        <br /> <br />
                        <h2>References</h2>
                        <br />
                        <p><em>{this.state.references}</em></p>
                    </aside>
                </div>
            )
        }

        else {
            return(
                <div id = "rootinfo">
                    <h1 className = "center-x">Plant Not Found</h1>
                </div>
            )
        }
       
    }
}

export default RootInfo;