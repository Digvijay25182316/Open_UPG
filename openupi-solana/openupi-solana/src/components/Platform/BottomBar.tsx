import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    HomeIcon,
    UserCircleIcon,
    QrCodeIcon,
} from '@heroicons/react/24/solid';

function BottomBar() {
    const [active, setActive] = useState('home');
    const navItems = [
        { id: 'home', label: 'Home', icon: HomeIcon },
        { id: 'scan', label: 'Scan', icon: QrCodeIcon },
        { id: 'profile', label: 'Profile', icon: UserCircleIcon },
    ];

    return (
        <div className="md:hidden block fixed bottom-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 text-white px-6 py-2 flex items-center justify-between shadow-md">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;

                return (
                    <button
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className="relative flex flex-col items-center justify-center text-sm text-gray-500 hover:text-black transition"
                    >
                        <Icon className={`h-6 w-6 ${isActive ? 'text-cyan-600' : ''}`} />
                        <span className="text-xs mt-1">{item.label}</span>

                        {isActive && (
                            <motion.div
                                layoutId="active-indicator"
                                className="absolute -bottom-1 h-[4px] w-6 rounded-full bg-cyan-600"
                                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                        )}
                    </button>
                );
            })}
        </div>
    )
}

export default BottomBar