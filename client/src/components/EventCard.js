function EventCard({event}) {
    return(
        <div className="eventCard">
            <h2>{event.game}</h2>
            <h3>{event.platform}</h3>
            <h3>{event.time}</h3>
            {/*users*/}
            <button>RSVP</button>
        </div>
    )
}

export default EventCard