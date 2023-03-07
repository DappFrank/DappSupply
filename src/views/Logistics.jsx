import React from "react";
import { Link } from "react-router-dom";

const Logistics = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 my-5">
        <h1 className="mt-5 p-5 font-semibold text-2xl text-center">
            Attach the following documents on package
        </h1>
      <div className="border p-5 rounded-md">
        <div className="flex flex-col mb-2 md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
          <div>
            <label className="block font-medium text-gray-700 mb-2" for="name">
              Sender Address
            </label>
            <input
              className="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="name"
              placeholder="Enter sender Address"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2" for="name">
              Receiver Adresss
            </label>
            <input
              className="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="name"
              placeholder="Enter receiver Address"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2 md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
          <div>
            <label className="block font-medium text-gray-700 mb-2" for="name">
              Tracking Number
            </label>
            <input
              className="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="name"
              placeholder="Enter the tracking number"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2" for="name">
              Quantities
            </label>
            <input
              className="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="name"
              placeholder="The quantity of product"
            />
          </div>
        </div>
        <div className="flex flex-col mb-5 md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            name="description"
            id=""
            rows="3"
            placeholder="Instruction"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <Link to='/logistic_table'
           className=" bg-rose-600 hover:bg-rose-500 text-white text-center py-2 px-4 w-64
           text-md font-semibold rounded-lg">
            Add Logistics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logistics;
