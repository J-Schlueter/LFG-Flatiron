import NavBar from "./NavBar"
import EventsContainer from "./EventsContainer"

function HomePage({currentUser}) {
    return(
        <div>
            <NavBar currentUser={currentUser}/>
            <div className="homePageDiv">
                <h1>Welcome to Flatiron LFG</h1>
            <EventsContainer currentUser={currentUser}/>
            </div>
            
        </div>
    )
}

export default HomePage