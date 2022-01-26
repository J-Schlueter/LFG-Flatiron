import React, {useState} from "react";
import {Link} from "react-router-dom";


function NavBar({currentUser}) {


    // const loggedInRender = (
    //     <div className="NavBar">
    //         <ul className="NavBarUL">
    //             <Link to= "/" className="navBarLink">Home</Link>
    //             <Link to= "/createevent" className="navBarLink">Create Event</Link>
    //             <Link to= "/profile" className="navBarLink">Profile</Link>
    //         </ul>
    //         <ul className = "NavBarULRight">
    //             <h4>{currentUser.name}</h4>
    //         </ul>
    //     </div>
    // )

    // const notLoggedInRender = (
    //     <div className="NavBar">
    //         <ul className="NavBarUL">
    //             <Link to= "/" className="navBarLink">Home</Link>
    //         </ul>
    //         <ul className = "NavBarULRight">
    //             <Link to= "/login" className="navBarLink">Login</Link>
    //             <Link to= "/signup" className="navBarLink">Signup</Link>
    //         </ul>
    //     </div>
    // )
    function renderNav() {
        if(currentUser == undefined) {
            return <div className="NavBar">
            <ul className="NavBarUL">
                <Link to= "/" className="navBarLink">Home</Link>
            </ul>
            <ul className = "NavBarULRight">
                <Link to= "/login" className="navBarLink">Login</Link>
                <Link to= "/signup" className="navBarLink">Signup</Link>
            </ul>
        </div>
        } else {
            return <div className="NavBar">
            <ul className="NavBarUL">
                <Link to= "/" className="navBarLink">Home</Link>
                <Link to= "/createevent" className="navBarLink">Create Event</Link>
                <Link to= "/profile" className="navBarLink">Profile</Link>
            </ul>
            <ul className = "NavBarULRight">
                <h2>{currentUser.name}</h2>
            </ul>
        </div>
        }
    }
    return (
       
        renderNav()
    )
}

export default NavBar;