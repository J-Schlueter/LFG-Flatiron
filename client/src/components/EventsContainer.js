import React, {useState, useEffect} from "react";
import EventCard from "./EventCard"

function EventsContainer() {
    const [allEvents, setAllEvents] = useState([])
    
    useEffect(() => (fetch("http://localhost:4000/events")
    .then(resp => resp.json())
    .then(events => setAllEvents(events))),[])
    const renderEvents = allEvents.map((event) => (
        <EventCard event={event}/>
    ) )
    return (
        <div>
            {renderEvents}
        </div>
    )
}

export default EventsContainer