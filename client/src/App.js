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
  const [allEntries, setAllEntries] = useState([])
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    fetch("https://lfg-flatiron.herokuapp.com/users")
    .then(resp => resp.json())
    .then(users => setAllUsers(users))
  },[])

  useEffect(() => {
    fetch("https://lfg-flatiron.herokuapp.com/event_entries")
    .then(resp => resp.json())
    .then(entries => setAllEntries(entries))
},[])

useEffect(() => {
  fetch("/me", {
    credentials: "include",
  }).then((res) => {
    if (res.ok) {
      res.json().then((user) => {
        setCurrentUser(user);
        setAuthenticated(true);
        console.log(user)
      });
    } else {
      setAuthenticated(true);
    }
  });
}, []);
  return (
    <div className="App">
      {/* <button onClick={() => setCurrentUser(allUsers[0])}>Login as Joshua</button>
      <button onClick={() => setCurrentUser(allUsers[1])}>Login as Kenneth</button> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/createevent" element={<CreateEvent currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path= "/profile" element={<Profile currentUser={currentUser} allEntries={allEntries} setCurrentUser={setCurrentUser}/>} />
        <Route path= "/signup" element={<Signup currentUser={currentUser} setCurrentUser={setCurrentUser} allUsers={allUsers}/>} />
        <Route path= "/login" element={<Login allUsers={allUsers} setCurrentUser={setCurrentUser} currentUser={currentUser}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
