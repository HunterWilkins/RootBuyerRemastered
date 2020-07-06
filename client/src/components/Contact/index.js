import React from "react";
import "./style.css";

function Contact(props) {
    return(
        <div id = "contact">
            <section>
                <h2>Contact Us!</h2>
                <br></br>
                <p>RootBuyer</p>
                <br />
                <ul>
                    <li>1231 E. Smithville Road</li>
                    <li>Bloomington, Indiana 47401</li>
                    <li>Fax: 812-824-1467</li>
                </ul>
            </section>
            
            <form>
                <input type = "text" placeholder = "Your Name (required)"></input>
                <input type = "email" placeholder = "Your Email (required)"></input>
                <input type = "text" placeholder = "Subject"></input>
                <textarea placeholder = "Your Message"></textarea>
                <button>Submit</button>
            </form>

            
            

   
        </div>
    )
}

export default Contact;