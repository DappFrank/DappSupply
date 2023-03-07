import React from "react";
import homa from "../assets/images/homa.jpg";
import icon from "../assets/images/icon.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-transparent border-b">
      <div className="flex items-center justify-between text-black p-5">
        <div className="flex items-center space-x-2">

          <img className="hidden sm:block w-12" src={icon} alt="" />

          <Link to="/" className="text-2xl font-semibold">
            DappSupply
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-3 font-semibold">
          <Link to="/logistic_table">
            <p>Logistics</p>
          </Link>
          <Link to="/products">
            <p>Products</p>
          </Link>

          <Link to='/tracker'>
            <p>Tracker</p>
          </Link>
        </div>

        <div>
          <a className="bg-rose-600 hover:bg-rose-500 text-white py-2 px-4 text-sm font-semibold rounded-full cursor-pointer">
            Connect Wallet
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
