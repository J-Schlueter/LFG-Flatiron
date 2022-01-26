import React, {useState} from "react"

function ProfileEntry({entry}) {
const [newTag, setNewTag] = useState()
const [newTagCreation, toggleNewTagCreate] = useState(false)
    function handleDelete(e) {
        fetch(`http://localhost:3000/event_entries/${entry.id}`,{
            method: "DELETE",
        })
        e.target.parentElement.remove()
    }

    function handleUpdateTag() {
        toggleNewTagCreate(true)
    }

    function confirmUpdateTag(){
        console.log(entry.id)
        const data = {
            gamertag: newTag
        }
        fetch(`http://localhost:3000/event_entries/${entry.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                Accepts: "application/json",
            },
            body: JSON.stringify(data),
        }) 
    }

    function renderButtons() {
        if (newTagCreation == false) {
            return <>
            <button onClick={(e) => handleUpdateTag()}>Update GamerTag</button>
            <button onClick={(e) => handleDelete(e)}>Leave Event</button>
            </>
        } else {
            return <>
            <input onChange={(e) => setNewTag(e.target.value)}></input>
            <button onClick={() => confirmUpdateTag()}>Confirm</button>
            <button onClick={() => toggleNewTagCreate(false)}>Cancel</button>
            </>
        }
    }

    return(
        <div className="profileEntry">
            <h2>{entry.event.game}</h2>
            <h4>{entry.event.time}</h4>
            <h4>Your GamerTag: {entry.gamertag}</h4>
            {renderButtons()}
        </div>
    )
}

export default ProfileEntry