import React from "react";
import containers from '../assets/images/containers.jpg';
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div>
        <img className="rounded-t-none rounded-b-xl w-full h-96 object-cover" src={containers} alt="" />
      </div>
      <div className="flex justify-center items-center flex-col px-3 py-10">
        <div className="flex flex-col items-center pb-10">
          <h1 className="text-3xl font-bold mb-3">
            Your Logistics Partner For Seamless Delivery.
          </h1>
          <h1 className="text-md font-light text-slate-800">
            Our logistics service provides end-to-end solutions for all your
            shipping needs.
          </h1>
        </div>
        <div>
          <Link to="/signup">
            <button className="bg-rose-600 hover:bg-rose-500 text-white py-3 text-sm font-semibold px-36 rounded-full">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
