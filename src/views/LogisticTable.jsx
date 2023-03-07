import React from "react";
import truck from '../assets/images/truck.webp';
import homa from '../assets/images/homa.jpg';
import containers from '../assets/images/containers.jpg';
import { Link } from "react-router-dom";

const LogisticTable = () => {
  return (
    <div>
        <div className="flex justify-center my-10">
          <input
            className="bg-gray-200 rounded-full px-4 py-2 w-64 md:w-96 focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search your Logistics..."
          />
        </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider"
                    >
                      Sender Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider"
                    >
                      Receiver Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider"
                    >
                      Tracking Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-boldtext-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quantities
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-sm font-bold text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y-2 divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      7B Ada-George Road ph.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        Wike house
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">10-wst7800</td>
                    <td className="px-6 py-4 whitespace-nowrap">50 pieces</td>
                    <td className="px-6 py-4 whitespace-nowrap">Delivered</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      Gospel compound Ahoada
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        County High School Ahoada
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">77-wst50bn</td>
                    <td className="px-6 py-4 whitespace-nowrap">19 pieces</td>
                    <td className="px-6 py-4 whitespace-nowrap">Pending</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      United Baptist church Ahoada
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        white Creativity ph
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">10-wsab50</td>
                    <td className="px-6 py-4 whitespace-nowrap">20 pieces</td>
                    <td className="px-6 py-4 whitespace-nowrap">shipping</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>      
      </div> 

      <div className="flex justify-center items-center">
          <Link
            to="/new_logistics"
            className="bg-rose-600 hover:bg-rose-500 text-white
            py-2 px-4 w-64 mt-10 font-bold rounded-lg text-center"
          >
            New Logistics
          </Link>
        </div>
    </div>
  );
};

export default LogisticTable;
