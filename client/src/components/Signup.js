import NavBar from "./NavBar"

function Signup() {
    return(
        <div>
        <NavBar />
            <div className="signup">
                <form className="signupForm">
                    <input placeholder="Name" className="signUpInput"></input>
                    <input placeholder="Password" className="signUpInput"></input>
                    {/* <input placeholder="Platform(s)" className="signUpInput"></input>
                    <input placeholder="Gamertag(s)" className="signUpInput"></input> */}
                    <button>Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Signup