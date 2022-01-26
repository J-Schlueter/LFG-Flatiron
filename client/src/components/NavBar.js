import React from "react";
import {Link} from "react-router-dom";


function NavBar() {
    return (
        <div className="NavBar">
            <ul className="NavBarUL">
                <Link to= "/" className="navBarLink">Home</Link>
                <Link to= "/createevent" className="navBarLink">Create Event</Link>
                <Link to= "/profile" className="navBarLink">Profile</Link>
            </ul>
            <ul className = "NavBarULRight">
                <Link to= "/login" className="navBarLink">Login</Link>
                <Link to= "/signup" className="navBarLink">Signup</Link>
            </ul>
        </div>
    )
}

export default NavBar;