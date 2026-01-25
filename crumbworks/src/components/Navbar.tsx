import { useEffect, useState } from "react";
import companyLogo from "../assets/company-logo.svg";
import facebook from "../assets/fb-icon.svg";
import instagram from "../assets/instagram-icon.svg";
import linkedin from "../assets/linkedin-icon.svg";

interface NavLink {
  name: string;
  href: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const leftLinks: NavLink[] = [
    { name: "Our Flavour", href: "#flavour" },
    { name: "Our Story", href: "#about" },
  ];

  // Logic: Hide on scroll down, show on scroll up
  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 80) {
        // Scrolling Down: Hide
        setIsVisible(false);
        setIsOpen(false); // Auto-close mobile menu on scroll down
      } else {
        // Scrolling Up: Show
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 inset-x-4 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-32 opacity-0"
      }`}
    >
      <div className="mx-auto relative">
        {/* Main Navbar Container */}
        <div
          className="
            relative z-20 bg-white
            rounded-br-[40px] rounded-tl-[40px] rounded-tr-none rounded-bl-none
            px-6 py-3 flex items-center justify-between
          "
        >
          {/* 1. LEFT: Mobile Hamburger (shown only on mobile) */}
          <div className="flex-1 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-primary p-2 -ml-2"
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`h-0.5 bg-current transition-all ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`h-0.5 bg-current transition-all ${
                    isOpen ? "opacity-0" : "w-4"
                  }`}
                />
                <span
                  className={`h-0.5 bg-current transition-all ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          {/* 2. LEFT: Desktop Social Icons (hidden on mobile) */}
          <div className="hidden md:flex flex-1 items-center gap-1">
            <a
              href="https://instagram.com"
              target="_blank"
              className="p-2 hover:opacity-70 transition"
            >
              <img src={instagram} alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              className="p-2  px-3 hover:opacity-70 transition"
            >
              <img src={facebook} alt="Facebook" className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="p-2 hover:opacity-70 transition"
            >
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>

          {/* 3. CENTER: Logo */}
          <div className="flex-none">
            <a href="#home">
              <img
                src={companyLogo}
                alt="Crumbworks Logo"
                className="h-8 md:h-10"
              />
            </a>
          </div>

          {/* 4. RIGHT: Desktop Links */}
          <div className="hidden md:flex flex-1 gap-8 justify-end">
            {leftLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest font-bold text-brand-primary hover:text-brand-accent transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 5. Mobile Spacer (Keeps logo centered on mobile) */}
          <div className="flex-1 md:hidden" />
        </div>

        {/* 6. MOBILE MENU OVERLAY */}
        <div
          className={`
            md:hidden absolute top-[calc(100%-20px)] left-0 w-full pt-10 pb-6 px-8
            bg-white rounded-br-[40px] shadow-2xl z-10
            transition-all duration-500 ease-in-out
            ${
              isOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10 pointer-events-none"
            }
          `}
        >
          <div className="flex flex-col gap-4">
            {/* Links */}
            {leftLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-display font-bold text-brand-primary hover:text-brand-accent"
              >
                {link.name}
              </a>
            ))}

            {/* Social Media Icons moved here for Mobile */}
            <div className="flex items-center gap-6 border-t border-gray-100">
              <a href="https://instagram.com" target="_blank">
                <img src={instagram} className="w-6 h-6" />
              </a>
              <a href="https://facebook.com" target="_blank">
                <img src={facebook} className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <img src={linkedin} className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
