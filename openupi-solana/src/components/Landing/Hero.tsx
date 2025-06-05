import HeroImage from "../../assets/OpenUpgLanding.webp";
import BlockchainSlider from "./BlockchainSlider";

export default function HeroSection() {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-20"
            style={{ backgroundImage: `url(${HeroImage})` }}
        >
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-0" />

            {/* Optional animated gradient orb or subtle noise */}
            {/* You can replace this with a Lottie animation or blurred radial gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-[100vh] bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
            <div className="relative z-20">
                <div className="flex items-center justify-center h-full">
                    <div className=" flex flex-col h-full px-6 pt-40">
                        <h1 className="text-6xl md:text-7xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] leading-tight">
                            One name. Every chain. Instant crypto
                        </h1>
                        <p className="mt-6 text-xl md:text-2xl text-white/80 font-light">
                            OpenUPG links your wallet to a simple ID or phone number. Send and receive crypto across Solana, Ethereum, and more — no addresses, no hassle
                        </p>

                        {/* CTA Button */}
                        <div className="mt-8 flex gap-4">
                            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition">
                                Get Started
                            </button>
                            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="pr-64">
                        <BlockchainSlider />
                    </div>
                </div>
            </div>
        </div>
    );
}
