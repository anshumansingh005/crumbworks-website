import { useState } from "react";

const faqs = [
  {
    question: "What makes your sourdough special?",
    answer:
      "Our sourdough is made with a 100-year-old starter and fermented for 48 hours for maximum flavor and digestibility.",
  },
  {
    question: "Do you offer gluten-free options?",
    answer:
      "While we specialize in traditional sourdough, we do offer a selection of gluten-free pastries baked in a separate area.",
  },
  {
    question: "Can I order online for pickup?",
    answer:
      "Yes! You can order through our website and pick up your fresh bread and pastries at our bakery every morning.",
  },
  {
    question: "Do you use organic ingredients?",
    answer:
      "Absolutely. We source 100% organic flour and local ingredients whenever possible to ensure the highest quality.",
  },
  {
    question: "Do you offer wholesale?",
    answer:
      "Yes, we partner with local cafes and restaurants. Please contact us for wholesale inquiries and pricing.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-6 md:px-12  text-brand-primary">
      <div className="max-w-[896px] mx-auto">
        <h2
          className="font-display text-[45px] md:text-[64px] text-blue mb-8 md:mb-12 text-center max-w-[618px] mx-auto"
          style={{ textShadow: "4px 6px 0px #0000001A" }}
        >
          Need to Know? We're Here to Help!
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.question}>
              <p className="text-sm md:text-base opacity-80 leading-relaxed">
                {faq.answer}
              </p>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};

const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" rounded-[12px] pt-[18px] pr-[24px] pb-[18px] pl-[24px] md:px-[32px] md:py-[18px] transition-all duration-300 bg-white">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left group"
      >
        <p className="text-base md:text-lg font-semibold text-brand-primary">
          {title}
        </p>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-2 md:w-4 md:h-3 text-brand-primary"
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
          grid transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "grid-rows-[1fr] opacity-100 pt-4"
              : "grid-rows-[0fr] opacity-0"
          }
        `}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default FAQ;
