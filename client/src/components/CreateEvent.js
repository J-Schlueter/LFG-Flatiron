import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"

function CreateEvent({currentUser, setCurrentUser}) {
    const [game, setGame] = useState()
    const [platform, setPlatform]= useState()
    const [time, setTime] = useState()

    function handleCreate(e) {
        e.preventDefault()
        const data = {
            game: game,
            platform: platform,
            time: time
        }
        fetch('http://localhost:3000/events',{
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        window.location.reload()
    }
    return(
        <div>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <div className="signup">
                <form className="signupForm">
                    <p>Create an Event</p>
                    <input placeholder="Game" onChange={(e) => setGame(e.target.value)} className="signUpInput"></input>
                    <input placeholder="Platform" onChange={(e) => setPlatform(e.target.value)} className="signUpInput"></input>
                    <input placeholder="Time" onChange={(e) => setTime(e.target.value)} className="signUpInput"></input>
                </form>
                    <button onClick={(e) => handleCreate(e)} className="formButton">Create Event</button>
            </div>
        </div>
    )
}

export default CreateEvent