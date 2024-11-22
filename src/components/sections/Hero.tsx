import React from "react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
            Fractionalizing
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Real Estate
            </span>
            <br />
            with Crypto Magic ✨
          </h1>
          <div className="mt-8 mb-8">
            <p className="text-2xl font-semibold text-gray-900 mb-2">
              Invest in premium Airbnb properties worldwide
            </p>
            <p className="text-xl text-gray-600">
              Get ownership benefits without the hassles of ownership.
            </p>
          </div>
          <div className="flex mt-16 justify-center gap-8">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2 text-lg font-semibold">
              Launching Soon!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
