import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useEffect, useState} from "react";
import HomePage from './components/HomePage'
import CreateEvent from "./components/CreateEvent";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined)
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(resp => resp.json())
    .then(users => setAllUsers(users))
  })
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path= "/profile" element={<Profile />} />
        <Route path= "/signup" element={<Signup currentUser={currentUser} setCurrentUser={setCurrentUser} allUsers={allUsers}/>} />
        <Route path= "/login" element={<Login allUsers={allUsers} setCurrentUser={setCurrentUser}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
