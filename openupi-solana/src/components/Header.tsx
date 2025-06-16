import { Link } from "react-router-dom";
import LogoImage from "../assets/Logo.webp";

function Header() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 text-white px-6 py-2 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-3">
        <img
          src={LogoImage}
          alt="Hero"
          className="h-10 w-10" // Adjust size as needed
        />
        <span className="text-lg font-semibold">OpenUPG</span>
      </div>
      <div className="flex items-center gap-6 text-sm font-medium text-white/80">
        <a
          href="#features"
          className="hover:text-white transition hidden md:block"
        >
          Features
        </a>
        <a href="#faq" className="hover:text-white transition hidden md:block">
          Faq?
        </a>
        <a href="#docs" className="hover:text-white transition hidden md:block">
          Docs
        </a>
        <Link to={"/platform"}>
          <button className="bg-white text-black px-6 py-1.5 rounded-lg font-semibold shadow-lg hover:scale-105 transition cursor-pointer">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
