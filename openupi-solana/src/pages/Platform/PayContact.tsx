import { useState } from "react";
import {
  PaperAirplaneIcon,
  UserIcon,
  UserPlusIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import {
  CurrencyRupeeIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

// import FullScreenModal from "../components/modal";

const dummyContacts = [
  { id: 1, name: "Digvijay Edake", phone: "+91 98765 43210" },
  { id: 2, name: "Arya Sharma", phone: "+91 91234 56789" },
  { id: 3, name: "Sonal Raj", phone: "+91 99887 76543" },
  { id: 4, name: "Ravi Mehta", phone: "+91 90000 11111" },
  { id: 5, name: "Nisha Rao", phone: "+91 98989 67676" },
  // Add more if needed
];

export default function PayContactPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = dummyContacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
  );

  return (
    <>
      <div className="w-screen h-screen bg-gray-100 p-4 font-sans flex md:flex-row flex-col mt-12">
        {/* Recent Contacts */}
        <div className="mb-6 w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 text-sm">Recent Contacts</span>
          </div>
          <div className="flex md:flex-wrap overflow-x-auto md:overflow-y-auto gap-4 justify-center">
            {[
              "Kanha Yadav",
              "Mike Mazowski",
              "Krishna Ghoman",
              "Digvijay Edake",
              "Mayur Tan",
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

        {/* People Section */}
        <div className="bg-white rounded-xl shadow-md p-4 w-full">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-700 font-semibold flex items-center space-x-1">
              <UsersIcon className="h-5 w-5 mr-1" />
              <span>50 Peoples</span>
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => console.log("User icon clicked")}
                className="text-black-500 hover:text-blue-700"
              >
                <UserPlusIcon className="h-6 w-6" />
              </button>
              <button
                onClick={() => console.log("Search icon clicked")}
                className="text-black-500 hover:text-blue-700"
              >
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {[
              "Kanha Yadav",
              "Mike Mazowski",
              "Krishna Ghoman",
              "Digvijay Edake",
              "Mayur Tan",
            ].map((person, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-3.5 bg-gray-50 rounded-[25px] hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 transition-colors duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full">
                    <UserIcon />
                  </div>
                  <span className="font-medium">{person}</span>
                </div>
                <button className="bg-blue-500 text-white rounded-full p-2 flex items-center justify-center shadow-md">
                  <PaperAirplaneIcon className="rotate-325 h-5.2 w-5.5 hover:animate-bounce" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
