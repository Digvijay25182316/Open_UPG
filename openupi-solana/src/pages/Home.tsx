import { ClipboardIcon, CurrencyRupeeIcon } from "@heroicons/react/24/outline";
import HeroImage from "../assets/OpenUpgLanding.webp";
import {
  UserIcon,
  PhoneIcon,
  AtSymbolIcon,
  BanknotesIcon,
  QrCodeIcon,
  GiftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import TransactionCard from "../components/TransactionCard";
function HomePage() {
  const payOptions = [
    { id: "contact", label: "Pay Contact", icon: UserIcon, path: "#" },
    {
      id: "phone",
      label: "Pay Phone",
      icon: PhoneIcon,
      path: "/platform/paycontacts",
    },
    {
      id: "upi",
      label: "Pay ID / Wallet",
      icon: AtSymbolIcon,
      path: "/platform/walletid",
    },
    { id: "wallet", label: "Wallet Transfer", icon: BanknotesIcon, path: "#" },
    { id: "scan", label: "Scan & Pay", icon: QrCodeIcon, path: "#" },
    { id: "rewards", label: "Rewards", icon: GiftIcon, path: "#" },
  ];
  return (
    <div>
      <div
        className="relative w-full h-[250px] bg-cover bg-center brightness-90 "
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70 pt-14">
          <div className="flex items-center w-full h-full">
            <TransactionCard />
          </div>
        </div>
      </div>
      <div className="px-4 py-6">
        <div className="grid grid-cols-3 gap-10">
          {payOptions.map((action) => (
            <button
              key={action.id}
              className="flex flex-col items-center justify-center p-3 cursor-pointer"
              onClick={() => (window.location.href = action.path)}
            >
              <action.icon className="h-8 w-8 md:h-10 md:w-10 text-cyan-600" />
              <span className="mt-2 font-bold text-cyan-600 text-center">
                {action.label}
              </span>
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6">
          <p className="text-center text-sm font-bold mx-4 mt-4 px-4 py-1.5 rounded-full bg-cyan-600 shadow-md w-max flex items-center gap-2">
            UPI ID : Digvijay@234567890
            <ClipboardIcon
              className="h-4 w-4 text-white cursor-pointer hover:scale-105 transition"
              onClick={() =>
                navigator.clipboard.writeText("Digvijay@234567890")
              }
            />
          </p>
        </div>

        <div>
          <div className="mb-6 w-full">
            <div className="flex justify-between items-center mb-2 w-full">
              <span className="text-gray-600 text-lg text-center w-full py-10">
                Recent Contacts
              </span>
            </div>
            <div className="flex md:flex-wrap overflow-x-auto md:overflow-y-auto gap-4 ">
              {[
                "Kanha Yadav",
                "Mike Mazowski",
                "Krishna Ghoman",
                "Digvijay Edake",
                "Mayur Tan",
                "hari bol",
                "hari bol",
                "hari bol",
                "hari bol",
                "hari bol",
                "hari bol",
                "hari bol",
                "hari bol",
                "hari bol",
                "hari bol",
                "hari bol",
                "hari bol",
              ].map((name, idx) => (
                <div
                  key={idx}
                  className="w-32 bg-black text-white rounded-lg p-2 flex-shrink-0"
                >
                  <div className="h-20 w-full bg-gray-800 rounded-md mb-2"></div>
                  <div className="text-sm font-semibold truncate">{name}</div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>
                      <PaperAirplaneIcon className="rotate-325 h-3.2 w-3.5" />
                    </span>
                    <span>
                      <div className="flex items-center space-x-1">
                        <CurrencyRupeeIcon className="h-4 w-4" />
                        <span className="text-xs font-medium text-white">
                          250
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
