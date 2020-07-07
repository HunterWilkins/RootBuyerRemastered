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
        let demandPercent;
        let sliderStyle;

        switch(this.state.demand) {
            case 1:
                demandPercent = "25%";
                sliderStyle = {
                    background: `linear-gradient(to right, red 0%, red ${demandPercent}, var(--mainBackgroundDark) ${demandPercent}, var(--mainBackgroundDark) 100%)`            
                }
                break;
            case 2:
                demandPercent = "50%";
                sliderStyle = {
                    background: `linear-gradient(to right, green 0%, green ${demandPercent}, var(--mainBackgroundDark) ${demandPercent}, var(--mainBackgroundDark) 100%)`            
                }
                break;
            case 3: 
                demandPercent = "100%";
                
                sliderStyle = {
                    background: `linear-gradient(to right, green 0%, green ${demandPercent}, var(--mainBackgroundDark) ${demandPercent}, var(--mainBackgroundDark) 100%)`            
                }
                break;
        }
        // let demandPercent = this.state.demand !== 2 ? (this.state.demand / 3) * 100 + "%" : "50%";
        let demandDictionary = ["Poor", "Normal", "Great"];

        console.log(demandPercent);
        if (this.state.name) {
            return (
                <div id = "rootinfo">
                    <article>
                        <h1><strong>{this.state.name}</strong></h1>
                        <h3><em>{this.state.family}</em></h3>
                        <p>Demand: {demandDictionary[(this.state.demand-1)]}</p>

                        {
                            this.state.demand ?                            
                            <div className = "demand-slider" style = {sliderStyle}>
                                
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