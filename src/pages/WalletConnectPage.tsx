import React, { useState } from 'react';
import { blockchains } from '../assets/Chains';
import { HelpCircle } from 'lucide-react';

const WalletConnectPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white px-4">
      <div id="Wallwt-container" className="relative bg-white w-full max-w-sm rounded-2xl p-6 shadow-md h-[90vh] overflow-y-auto scrollbar-hide">

        {/* Help Circle Btn*/}
        <div className="flex items-center justify-center relative mb-6">
            <button
                onClick={() => setShowModal(true)}
                className="absolute left-0 p-1  bg-white text-black"
                aria-label="Help"
            >
            <HelpCircle className="w-5 h-5" />
            </button>



          <h2 className="text-center text-lg font-semibold text-gray-700">WalletConnect</h2>
        </div>

        {/* Wallet List */}
        <div  className="space-y-3">
          {blockchains.map((chain, index) => (
            <button
              key={index}
              className="w-full flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
            >
              <img src={chain.logo} alt={chain.name} className="w-6 h-6 rounded-full" />
              <span className="text-sm font-medium text-gray-700">{chain.name}</span>
            </button>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] text-gray-400 text-center mt-6">
          By connecting your wallet, you agree to &lt;dapp&gt; <br />
          <span className="underline">Terms of Service</span> and <span className="underline">Privacy Policy</span>
        </p>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm text-center shadow-xl">
            <h3 className="text-lg font-semibold mb-2">Why Connect Wallet?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Connecting your wallet allows you to interact securely with the app. Your data remains private and secure.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-2 px-4 py-2 bg-blue-100 text-blue-500 rounded hover:bg-blue-200 transition"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnectPage;
