import React, {useState} from "react";

function EventCard({event, currentUser, allEntries}) {
    const [rsvpToggle, setRSVPToggle] = useState(false)
    const [rsvpTrue, setRSVPTrue] = useState(false)
    const [gamerTag, setGamerTag] = useState()

    const cardEntries = event.event_entries
    
    function toggleRSVP() {
        console.log(event)
        console.log(currentUser)
        setRSVPToggle(!rsvpToggle)
    }

    function handleRSVPConfirm() {
        const data = {
            gamertag: gamerTag,
            user_id: currentUser.id,
            event_id: event.id
        }
        console.log(data)
        fetch("https://lfg-flatiron.herokuapp.com/event_entries",{
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        window.location.reload()
    }

    const rsvpPanel = (
        <div className="eventCard">
        <h2>{event.game}</h2>
        <h3>{event.platform}</h3>
        <h3>{event.time}</h3>
        <input value={gamerTag} placeholder="GamerTag" onChange={(e) => setGamerTag(e.target.value)}></input>
        <button onClick={() => toggleRSVP()}>Cancel</button>
        <button onClick={() => handleRSVPConfirm()}>Confirm</button>
        </div>
    )

    const rsvpExists = (
        <div className="eventCard">
        <h2>{event.game}</h2>
        <h3>{event.platform}</h3>
        <h3>{event.time}</h3>
        <h3>{event.event_entries}</h3>
        <h3>{event.users}</h3>
        </div>
    )
    const defaultCard = (
        <div className="eventCard">
            <h2>Game: {event.game}</h2>
            <h3>Platform: {event.platform}</h3>
            <h3>When: {event.time}</h3>
            {currentUser ? <button onClick={() => toggleRSVP()}>RSVP</button> : undefined}
            <p>Who: {event.event_entries.gamertag}</p>
        </div>);
        
    function toggleCard() {
        if (rsvpTrue === true) {

        }
       else if (rsvpToggle === false) {
            return (defaultCard)
        } else {
            return (rsvpPanel)
        }
    }
    

    return(
        toggleCard()
    )
}

export default EventCard