import React from "react";

const SignUp = () => {
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <h1 className="mb-5 font-semibold text-3xl">
        Join DappSupply Today
      </h1>
      <div className="border p-5 rounded-md">
        <div className="flex flex-col mb-2 md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
          <div>
            <label class="block font-medium text-gray-700 mb-2" for="name">
              Name
            </label>
            <input
              class="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="text"
              placeholder="Enter your Full Name"
            />
          </div>
          <div>
            <label class="block font-medium text-gray-700 mb-2" for="email">
              Email
            </label>
            <input
              class="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="flex flex-col mb-2 md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
          <div>
            <label class="block font-medium text-gray-700 mb-2" for="name">
              phone Number
            </label>
            <input
              class="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="text"
              placeholder="Enter your Phone Number"
            />
          </div>
          <div>
            <label class="block font-medium text-gray-700 mb-2" for="name">
              Country
            </label>
            <input
              class="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="text"
              placeholder="which country are you from?"
            />
          </div>
        </div>
        <div className="flex flex-col mb-5 md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-3">
          <div>
            <label class="block font-medium text-gray-700 mb-2" for="name">
              Address
            </label>
            <input
              class="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="text"
              placeholder="Provide your address"
            />
          </div>
          <div>
            <label class="block font-medium text-gray-700 mb-2" for="name">
              Role
            </label>
            <input
              class="w-64 px-3 py-2 border border-gray-300 rounded-md"
              id="name"
              type="text"
              placeholder="Enter your role"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button class="bg-rose-600 hover:bg-rose-500 text-white py-2 px-4 w-64  font-bold rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
