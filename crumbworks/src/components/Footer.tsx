import type { ReactNode } from "react";
import { useState } from "react";
import companyLogo from "../assets/company-logo-white.svg";
import facebook from "../assets/fb-icon.svg";
import instagram from "../assets/instagram-icon.svg";
import linkedin from "../assets/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="bg-blue text-white py-12 px-3.5 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-12">
        <div className="flex flex-col gap-6 md:flex-1 text-white">
          <a href="#home" className="inline-block">
            <img
              src={companyLogo}
              alt="Crumbworks Logo"
              className="h-10 w-auto"
            />
          </a>
          <p className="text-sm leading-relaxed opacity-80 max-w-xs">
            We are crumb works, We say this as people who've been personally
            victimised by sad, stale supermarket crumbs that taste like the
            cardboard box they came in. At some point, we realised the
            breadcrumb aisle wasn't broken, it had just never been built
            properly.
          </p>
        </div>

        <FooterAccordion title="Our Flavours">
          <div className="flex flex-col gap-3">
            <a
              href="#sourdough"
              className="text-sm hover:text-brand-accent transition-colors"
            >
              Sourdough
            </a>
            <a
              href="#pastries"
              className="text-sm hover:text-brand-accent transition-colors"
            >
              Pastries
            </a>
          </div>
        </FooterAccordion>

        <FooterAccordion title="Legal">
          <div className="flex flex-col gap-3">
            <a
              href="/privacy"
              className="text-sm hover:text-brand-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm hover:text-brand-accent transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/cookies"
              className="text-sm hover:text-brand-accent transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </FooterAccordion>

        <FooterAccordion title="Follow Us">
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src={facebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </FooterAccordion>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100 text-center md:text-left">
        <p className="text-xs opacity-50 uppercase tracking-wider">
          &copy; {new Date().getFullYear()} Crumbworks. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

interface FooterAccordionProps {
  title: string;
  children: ReactNode;
}

const FooterAccordion = ({ title, children }: FooterAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white rounded-xl pt-4.5 pr-6 pb-4.5 pl-6 md:border-none md:p-0 md:flex-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:mb-6 md:cursor-default md:pointer-events-none group text-left"
      >
        <h3 className="font-bold text-xs uppercase tracking-widest text-white md:pointer-events-auto">
          {title}
        </h3>
        <span
          className={`md:hidden transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-96 opacity-100 pt-4" : "max-h-0 opacity-0"}
          md:max-h-none md:opacity-100 md:pt-0 md:block
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default Footer;
