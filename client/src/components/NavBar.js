import React from "react";
import {Link} from "react-router-dom";


export default function NavBar({currentUser, setCurrentUser}) {


    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                setCurrentUser(undefined)
              }
            })
      }

    function renderNav() {
        if(currentUser === undefined) {
            return <div className="NavBar">
            <ul className="NavBarUL">
                <Link to= "/home" className="navBarLink">Home</Link>
            </ul>
            <ul className = "NavBarULRight">
                <Link to= "/login" className="navBarLink">Login</Link>
                <Link to= "/signup" className="navBarLink">Signup</Link>
            </ul>
        </div>
        } else {
            return <div className="NavBar">
            <ul className="NavBarUL">
                <Link to= "/home" className="navBarLink">Home</Link>
                <Link to= "/createevent" className="navBarLink">Create Event</Link>
                <Link to= "/profile" className="navBarLink">Profile</Link>
            </ul>
            <ul className = "NavBarULRight">
                <h2 className="navBarLink">{currentUser.name}</h2>
                <Link to= "/login" onClick={() => handleLogout()} className="navBarLink">Logout</Link>
            </ul>
        </div>
        }
    }
    return (
       
        renderNav()
    );
};