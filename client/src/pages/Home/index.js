import React, {Component} from "react";
import "./style.css";
import {Link, Route} from "react-router-dom"; 
import About from "../../components/About/index.js";
import FAQ from "../../components/FAQ/index.js";
import Plants from "../../components/Plants/index.js";
import Contact from "../../components/Contact/index.js";
import RootInfo from "../../components/RootInfo/index.js";
import Selling from "../../components/Selling/index.js";

import axios from "axios";

class Home extends Component {

    state = {
        page: window.location.pathname.split("/")[1],
        roots: []
    }

    rootInfo = {
        name: "",
        desc: ""
    }

    componentDidMount = () => {
        axios.get("/api/roots/all").then((response) => {
            this.setState({
                roots: response.data
            });
        });
    }

    route = (destination) => {
        this.setState({
            page: destination
        });
    }

    render() {
        let pages = ["Home", "Roots", "Selling", "FAQ", "Contact"];
        
        let currentPage;

        switch(this.state.page) {
            case "":
                currentPage = <About />;
                break;
            case "home":
                currentPage = <About />;
                break;
            case "roots":
                currentPage = <Plants routeFunction = {this.route} roots = {this.state.roots}/>;
                break;
            case "faq":
                currentPage = <FAQ />;
                break;
            case "contact":
                currentPage = <Contact />;
                break;

            case "selling": 
                currentPage = <Selling />;
                break;
            case "root":
                currentPage = <RootInfo rootInfo = {this.rootInfo}/>
                break;
        }

        return (
            <div id = "content">
                <header>
                    <div id = "logo">
                        <img src = "/Logo.png" />
                        <h1>Root Buyer</h1>
                    </div>
                    <p>Buying Roots and Herbs for over 40 Years</p>
                </header>

                <hr />
                
                <nav>
                    {pages.map(tab => {
                        if (tab === "Contact") {
                            return(
                                <Link key = {"Home" + tab} to = {"/" + tab.toLowerCase()} id = "contact" className = {this.state.page === tab.toLowerCase() ? "tab active" : "tab"} onClick = {() => {this.route(tab.toLowerCase())}}>
                                    {tab}
                                </Link>
                            )
                        }
                        return(
                            
                            <Link key = {"Home" + tab} to = {"/" + tab.toLowerCase()} className = {this.state.page === tab.toLowerCase() ? "tab active" : "tab" } onClick = {() => {this.route(tab.toLowerCase())}}>
                                {tab}
                            </Link>
                        )
                    })}
                </nav>

                <main>
                    {
                        currentPage
                    }
                </main>
                <footer>Mockup by Hunter Wilkins: wilkins.hunter@gmail.com | GitHub: HunterWilkins | Twitter: @tardyblom</footer>
            </div>
        )
    }
}

export default Home;