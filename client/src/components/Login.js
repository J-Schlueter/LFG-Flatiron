import NavBar from "./NavBar"
import React, {useEffect, useState} from "react"

function Login({allUsers, setCurrentUser}) {
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    function handleLogin(e) {
        e.preventDefault()
        const validUsernames = (allUsers.filter((user) => user.name == name))
        const validPassword = validUsernames.map(user => user.password)
        console.log(validUsernames)

        if(password == validPassword){
            console.log("Logged in!")
            setCurrentUser(validUsernames[0])
        } else {
            console.log("Invalid Credentials")
        }
    }
    return(
        <div>
        <NavBar />
            <div className="signup">
                <form className="signupForm">
                    <input placeholder="Name" className="signUpInput" onChange={(e) => setName(e.target.value)}></input>
                    <input placeholder="Password" className="signUpInput" onChange={(e) => setPassword(e.target.value)}></input>
                    {/* <input placeholder="Platform(s)" className="signUpInput"></input>
                    <input placeholder="Gamertag(s)" className="signUpInput"></input> */}
                    <button onClick={(e) => handleLogin(e)}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login