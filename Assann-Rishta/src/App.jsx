import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Forms from "./components/Forms";
import Pricing from "./components/Pricing";
import Rishtay from "./components/Rishtay";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/rishtay" element={<Rishtay />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;