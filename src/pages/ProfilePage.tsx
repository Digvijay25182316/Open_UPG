import React from "react";
import { WalletIcon, PlusIcon } from "@heroicons/react/24/solid";

const ProfilePage = () => {
  return (
    <div className="w-screen h-screen bg-white text-black flex items-center justify-center">
      <div className="w-full max-w-md flex flex-col items-center justify-center p-6 overflow-y-auto">
        {/* Top Profile Info */}
        <div className="w-full flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Sahil Patil</h2>
            <p className="text-sm text-gray-500">UPI ID: sahilunofficial0007-1@okicici</p>
            <p className="text-sm text-gray-500">9021894575</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-300 text-white font-semibold flex items-center justify-center text-lg">
            S
          </div>
        </div>

        {/* Wallet Section Box */}
        <div className="w-full bg-gray-100 rounded-xl p-4 flex items-center justify-center gap-10 mb-6">
          {/* Wallets Button */}
          <button className="w-28 h-28 bg-white rounded-xl shadow flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-1">
              <WalletIcon className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm font-semibold text-gray-800">Wallets</p>
            <p className="text-xs text-gray-500">3 Linked</p>
          </button>

          {/* Add Wallet Button */}
          <button className="w-28 h-28 bg-white rounded-xl shadow flex flex-col items-center justify-center text-center relative">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-1 relative">
              <WalletIcon className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                <PlusIcon className="w-3 h-3 text-blue-600" />
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-800">Add Wallet</p>
          </button>
        </div>

        {/* Info Sections */}
        <div className="w-full space-y-4">
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="font-semibold text-gray-800">Pay with credit or debit cards</p>
            <p className="text-sm text-gray-500">Pay bills with your card</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="font-semibold text-gray-800">Your QR code</p>
            <p className="text-sm text-gray-500">Use to receive money from any UPI app</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-4">
            <p className="font-semibold text-gray-800">Autopay</p>
            <p className="text-sm text-gray-500">No pending requests</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
