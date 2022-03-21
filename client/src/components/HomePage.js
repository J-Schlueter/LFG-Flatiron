import React from "react"
import NavBar from "./NavBar"
import EventsContainer from "./EventsContainer"

function HomePage({currentUser, setCurrentUser}) {
    return(
        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <div className="homePageDiv">
                <h1>Welcome to Flatiron LFG</h1>
            <EventsContainer currentUser={currentUser}/>
            </div>
            
        </div>
    )
}

export default HomePage