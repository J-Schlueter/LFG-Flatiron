import NavBar from "./NavBar"
import React, {useState} from "react"
import {Link} from "react-router-dom";

function Signup({currentUser, setCurrentUser, allUsers}) {
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    function submitEvent(e) {
        e.preventDefault()
        const matchingName = allUsers.find(u => u.name == name)
        if(matchingName == undefined) {
            const user = {
                name: name,
                password: password
            }
            fetch('localhost:3000/users',{
                method: "POST",
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(user)
            })
            .then(res => {
                if(res.ok){
                    res.json().then(setCurrentUser)
                }
                window.location.href = "localhost:3000/login";
                // setCurrentUser(user)
            })
        } else {
            window.alert("Name already Exists!")
        }
    }

    function test() {
        console.log(currentUser)
    }
    return(
        <div>
        <NavBar setCurrentUser={setCurrentUser}/>
            <div className="signup">
                <form className="signupForm" >
                    <p>Signup</p>
                    <input placeholder="Name" className="signUpInput"  onChange={(e) => setName(e.target.value)}></input>
                    <input placeholder="Password" className="signUpInput"  onChange={(e) => setPassword(e.target.value)}></input>
                    {/* <input placeholder="Platform(s)" className="signUpInput"></input>
                    <input placeholder="Gamertag(s)" className="signUpInput"></input> */}
                </form>
                    <button onClick={(e) => submitEvent(e)} className="formButton">Create Account</button>
            </div>
        </div>
    )
}

export default Signup