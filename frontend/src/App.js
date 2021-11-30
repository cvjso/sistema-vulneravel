import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/register"> Register </Link>
        <Link to="/login"> Login </Link>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
