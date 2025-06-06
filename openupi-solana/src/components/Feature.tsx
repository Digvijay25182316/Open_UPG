import { motion } from 'framer-motion';

const features = [
    {
        icon: '💳',
        title: 'Unified Payment Gateway',
        description:
            'Accept crypto from Solana, Ethereum, and more — all through one platform.',
    },
    {
        icon: '⚡',
        title: 'Lightning Fast Transactions',
        description: "Enjoy sub-second transactions with Solana's high-speed architecture.",
    },
    {
        icon: '🌐',
        title: 'Open Source & Transparent',
        description:
            'Fork, audit, and contribute to a fully open system — no black boxes.',
    },
    {
        icon: '🔗',
        title: 'Multi-Chain by Default',
        description: 'Designed for interoperability and seamless cross-chain payments.',
    },
    {
        icon: '🔐',
        title: 'Secure by Design',
        description: 'End-to-end encryption and wallet-based security baked in.',
    },
    {
        icon: '🛠️',
        title: 'Developer Friendly',
        description:
            'Simple APIs, fast onboarding, and powerful SDKs to integrate quickly.',
    },
];

export default function FeaturesSection() {
    return (
        <div className="min-h-screen text-white py-20 px-6 md:px-12 lg:px-24 " id="features">
            <motion.section>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold">Why OpenUPG?</h2>
                    <p className="mt-4 text-lg text-gray-400">
                        The modern crypto payment stack for web3 builders and global users
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.article
                            key={index}
                            className="bg-zinc-950 text-black p-6 rounded-2xl shadow-md border-2 border-gray-800 hover:shadow-lg"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.article>
                    ))}
                </div>
            </motion.section>
        </div>
    );
}
