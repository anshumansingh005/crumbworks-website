import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "+917009303126"; // Replace with your actual WhatsApp business number
  const message = "Hi! I'm interested in Crumbworks products.";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const confirmed = window.confirm(
      "This will open WhatsApp in a new tab. Do you want to continue?"
    );

    if (!confirmed) {
      e.preventDefault();
    }
  };

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 hidden md:flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-xl hover:scale-110 transition-transform duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white fill-current"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.735 5.606 2.13 8.025L0.575 31.425l7.55-1.968C10.45 30.675 13.163 31.35 16 31.35c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 28.675c-2.525 0-5.037-.65-7.238-1.875l-.525-.3-5.362 1.375 1.438-5.225-.338-.538c-1.4-2.275-2.137-4.887-2.137-7.612 0-7.363 6.012-13.35 13.35-13.35s13.35 6.012 13.35 13.35c0 7.338-5.987 13.35-13.35 13.35zm7.325-10c-.4-.2-2.375-1.175-2.738-1.313-.362-.138-.625-.2-.887.2-.262.4-.1.175-1.287 1.313-.262.262-.537.3-.937.1s-1.7-.625-3.237-1.988c-1.188-1.05-1.987-2.35-2.225-2.75-.237-.4-.025-.612.175-.812.175-.175.4-.462.6-.7.2-.237.262-.4.4-.662.138-.262.063-.5-.037-.7-.1-.2-.887-2.138-1.213-2.925-.313-.763-.637-.663-.875-.675-.225-.013-.475-.013-.737-.013-.263 0-.688.1-1.05.5s-1.375 1.35-1.375 3.3c0 1.95 1.425 3.838 1.625 4.113.2.275 2.8 4.275 6.787 6 2.338 1 2.8.8 3.813.75 1.112-.05 2.375-.975 2.712-1.913.337-.938.337-1.738.237-1.913-.1-.175-.363-.275-.763-.475z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
