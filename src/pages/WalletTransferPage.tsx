import React, { useState } from "react";

const wallets = [
  {
    name: "Bitcoin",
    logo: "https://cdn.jsdelivr.net/gh/simplr-sh/coin-logos/images/bitcoin/large.png",
    primary: true,
  },
  {
    name: "Ethereum",
    logo: "https://cdn.jsdelivr.net/gh/simplr-sh/coin-logos/images/ethereum/large.png",
    primary: false,
  },
  {
    name: "Solana",
    logo: "https://cdn.jsdelivr.net/gh/simplr-sh/coin-logos/images/solana/large.png",
    primary: false,
  },
];

const WalletTransferPage = () => {
  const [selectedWallet, setSelectedWallet] = useState(wallets[0].name);

  return (
    <div className="w-screen h-screen bg-[#f9f9f9] flex items-center justify-center">
      <div className="w-full max-w-md px-4 py-6 flex flex-col h-full">
        <h1 className="text-xl font-bold text-gray-800 mb-1">Wallet Transfer</h1>
        <p className="text-sm text-gray-600 mb-4">Select Wallet to Transfer From</p>

        <div className="flex-1 overflow-y-auto space-y-3">
          {wallets.map((wallet, index) => (
            <button
              key={index}
              onClick={() => setSelectedWallet(wallet.name)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-xl shadow-sm ${
                selectedWallet === wallet.name
                  ? "bg-blue-50 border border-blue-500"
                  : "bg-[#f4f5f7]"
              }`}
            >
              <div className="flex items-center gap-3">
                <img
                  src={wallet.logo}
                  alt={wallet.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-left">
                  <p className="text-base font-semibold text-gray-800">{wallet.name}</p>
                  {wallet.primary && (
                    <span className="text-xs font-medium text-green-500">
                      Primary
                    </span>
                  )}
                </div>
              </div>

              <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-blue-500">
                {selectedWallet === wallet.name && (
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-base hover:bg-blue-700 transition"
          onClick={() => alert(`Proceeding with ${selectedWallet}`)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WalletTransferPage;
