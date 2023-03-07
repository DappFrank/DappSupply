import React from "react";
import { Link } from "react-router-dom";

const CreateProduct = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 my-5">
      <h1 className="mt-5 font-bold text-2xl">New Product Details</h1>
      <div className="border p-5 rounded-md">
        <div className="flex flex-col mb-2 md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
          <div>
            <label className="block font-medium text-gray-700 mb-2" for="name">
              Product Name
            </label>
            <input
              className="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="name"
              placeholder="Enter your product name"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2" for="name">
              Country of origin
            </label>
            <input
              className="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="text"
              placeholder="Country of production?"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2 md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
          <div>
            <label className="block font-medium text-gray-700 mb-2" for="name">
              Production date
            </label>
            <input
              className="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="text"
              placeholder="Enter the production date"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2" for="name">
              Expiry date
            </label>
            <input
              className="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="text"
              placeholder="Enter the expiration date"
            />
          </div>
        </div>
        <div className="flex flex-col mb-5 md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-5">
          <div>
            <label className="block font-medium text-gray-700 mb-2" for="name">
              Quantity
            </label>
            <input
              className="w-64 md:w-40 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="text"
              placeholder="quantity"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2" for="name">
              Size
            </label>
            <input
              className="w-64 md:w-40 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="text"
              placeholder="size "
            />
          </div>
          <div>
            <label className="block font-bold mb-2" for="price">
              Price
            </label>
            <input
              className="appearance-none border-slate-200 w-64 md:w-40 rounded  py-2 px-3  focus:outline-none focus:shadow-outline"
              id="price"
              type="number"
              step="0.01"
              placeholder="price "
            />
          </div>
        </div>
        <div className="flex flex-col mb-5 md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
          
          <div className="mb-4">
            <label className="block font-bold mb-2" for="image">
              Image
            </label>
            <input
              className="appearance-none border-slate-200 w-64 rounded  py-2 px-3  focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
            />
          </div>
        </div>
        <div className="flex flex-col mb-5 md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            name="description"
            id=""
            rows="3"
            placeholder="Product description"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <Link to="/products">
            <button className="bg-rose-600 hover:bg-rose-500 text-white py-2 px-4 w-64 font-bold rounded-lg">
              Add Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
