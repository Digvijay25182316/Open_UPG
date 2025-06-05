import LogoImage from "../../assets/Logo.webp";

function Header() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 text-white px-6 py-3 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
                <img src={LogoImage} alt="Logo" className="w-10 h-10 object-contain" />
                <span className="text-lg font-semibold">OpenUPG</span>
            </div>
            <div className="hidden md:flex gap-6 text-sm font-medium text-white/80">
                {/* Optional navigation links */}
                <a href="#features" className="hover:text-white transition">Features</a>
                <a href="#docs" className="hover:text-white transition">Docs</a>
                <a href="#wallet" className="hover:text-white transition">Wallet</a>
            </div>
        </div>
    );
}

export default Header;
