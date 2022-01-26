import React, {useState, useEffect} from "react";
import EventCard from "./EventCard"

function EventsContainer({currentUser}) {
    const [allEvents, setAllEvents] = useState([])
    const [allEntries, setAllEntries] = useState([])
    
    useEffect(() => (fetch("http://localhost:4000/events")
    .then(resp => resp.json())
    .then(events => setAllEvents(events))),[])

    useEffect(() => (fetch("http://localhost:3000/event_entries")
    .then(resp => resp.json())
    .then(entries => setAllEntries(entries))
    ),[])

    const renderEvents = allEvents.map((event) => (
        <EventCard event={event} currentUser={currentUser} allEntries={allEntries}/>
    ) )
    return (
        <div>
            {renderEvents}
        </div>
    )
}

export default EventsContainer