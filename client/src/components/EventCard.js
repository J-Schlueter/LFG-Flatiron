import React, {useEffect, useState} from "react";
function EventCard({event, currentUser, allEntries}) {
    const [rsvpToggle, setRSVPToggle] = useState(false)
    const [rsvpTrue, setRSVPTrue] = useState(false)
    const [gamerTag, setGamerTag] = useState()
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
        fetch("http://localhost:3000/event_entries",{
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
        {/*users*/}
        </div>
    )
    const defaultCard = (
        <div className="eventCard">
        <h2>{event.game}</h2>
        <h3>{event.platform}</h3>
        <h3>{event.time}</h3>
        {currentUser ? <button onClick={() => toggleRSVP()}>RSVP</button> : undefined}
    </div>
        )
    function toggleCard() {
        if (rsvpTrue == true) {

        }
       else if (rsvpToggle == false) {
            return (defaultCard)
        } else {
            return (rsvpPanel)
        }
    }
    // useEffect(() => {
    //     if(currentUser == undefined) {
    //         console.log("Not Logged In")
    //     } else {
    //         console.log(allEntries)
    //     const existingEntries = allEntries.filter(e => e.user.id == currentUser.id && e.event.id == event.id)
    //     console.log(existingEntries)
    //     const existingEntry = existingEntries.find(e => e == event)
    //     console.log(existingEntry)
    //     // console.log(`"already RSVP'D`)
    // }
    //     // if()
    // },[])
    return(
        toggleCard()
    )
}

export default EventCard