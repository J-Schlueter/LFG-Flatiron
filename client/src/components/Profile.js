import React, {useEffect, useState} from "react"
import NavBar from "./NavBar"
import ProfileEntry from "./ProfileEntry"

function Profile({currentUser, allEntries, setCurrentUser}) {
    const [myEntries, setMyEntries] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    useEffect(() => {
        if (currentUser == undefined) {
            setIsLoggedIn(false)
        } else {
            setIsLoggedIn(true)
            console.log(allEntries[0].user.id)
            console.log(currentUser.id)
        setMyEntries(allEntries.filter(e => e.user.id == currentUser.id))
        console.log(myEntries)
        }
    },[])
    const loadMyEntries =
        myEntries.map(entry => (
             <ProfileEntry entry={entry}/>
        ))

    return(
        <div>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <div className="profilePage">
            {/* <h1>Welcome, {currentUser.name}</h1> */}
            <div className="browseEventsList">
            {loadMyEntries}
            </div>
        </div>
        </div>
    )
}

export default Profile