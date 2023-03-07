import React from "react";
import homa from "../assets/images/homa.jpg";
import truck from "../assets/images/truck.webp";
import containers from "../assets/images/containers.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="py-8 px-5">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl font-semibold mb-8">Your Products</h2>
        <div className="flex items-center space-x-2">
          <input
            className="bg-gray-200 rounded-full px-4 py-2 w-64 md:w-96 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Looking for an item?"
          />
        </div>
      </div>
      <div className="container mx-auto py-8 ">
        <div className="overflow-auto ">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Product Name</th>
                <th className="px-4 py-2 text-left">Country of origin</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Size</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Production Date</th>
                <th className="px-4 py-2 text-left">Expiration Date</th>
                <th className="px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  <div className="flex items-center justify-start space-x-2">
                    <img
                      className="rounded-full h-8 w-8 object-cover"
                      src={containers}
                      alt="Profile Photo"
                    />
                    <h3>Organic Avocado</h3>
                  </div>
                </td>
                <td className="border px-4 py-2">Ukraine</td>
                <td className="border px-4 py-2">$1.99 each</td>
                <td className="border px-4 py-2">50kg</td>
                <td className="border px-4 py-2">80 pieces</td>
                <td className="border px-4 py-2">02/28/23</td>
                <td className="border px-4 py-2">03/15/23</td>
                <td className="border px-4 py-2">Fresh and healthy.</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <div className="flex items-center justify-start space-x-2">
                    <img
                      className="rounded-full h-8 w-8 object-cover"
                      src={truck}
                      alt="Profile Photo"
                    />
                    <h3>Grass-fed beef</h3>
                  </div>
                </td>
                <td className="border px-4 py-2">Nigeria</td>
                <td className="border px-4 py-2">$8.99/lb</td>
                <td className="border px-4 py-2">25kg</td>
                <td className="border px-4 py-2">14 pieces</td>
                <td className="border px-4 py-2">02/19/23</td>
                <td className="border px-4 py-2">03/16/23</td>
                <td className="border px-4 py-2">High-quality beef</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">
                  <div className="flex items-center justify-start space-x-2">
                    <img
                      className="rounded-full h-8 w-8 object-cover"
                      src={homa}
                      alt="Profile Photo"
                    />
                    <h3>Organic Dark Chocolate</h3>
                  </div>
                </td>
                <td className="border px-4 py-2">France</td>
                <td className="border px-4 py-2">$3.99/bar</td>
                <td className="border px-4 py-2">100 g</td>
                <td className="border px-4 py-2">20 tons</td>
                <td className="border px-4 py-2">02/14/23</td>
                <td className="border px-4 py-2">03/18/23</td>
                <td className="border px-4 py-2">perfect for a sweet treat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex justify-center items-center">
          <Link
            to="/new_product"
            className="bg-rose-600 hover:bg-rose-500 text-white
            py-2 px-4 w-64  font-bold rounded-lg text-center"
          >
            Add New Product
          </Link>
        </div>
    </div>
  );
};
export default Products;
