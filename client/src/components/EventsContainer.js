import React, {useState, useEffect} from "react";
import EventCard from "./EventCard"

function EventsContainer({currentUser}) {
    const [allEvents, setAllEvents] = useState([])
    const [allEntries, setAllEntries] = useState([])
    
    useEffect(() => (fetch("https://lfg-flatiron.herokuapp.com/events")
    .then(resp => resp.json())
    .then(events => setAllEvents(events))),[])

    useEffect(() => (fetch("https://lfg-flatiron.herokuapp.com/event_entries")
    .then(resp => resp.json())
    .then(entries => setAllEntries(entries))
    ),[])

    const renderEvents = allEvents.map((event) => (
        <EventCard event={event} currentUser={currentUser} allEntries={allEntries}/>
    ) )
    return (
        <div className="browseEventsList">
            {renderEvents}
        </div>
    )
}

export default EventsContainer