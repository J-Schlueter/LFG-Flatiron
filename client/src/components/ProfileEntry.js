
function ProfileEntry({entry}) {

    return(
        <div className="profileEntry">
            <h2>{entry.event.game}</h2>
            <h4>{entry.event.time}</h4>
            <h4>Your GamerTag: {entry.gamertag}</h4>
        </div>
    )
}

export default ProfileEntry