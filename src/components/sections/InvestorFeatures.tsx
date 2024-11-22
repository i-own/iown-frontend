import React from "react";
import { Coins, Plane, Lock, Globe } from "lucide-react";

export const InvestorFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        Why Invest?
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Feature cards */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Coins className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            High Yield Returns
          </h3>
          <p className="text-gray-600">
            Earn up to 18-24% stable APY through carefully vetted Airbnb
            properties.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Plane className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Travel Perks
          </h3>
          <p className="text-gray-600">
            Get priority access and exclusive discounts on properties
            you&apos;ve invested in.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Hassle-Free
          </h3>
          <p className="text-gray-600">
            All the benefits of real estate investment without the headaches of
            ownership.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Globe className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Global Exposure
          </h3>
          <p className="text-gray-600">
            Get exposure to best real estate across the world with highest
            yields.
          </p>
        </div>
      </div>
    </div>
  );
};
