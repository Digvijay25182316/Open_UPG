import { ClipboardIcon } from "@heroicons/react/24/outline";
import HeroImage from "../assets/OpenUpgLanding.webp";
import {
    UserIcon,
    PhoneIcon,
    AtSymbolIcon,
    BanknotesIcon,
    QrCodeIcon,
    GiftIcon,
} from '@heroicons/react/24/solid';
function HomePage() {
    const payOptions = [
        { id: 'contact', label: 'Pay Contact', icon: UserIcon, path: "#" },
        { id: 'phone', label: 'Pay Phone', icon: PhoneIcon, path: "/platform/paycontacts" },
        { id: 'upi', label: 'Pay ID / Wallet', icon: AtSymbolIcon, path: "#" },
        { id: 'wallet', label: 'Wallet Transfer', icon: BanknotesIcon, path: "#" },
        { id: 'scan', label: 'Scan & Pay', icon: QrCodeIcon, path: "#" },
        { id: 'rewards', label: 'Rewards', icon: GiftIcon, path: "#" },
    ];
    return (
        <div        >
            <div className="relative w-full h-[250px] bg-cover bg-center brightness-90" style={{ backgroundImage: `url(${HeroImage})` }}>
                <div className="absolute inset-0 bg-black/70 pt-10">
                    something
                </div>
            </div>
            <div className="px-4 py-6">
                <div className="grid grid-cols-3">
                    {payOptions.map((action) => (
                        <button
                            key={action.id}
                            className="flex flex-col items-center justify-center p-3"
                            onClick={() => window.location.href = action.path}
                        >
                            <action.icon className="h-8 w-8 md:h-10 md:w-10 text-cyan-600" />
                            <span className="mt-2 font-bold text-cyan-600 text-center">{action.label}</span>
                        </button>
                    ))}
                </div>
                <div className="flex justify-center items-center mt-6">
                    <p className="text-center text-sm font-bold mx-4 mt-4 px-4 py-1.5 rounded-full bg-cyan-600 shadow-md w-max flex items-center gap-2">
                        UPI ID : Digvijay@234567890
                        <ClipboardIcon className="h-4 w-4 text-white cursor-pointer hover:scale-105 transition" onClick={() => navigator.clipboard.writeText("Digvijay@234567890")} />
                    </p>
                </div>

            </div>
        </div>
    )
}

export default HomePage