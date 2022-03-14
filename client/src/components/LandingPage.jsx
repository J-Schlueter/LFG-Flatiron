import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function LandingPage() {
    return(
        <div>
            <div className="landingHero" >
                <div className="landingHeroText">
                    <h1>LOOKING FOR GROUP</h1>
                    <h2>Social gaming made easy</h2>

                </div>

            </div>
            <Link to= "/login" className="landingButton">
                <Button variant="contained">Login</Button>
            </Link>
            <Link to= "/signup" className="landingButton">
                <Button variant="contained">Signup</Button>
            </Link>
        </div>

    );
};

