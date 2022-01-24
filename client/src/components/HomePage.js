import NavBar from "./NavBar"
import EventsContainer from "./EventsContainer"

function HomePage() {
    return(
        <div>
            <NavBar />
            <div className="homePageDiv">
                <h1>Welcome to Flatiron LFG</h1>
            <EventsContainer />
            </div>
            
        </div>
    )
}

export default HomePage