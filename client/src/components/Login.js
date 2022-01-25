import NavBar from "./NavBar"

function Login() {
    return(
        <div>
        <NavBar />
            <div className="signup">
                <form className="signupForm">
                    <input placeholder="Name" className="signUpInput"></input>
                    <input placeholder="Password" className="signUpInput"></input>
                    {/* <input placeholder="Platform(s)" className="signUpInput"></input>
                    <input placeholder="Gamertag(s)" className="signUpInput"></input> */}
                    <button>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login