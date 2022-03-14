import React from "react";
import { Link } from "react-router-dom";


function LandingPage() {
    return(
        <div>
            <Link to= "/login" className="landingButton">Login</Link>
            <Link to= "/signup" className="landingButton">Signup</Link>
        </div>

    );
};

export default LandingPage