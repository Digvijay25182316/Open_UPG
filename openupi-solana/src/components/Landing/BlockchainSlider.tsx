// components/BlockchainSlider.tsx
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { blockchains } from "../../assets/Chains";

export default function BlockchainLogoCarousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % blockchains.length);
        }, 1500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center h-48">
            <AnimatePresence mode="wait">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <motion.img
                        key={blockchains[index].name}
                        src={blockchains[index].logo}
                        alt={blockchains[index].name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.8 }}
                        className="h-64 w-64 object-contain"
                    />
                    <p className="text-white text-xl font-bold">{blockchains[index]?.name}</p>
                </div>
            </AnimatePresence>
        </div >
    );
}