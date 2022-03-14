import React from "react";
import { Link } from "react-router-dom";


function LandingPage() {
    return(
        <div>
            <div className="landingHero" >
                <div className="landingHeroText">
                    <h1>LOOKING FOR GROUP</h1>
                    <h2>Social gaming made easy</h2>

                </div>

            </div>
            <Link to= "/login" className="landingButton">Login</Link>
            <Link to= "/signup" className="landingButton">Signup</Link>
        </div>

    );
};

export default LandingPage