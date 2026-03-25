import { Assets } from "@assets";
import { useRef, useState } from "react";
const CustomerReview = [
  {
    id: 1,
    src: Assets.photu1,
    name: "Anjali",
    review:
      "These are hands down the best breadcrumbs I've ever used. The Panko adds such an incredible, shatteringly crisp texture to my homemade cutlets. Highly recommend!",
  },
  {
    id: 2,
    src: Assets.photu2,
    name: "Ryan",
    review:
      "I'm so impressed by the quality! You can really tell these are made from fresh, artisanal bread and not just leftover scraps. It makes a huge difference in my recipes.",
  },
  {
    id: 3,
    src: Assets.photu3,
    name: "Harsh",
    review:
      "Absolutely love the texture and flavor. My order arrived perfectly packaged, and the breadcrumbs toast up beautifully in the oven without burning. Will definitely buy again.",
  },
  {
    id: 4,
    src: Assets.photu4,
    name: "Raj",
    review:
      "Crumbworks has completely elevated my cooking. I use their American-style crumbs for binding my meatballs, and they hold together perfectly every single time. 10/10!",
  },
  {
    id: 5,
    src: Assets.photu1,
    name: "Anjali",
    review:
      "Such a game-changer for my kitchen! The crunch is unbelievable and it doesn't soak up too much oil when frying. My family noticed the difference immediately.",
  },
];

const ReviewCard = ({ data }: { data: typeof CustomerReview[0] }) => {
  return (
    <div
      className={`
        shrink-0 snap-center relative
        w-[235px] h-[418px] lg:w-[312px] lg:h-[472px]
        cursor-pointer
      `}
    >
      {/* 1. Masked Content Container (The "Cookie Cutter") */}
      <div
        className="absolute inset-0 flex flex-col w-full h-full"
        style={{
          // This uses your solid SVG to clip the image and blue background
          WebkitMaskImage: `url(${Assets.frameMask})`,
          WebkitMaskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskImage: `url(${Assets.frameMask})`,
          maskSize: "100% 100%",
          maskRepeat: "no-repeat",
        }}
      >
        {/* Top Half: Photo */}
        <div
          className="h-1/2 w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${data.src})` }}
        />

        {/* Bottom Half: Blue Background & Text */}
        <div className="h-1/2 w-full p-4 lg:p-6 flex flex-col items-center bg-[#0D52D6]">
          <p className="text-center text-white font-sans text-sm lg:text-base leading-relaxed lg:text-[13px] text-[12px]">
            "{data.review}"
          </p>
          {/* I added the reviewer name here to match your Figma mockup! */}
          <p className="text-white font-bold mt-3 lg:mt-4 text-sm lg:text-[13px] text-[12px]">
            {data.name}
          </p>
        </div>
      </div>

      {/* 2. Yellow Border Overlay */}
      <img
        src={Assets.customerFrame} // Your transparent yellow frame image
        alt="Review frame"
        className="absolute inset-0 w-full h-full object-fill pointer-events-none"
        loading="lazy"
      />
    </div>
  );
};

const Reviews = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      const children = container.children;
      let minDistance = Infinity;
      let newIndex = 0;

      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        const childRect = child.getBoundingClientRect();
        const childCenter = childRect.left + childRect.width / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          newIndex = i;
        }
      }
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="bg-pink relative  overflow-hidden">
      <div className="w-full pt-9 md:pt-[100px] flex justify-center -top-[9%] left-0 md:left-[0] md:-top-[26%]">
        {/* md:left-[20%] md:-top-[24%] */}
        <picture className="items-center">
          <source
            media="(min-width: 769px)"
            srcSet={Assets.reviewText}
            className=""
          />
          <img
            src={Assets.reviewTextMb}
            alt="Freshly baked artisanal bread"
            className=""
            loading="lazy"
          />
        </picture>
      </div>
      <div className="max-w-[1400px] mx-auto relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full hidden lg:flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full hidden lg:flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto md:gap-13 gap-5 pb-[16px] p-3.5 snap-x snap-mandatory no-scrollbar items-center w-full max-w-[1219px] mx-auto"
        >
          {CustomerReview.map((review) => (
            <ReviewCard key={review.id} data={review} />
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4 lg:hidden mb-[32px]">
          {CustomerReview.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === activeIndex ? "bg-blue" : "bg-blue/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
