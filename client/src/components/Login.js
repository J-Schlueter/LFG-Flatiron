import NavBar from "./NavBar"
import React, {useEffect, useState} from "react"

function Login({allUsers, setCurrentUser, currentUser}) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    function handleLogin(e) {
        e.preventDefault()
       
        const userCreds = {
            name: name,
            password: password
        }
        fetch("https://lfg-flatiron.herokuapp.com/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userCreds),
          })
          .then(resp => resp.json())
          .then((user) => {
              if(user.name === undefined) {
                  setCurrentUser(undefined)
                  window.alert("Invalid Credentials")
              } else {
              console.log(user);
              setCurrentUser(user);
              setName("")
              setPassword("")}
          })

    }
    return(
        <div>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <div className="signup">
                <form className="signupForm">
                    <p>Login</p>
                    <input placeholder="Name" value={name} className="signUpInput" onChange={(e) => setName(e.target.value)}></input>
                    <input placeholder="Password" value={password} className="signUpInput" onChange={(e) => setPassword(e.target.value)}></input>
                    
                </form>
                    <button onClick={(e) => handleLogin(e)} className="formButton">Login</button>
            </div>
        </div>
    )
}

export default Login