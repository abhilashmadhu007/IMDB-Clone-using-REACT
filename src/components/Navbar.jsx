import React from "react";
import Logo from "../MovieLogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-3 py-4">
      <img className="w-[50px]" src={Logo} alt="" />
      <Link to="/" className="text-blue-500 text-2xl font-semibold">
        Home
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-2xl font-semibold">
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;
