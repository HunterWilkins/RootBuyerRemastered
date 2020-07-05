import React from "react";
import "./style.css";

function FAQ(props) {
    let topElevenRoots = [
        "Ginseng", "Goldenseal", "Virginia Snakeroot", "True Unicorn (Star Grass)", "Culvers Root", "Osha Root", "Slippery Elm Bark", "Blue Scullcap Herb", "Blood Root", "False Unicorn (Star Grub)"
    ];

    return(
        <div id = "faq">
            
            <h2>FAQ</h2>
            <br />
            <p className = "question">
                What is Herbalism?
            </p>
            <p className = "answer">
                The practice of identifying and using plants that have medicinal qualities.
            </p>

            <p className = "question">When should I harvest herbs?</p>
            <p className = "answer">Harvesting medicinal herbs is best done in the morning just after the dew has dried, early evening, or any time on dry cloudy days.</p>
            <p className = "question">When should I harvest roots?</p>
            <p className = "answer">Roots are best gathered in spring and fall.  This is when the energy and nutrients of the plants is concentrated in the roots and they are considered most potent.</p>

            <p className = "question">Top 10 herbs to sell</p>
            <p className = "answer">
                <ol>
                    {topElevenRoots.map(item => {
                        return(
                            <li>{item}</li>
                        )
                    })}
                </ol>
            </p>
            <p className = "question">I have heard that Bayberry needs both a female and a male bush to produce fruit, is this true?</p>

            <p className = "answer">Yes, Bayberry produces both a male and female plant which means some plants produce only pistilate (female) flowers and some only staminate (male) flowers.  The must be in close proximity to provide pollen for fertilization.</p>

          
        
            <p className = "question">How do I avoid mold?</p>
            <p className = "answer">Do not make big bunches of herbs to hand and dry. If you are laying your herbs out on a screen, then turning them daily should help keep down mold.  NEVER store your herbs, roots or bark in plastic bags.</p>

            <p className = "question">How do I dry the herbs?</p>
            <p className = "answer">Most herbs, roots and bark can be dried in a barn loft or attic.  The most important thing is to have dry air that is flowing.  You may need to add a fan to keep the air circulating.  Keep the heat at even temperatures.</p>

            <p className = "question">Rhizome and Roots.</p>
            <p className = "answer">
                After harvest, remove all foreign matter (rocks, weeds and other roots) and spread in a thin layer immediately. When possible dry indoors in a well ventilated barn loft or attic to protect from the elements. If natural heat is not available you may need to add heat and a fan for continuous airflow. Whether you dry indoors or outdoors you will need to turn or stir the roots daily.
                The key to drying any root, herb or bark is an even combination of heat and airflow. Never dry in an oven or microwave. They can be completely dry (largest stem will snap not bend) in 3-7 days depending on the drying conditions. Once it is dried place the roots carefully into a cardboard box or paper bag for storage in a dry area until you are ready to sell or use. Never store the tubers/roots in plastic or it can mold.
            </p>

            <p className = "question">How do I keep the names of my herbs in place?</p>
            <p className = "answer">Always mark your herb with a tag or the drying area with tags that are not readily removable.  It can be very tricky to identify and label herbs after they are dried.</p>

            <p className = "question">How do I remove the bark from the trees?</p>
            <p className = "answer">NEVER remove  the bark completely around the trunk or branch.  This will kill the tree.  Only take bark from one side of the trunk or branch.  Use a sharp knife or small pruning saw.  You may be able to cut small branches from the tree instead of taking large sections.</p>

            <p className = "question">What is Rossed bark?</p>
            <p className = "answer">Rossed bark – rossing – is when the course outer bark is removed leaving only the inner bark for sale. Slippery elm is bought only as rossed tree bark and rossed sassafras root bark pays more.</p>

        
          
            <p className = "question">
                Where do I get more guidelines for harvesting?
            </p>
            
            <p className = "answer">
                We have tried to list rules and guidelines for each product click here for products we buy.                      
            </p>
        </div>
    )
}

export default FAQ;