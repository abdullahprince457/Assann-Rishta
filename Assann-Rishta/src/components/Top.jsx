import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="bg-[#E72D65] flex gap-3 text-white p-3 justify-center sm:justify-end w-full pr-4">
      <Link to="/login">Login</Link>
      <Link to="/SignUp">Sign Up</Link>
    </div>
  );
};

export default Top;