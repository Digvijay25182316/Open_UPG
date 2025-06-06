function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo + Tagline */}
                <div>
                    <h2 className="text-2xl font-bold">OpenUPG</h2>
                    <p className="text-sm mt-2 text-gray-400">Simplifying global crypto payments with one ID.</p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold mb-2">Navigation</h3>
                    <ul className="space-y-1 text-sm text-gray-400">
                        <li><a href="#features" className="hover:text-white">Features</a></li>
                        <li><a href="#docs" className="hover:text-white">Documentation</a></li>
                        <li><a href="#faq" className="hover:text-white">FAQ</a></li>
                        <li><a href="#contact" className="hover:text-white">Contact</a></li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="font-semibold mb-2">Legal</h3>
                    <ul className="space-y-1 text-sm text-gray-400">
                        <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
                        <li><a href="/open-source" className="hover:text-white">Open Source License</a></li>
                    </ul>
                </div>

                {/* Social / Links */}
                <div>
                    <h3 className="font-semibold mb-2">Connect</h3>
                    <div className="flex space-x-4 text-gray-400">
                        <a href="https://github.com/openupg" target="_blank" className="hover:text-white">GitHub</a>
                        <a href="https://twitter.com/openupg" target="_blank" className="hover:text-white">Twitter</a>
                        <a href="mailto:support@openupg.io" className="hover:text-white">Email</a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
                © {new Date().getFullYear()} OpenUPG. Built with ♥ for the decentralized world.
            </div>
        </footer>

    )
}

export default Footer
