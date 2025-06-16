import LogoImage from "../../assets/Logo.webp";
import { UserIcon } from "@heroicons/react/24/outline"; // Import any icons you need
import ExpandableSearch from "./ExpandableInput";

function Header() {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/5 text-white px-6 py-2 flex items-center justify-between shadow-md"
      id="Content-Header"
    >
      <div className="flex items-center justify-between gap-3 w-full">
        <div className="flex items-center gap-3">
          <img
            src={LogoImage}
            alt="Hero"
            className="h-10 w-10" // Adjust size as needed
          />
          <span className="text-lg font-semibold md:block hidden logoText">
            OpenUPG
          </span>
        </div>
        <div className="pl-auto flex items-center gap-6">
          <ExpandableSearch />
          <span>
            <UserIcon className="h-5 w-5" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
