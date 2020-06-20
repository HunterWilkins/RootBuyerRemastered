import React, {Component} from "react";
import "./style.css";
import {Link} from "react-router-dom"; 
import About from "../../components/About/index.js";
import Harvesting from "../../components/Harvesting/index.js";


class Home extends Component {

    state = {
        page: window.location.pathname.split("/")[1]
    }

    componentDidMount = () => {
    }

    route = (destination) => {
        this.setState({
            page: destination
        });
    }

    render() {
        let pages = ["Home", "Selling", "Harvesting", "Buying", "Contact"];
        
        let currentPage;

        switch(this.state.page) {
            case "":
                currentPage = <About />;
                break;
            case "home":
                currentPage = <About />;
                break;
            case "selling":
                currentPage = <About />;
                break;
            case "harvesting":
                currentPage = <Harvesting />;
                break;
            case "buying":
                currentPage = <About />;
                break;
            case "contact":
                currentPage = <About />;
                break;
        }

        return (
            <div id = "content">
                <header>
                    <h1>Root Buyer</h1>
                    <p>Buying Roots and Herbs for over 40 Years</p>
                </header>

                <hr />
                
                <nav>
                    {pages.map(tab => {
                        if (tab === "Contact") {
                            return(
                                <Link key = {"Home" + tab} to = {"/" + tab.toLowerCase()} id = "contact" onClick = {() => {this.route(tab.toLowerCase())}} className = "tab">
                                    {tab}
                                </Link>
                            )
                        }
                        return(
                            <Link key = {"Home" + tab} to = {"/" + tab.toLowerCase()} className = "tab" onClick = {() => {this.route(tab.toLowerCase())}}>
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