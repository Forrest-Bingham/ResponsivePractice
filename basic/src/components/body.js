import React from "react";
import "./body.css";
import Goomby from "../images/Goomby.jpg";
import SirReginald from "../images/SirReginald.jpg";
import LordF from "../images/LordF.jpg";

const Body = () => {

    return (
        <div className="body">
            <div className="upper">
                <div className="backgroundImage"/>
                <div className="bodyIntro">
                    <h1 className="upperTitle">Welcome to our homepage!</h1>
                <div className="upperAbout">
                    <p className="upperText">This is who we are and some other neat things about us.
                    We aim to achieve this goal by delivering some cool products to better your life.
                    We are a company located in a city near you.
                    Please tell all of your friends about us and maybe we can give you some free stuff idk though.</p>  
                </div>
                    <button className="upperButton">Learn More</button>
                </div>
            </div>
            <div className="middle">
                <div className="middleInfo">
                    <img className="personImage" src={Goomby} alt="Goomby"/>
                    <h3>Goomby - Social Media Manager</h3>
                    <p>We don't know where he is from but he does a great job! <br/>
                    Has about 3 months of experience and learned all he knows <br/>
                    from watching videos on Youtube</p>
                </div>
                <div className="middleInfo">
                    <img className="personImage" src={SirReginald} alt="Sir Reginald"/>
                    <h3>Sir Reginald - Chief Financial Officer</h3>
                    <p>Sir Reginald is the Duke of Chutney. Therefore he is of <br/>
                    royal decent and has lots of money! He left his kingdom to come work for us. Wow what a great guy</p>
                </div>
                <div className="middleInfo">
                    <img className="personImage" src={LordF} alt="Lord Farquaad"/>
                    <h3>Lord Farquaad - CEO</h3>
                    <p>He is the CEO of our company because he has all the money <br/> 
                    and we all work in his castle. It's not easy working for him <br/>
                    because some of us may die, but that is a sacrifice he is willing to make.</p>
                </div>
            </div>
            <div className="lower">
                <div className="lowerLeft">
                    <div className="lowerLeftFirst">
                        <h1>Title!</h1>
                    </div>
                    <div className="lowerLeftSecond">
                        <h2>Title 2!</h2>
                    </div>
                </div>
                <div className="lowerRight"/>
                
            </div>
        </div>
    )
}

export default Body;