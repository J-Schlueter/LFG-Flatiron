import React, {useState, useEffect} from "react";
import NavBar from "./NavBar"

function CreateEvent() {
    return(
        <div>
        <NavBar />
            <div>
                <form>
                    <input placeholder="Game"></input>
                    <input placeholder="Platform"></input>
                    <input placeholder="Time"></input>
                    <button>Create Event</button>
                </form>
            </div>
        </div>
    )
}

export default CreateEvent