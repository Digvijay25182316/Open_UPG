import BlockchainSlider from "../components/BlockchainSlider";
import HeroImage from "../assets/OpenUpgLanding.webp";
import FeaturesSection from "../components/Feature";
import FAQSection from "../components/Faqs";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div
            className="relative min-h-screen bg-cover bg-center bg-no-repeat pt-20"
            style={{ backgroundImage: `url(${HeroImage})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-0" />
            <BlockchainSlider />
            <div className="absolute bottom-0 left-0 right-0 h-[100vh] bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
            <div className="relative z-20">

                <div className="flex flex-col items-center h-full text-center text-white">
                    <div className=" flex flex-col items-center h-full  px-6">
                        <h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] leading-tight">
                            Instant Exchange, Seamless Connections
                        </h1>
                        <p className="mt-6 text-xl text-white/80 font-light">
                            OpenUPG links your wallet to a simple ID or phone number. Send and receive crypto across Solana, Ethereum, and more — no addresses, no hassle
                        </p>
                        <div className="mt-8 flex gap-4">
                            <Link to={"/platform"}>
                                <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transition cursor-pointer">
                                    Get Started
                                </button>
                            </Link>
                            <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                <FeaturesSection />
                <FAQSection />
            </div>
        </div>
    );
}
