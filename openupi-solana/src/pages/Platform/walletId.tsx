import {
  ArrowUturnLeftIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

const EnterUpiPage: React.FC = () => {
  const [upiId, setUpiId] = useState("");

  return (
    <div className="min-h-screen flex flex-col px-6 items-center  pt-10 ">
      <div className="flex flex-col justify-center max-w-[300px] h-[80vh] shadow-lg p-5 mt-10 rounded-[35px]">
        <div className="flex justify-between items-center mb-6 py-10">
          {/* Back Button */}
          <button className=" text-2xl hover:opacity-80 transition">
            <ArrowUturnLeftIcon className="h-5 w-5" />
          </button>

          {/* More Options Button (3 vertical dots) */}
          <button className=" text-2xl hover:opacity-80 transition">
            <EllipsisVerticalIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Title */}
        <h1 className="text-xl font-semibold mb-1">Enter UPG ID or number</h1>
        <p className="text-gray-400 text-sm mb-8">
          Pay any <span className="font-bold italic">UPG</span> app using UPG ID
          or number
        </p>

        {/* Input */}
        <label htmlFor="upi" className="text-sm text-gray-500 mb-1">
          UPG ID or number
        </label>
        <input
          type="text"
          id="upi"
          value={upiId}
          onChange={(e) => setUpiId(e.target.value)}
          placeholder="example@upg"
          className="bg-gray-200 border border-gray-600 rounded-xl p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-8"
        />

        {/* Continue Button */}
        <button
          disabled={!upiId}
          className={`mt-auto w-full py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
            upiId
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default EnterUpiPage;
