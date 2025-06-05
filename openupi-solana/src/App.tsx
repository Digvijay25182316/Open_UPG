// File: src/App.tsx
// import React, { useEffect, useState } from "react";
// import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// import {
//   ConnectionProvider,
//   WalletProvider,
//   useWallet,
// } from "@solana/wallet-adapter-react";
// import {
//   WalletModalProvider,
//   WalletMultiButton,
// } from "@solana/wallet-adapter-react-ui";
// import {
//   PhantomWalletAdapter,
//   SolflareWalletAdapter,
// } from "@solana/wallet-adapter-wallets";
// import { clusterApiUrl, Connection } from "@solana/web3.js";
// import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import Landing from "./pages/Landing";
import Header from "./components/Header/Header";

// const network = WalletAdapterNetwork.Devnet;
// const endpoint = clusterApiUrl(network);
// const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];

// // This component shows wallet info & a fake send form
// const WalletActions: React.FC = () => {
//   const { publicKey, connected, sendTransaction } = useWallet();
//   const [balance, setBalance] = useState<number | null>(null);
//   const [receiver, setReceiver] = useState("");
//   const [amount, setAmount] = useState("");
//   const connection = new Connection(endpoint);

//   useEffect(() => {
//     if (!publicKey) {
//       setBalance(null);
//       return;
//     }
//     // Fetch SOL balance on devnet
//     connection
//       .getBalance(publicKey)
//       .then((bal) => setBalance(bal / 1e9))
//       .catch(() => setBalance(null));
//   }, [publicKey]);

//   const onSend = async () => {
//     if (!publicKey) {
//       alert("Connect your wallet first!");
//       return;
//     }
//     if (!receiver || !amount) {
//       alert("Fill receiver address and amount");
//       return;
//     }
//     // For MVP: just alert the data (mock send)
//     alert(
//       `Sending ${amount} USDC to ${receiver}\n\n(This is a demo, no real transaction)`
//     );
//     setReceiver("");
//     setAmount("");
//   };

//   return (
//     <div className="w-full max-w-md p-4 bg-white rounded-md shadow-md">
//       <h2 className="text-lg font-semibold mb-2">Wallet Info</h2>
//       {connected && publicKey ? (
//         <>
//           <p>
//             <strong>Address:</strong>{" "}
//             {publicKey.toBase58().slice(0, 6)}...
//             {publicKey.toBase58().slice(-6)}
//           </p>
//           <p>
//             <strong>SOL Balance:</strong>{" "}
//             {balance !== null ? balance.toFixed(4) : "Loading..."}
//           </p>
//           <hr className="my-4" />
//           <h3 className="font-semibold mb-2">Send USDC (Demo)</h3>
//           <input
//             className="w-full mb-2 p-2 border rounded"
//             placeholder="Receiver wallet address"
//             value={receiver}
//             onChange={(e) => setReceiver(e.target.value)}
//           />
//           <input
//             className="w-full mb-2 p-2 border rounded"
//             placeholder="Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             type="number"
//             min="0"
//             step="any"
//           />
//           <button
//             className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
//             onClick={onSend}
//           >
//             Send USDC
//           </button>
//         </>
//       ) : (
//         <p>Please connect your wallet to see info and send payments.</p>
//       )}
//     </div>
//   );
// };

const App: React.FC = () => {
  return (
    // <ConnectionProvider endpoint={endpoint}>
    //   <WalletProvider wallets={wallets} autoConnect>
    //     <WalletModalProvider>
    //       <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
    //         <h1 className="text-4xl font-bold mb-6 text-center text-orange-600">
    //           OpenUPI on Solana
    //         </h1>
    //         <WalletMultiButton className="mb-6" />
    //         <WalletActions />
    //         <footer className="mt-10 text-center text-gray-400 text-xs">
    //           Powered by Solana Devnet
    //         </footer>
    //       </div>
    //     </WalletModalProvider>
    //   </WalletProvider>
    // </ConnectionProvider>
    <div className={""} >
      <Header />
      <Landing />
    </div >
  );
};

export default App;
