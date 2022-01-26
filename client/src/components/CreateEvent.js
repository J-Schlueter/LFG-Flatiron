import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"

function CreateEvent() {
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
    }
    return(
        <div>
        <NavBar />
            <div>
                <form>
                    <input placeholder="Game" onChange={(e) => setGame(e.target.value)}></input>
                    <input placeholder="Platform" onChange={(e) => setPlatform(e.target.value)}></input>
                    <input placeholder="Time" onChange={(e) => setTime(e.target.value)}></input>
                    <button onClick={(e) => handleCreate(e)}>Create Event</button>
                </form>
            </div>
        </div>
    )
}

export default CreateEvent