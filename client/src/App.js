import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage'
import CreateEvent from "./components/CreateEvent";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createevent" element={<CreateEvent />} />
        <Route path= "/profile" element={<Profile />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
