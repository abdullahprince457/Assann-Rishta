import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Forms from "./components/Forms";
import Pricing from "./components/Pricing";
import Rishtay from "./components/Rishtay";
import AboutUS from "./components/AboutUS";
import F_rishtay from "./components/F_rishtay";
import ContactUs from "./components/ContactUs"
import Vendors from "./components/Vendors";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/aboutUS" element={<AboutUS />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/rishtay" element={<Rishtay />} />
      <Route path="/f_rishtay" element={<F_rishtay />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/vendors" element={<Vendors />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;