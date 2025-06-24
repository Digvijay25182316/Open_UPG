import React from "react";
import QRCode from "react-qr-code";
import { ArrowLeft, X } from "lucide-react";

const QRCodePage = () => {
  return (
    <div className="w-screen h-screen bg-white text-black flex items-center justify-center px-4 py-6">
      <div className="flex flex-col items-center justify-between w-full max-w-md h-full">
        {/* Header */}
        <div className="w-full flex items-center justify-between">
          <ArrowLeft className="w-5 h-5 cursor-pointer text-gray-700" />
          <h2 className="text-base font-semibold text-gray-800">
            Create a payment link
          </h2>
          <X className="w-5 h-5 cursor-pointer text-gray-700" />
        </div>

        {/* QR Code */}
        <div className="flex flex-col justify-center items-center flex-1">
          <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-200">
            <QRCode value="https://example.com/payment" size={180} />
          </div>
          <div className="text-center text-sm text-gray-500 mt-4">
            <p className="text-xs">Your link is ready</p>
            <p className="mt-1">Next, Share Your Link To Get Paid</p>
            <p>By Anyone</p>
          </div>
        </div>

        {/* Share Button */}
        <button className="w-full bg-blue-500 text-white py-3 rounded-full font-medium shadow-sm transition hover:bg-blue-600">
          Share
        </button>
      </div>
    </div>
  );
};

export default QRCodePage;
