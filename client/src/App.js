import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage'
import CreateEvent from "./components/CreateEvent";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path= "/profile" element={<Profile />} />
        <Route path= "/signup" element={<Signup />} />
        <Route path= "/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
