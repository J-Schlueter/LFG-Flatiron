function EventCard({event}) {
    return(
        <div>
            <h2>{event.title}</h2>
            <h3>{event.platform}</h3>
            <h3>{event.time}</h3>
            {/*users*/}
        </div>
    )
}

export default EventCard