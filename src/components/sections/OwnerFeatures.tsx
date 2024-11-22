import React from "react";
import { LineChart, RefreshCw } from "lucide-react";

export const OwnerFeatures = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
        For Airbnb Owners
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Feature cards */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <LineChart className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Unlock Liquidity
          </h3>
          <p className="text-gray-600">
            Access capital without losing control of your property.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <RefreshCw className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Flexible Terms
          </h3>
          <p className="text-gray-600">
            Minimal lock-in periods with buyback options for full ownership.
          </p>
        </div>
      </div>
    </div>
  );
};
