import { useState } from "react";

const faqs = [
  {
    question: "What makes Crumbworks better than regular breadcrumbs?",
    answer:
      "We focus on the foundation of a great crumb: the bread itself. Unlike mass-produced brands that often use artificial fillers or stale leftovers, our breadcrumbs are crafted for optimal texture, flavor, and crunch. This means they coat more evenly, crisp up perfectly, and elevate the flavor of your dishes rather than just acting as a bland filler.",
  },
  {
    question: "Which product should I use: American or Panko?",
    answer:
      "It depends on the dish you are creating! Our American-style breadcrumbs have a finer, more uniform texture, making them perfect for binding ingredients together (like in meatballs or meatloaf) or creating a smooth, even coating on chicken and fish. Our Panko breadcrumbs are larger, flakier, and airier. They absorb less oil and provide a massive, shatteringly crisp crunch, making them ideal for frying or topping baked casseroles and mac and cheese.",
  },
  {
    question: "Are your breadcrumbs made from real bread?",
    answer:
      "Absolutely. We believe great breadcrumbs have to start with great bread. We use real, freshly baked loaves that are specifically formulated and toasted to create the perfect crumb structure. No shortcuts, just authentic ingredients.",
  },
  {
    question: "Are your products gluten-free or low in sugar?",
    answer:
      "For customers mindful of their nutritional goals and weight management, our standard crumbs are naturally low in sugar without compromising on taste or browning ability. We also recognize the importance of dietary restrictions and offer dedicated gluten-free options. Always check the specific product packaging for the exact nutritional profile and allergen information!",
  },
  {
    question: "Can I use Crumbworks for baking instead of frying?",
    answer:
      "Yes! Our breadcrumbs are incredibly versatile. You don't need to deep-fry to get a satisfying crunch. Toss our Panko or American crumbs with a little olive oil or melted butter and sprinkle them over baked fish, stuffed vegetables, or your favorite casseroles before they go into the oven. They will toast up beautifully.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-3.5 md:px-12  text-brand-primary">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-anton text-[45px] md:text-[64px] text-blue mb-8 md:mb-12 text-center max-w-154.5 mx-auto"
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

export const Accordion = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" rounded-xl pt-4.5 pr-6 pb-4.5 pl-6 md:px-8 md:py-4.5 transition-all duration-300 bg-white">
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
