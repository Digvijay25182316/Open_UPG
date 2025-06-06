import { motion } from 'framer-motion';
const faqs = [
    {
        question: "What is OpenUPG?",
        answer: "OpenUPG is a multi-chain crypto payment gateway that lets you send and receive digital currency using a simple ID like a phone number or username — no wallet addresses needed.",
    },
    {
        question: "How does it work?",
        answer: "OpenUPG maps your phone number or chosen ID to your wallet address securely. Anyone can send you crypto by scanning your code or entering your ID — like UPI or Venmo, but for blockchain.",
    },
    {
        question: "What blockchains are supported?",
        answer: "OpenUPG supports Solana, Ethereum, Polygon, and other major chains. More chains will be added over time.",
    },
    {
        question: "Is my wallet secure?",
        answer: "Yes. Your private keys are never stored. OpenUPG only maps public information and uses secure encryption for all identity resolutions.",
    },
    {
        question: "Can I use any wallet?",
        answer: "Yes! OpenUPG works with wallets like Phantom, MetaMask, Coinbase Wallet, and others that support scan-based or address-based transactions.",
    },
    {
        question: "What happens if someone enters the wrong phone number?",
        answer: "Before sending, users see the resolved ID or name, reducing the chance of sending funds to the wrong address.",
    },
    {
        question: "Do I need to register?",
        answer: "Yes, you need to verify your ID once and link it to your wallet. After that, anyone can send crypto to your ID.",
    },
    {
        question: "Is OpenUPG open source?",
        answer: "Yes! You can view, contribute to, or fork the source code on GitHub.",
    },
    {
        question: "Can I change or unlink my ID?",
        answer: "Yes, you can manage your linked IDs or phone numbers from your dashboard at any time.",
    },
    {
        question: "Is OpenUPG free to use?",
        answer: "Yes. OpenUPG is free to use. Standard network transaction fees may still apply.",
    },
];

export default function FAQSection() {
    return (
        <section id="faq" className="py-16 px-6">
            <motion.section>
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {faqs.map((faq, index) => (
                            <motion.article key={index} className="bg-stone-950 p-6 rounded-xl shadow hover:shadow-md transition border-2 border-gray-800">
                                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                                <p className="text-gray-600 mt-2">{faq.answer}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </motion.section>
        </section>
    );
}
