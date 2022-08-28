import "./App.css";
import SignUp from "./SignUp";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/signup" />} />
      </Routes>
    </div>
  );
}

export default App;
