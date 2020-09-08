import React from "react";
import "./body.css";

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
            <h2>Middle Body!</h2>
            </div>
            <div className="lower">
            <h1>Lower Body</h1>
            </div>
        </div>
    )
}

export default Body;