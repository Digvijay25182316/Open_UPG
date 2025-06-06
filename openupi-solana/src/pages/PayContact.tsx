import { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";

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
        <div className="min-h-screen bg-white absolute w-full z-100">
            <div className="sticky top-0 z-10 bg-white p-4 shadow-sm">
                <input
                    type="text"
                    placeholder="Search contact or phone number"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="p-4 space-y-4">
                {filteredContacts.map((contact) => (
                    <div
                        key={contact.id}
                        className="flex items-center gap-4 p-3 bg-gray-100 rounded-lg shadow-sm hover:bg-gray-200 cursor-pointer transition"
                        onClick={() => alert(`Selected ${contact.name}`)}
                    >
                        <div className="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full">
                            <UserIcon className="h-5 w-5 text-indigo-600" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">{contact.name}</p>
                            <p className="text-sm text-gray-500">{contact.phone}</p>
                        </div>
                    </div>
                ))}

                {filteredContacts.length === 0 && (
                    <p className="text-gray-500 text-center mt-10">No contacts found.</p>
                )}
            </div>
        </div>
    );
}
