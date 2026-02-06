import { Assets } from "@assets";
import { useRef, useState } from "react";

export interface Feature {
  id: number;
  title: string;
  src: string;
}
const features: Feature[] = [
  { id: 1, title: "NO PRESERVATIVES", src: Assets.noPreservatives },
  { id: 2, title: "LOW SODIUM", src: Assets.lowSodium },
  { id: 3, title: "HIGH FIBRE", src: Assets.highFibre },
  { id: 4, title: "COATS. BINDS. FINISHES", src: Assets.coatsBinds },
  { id: 5, title: "FROM REAL BREAD", src: Assets.realBread },
  { id: 6, title: "TOASTED RIGHT", src: Assets.toastedRight },
];

const chunkedFeatures: Feature[][] = [];
for (let i = 0; i < features.length; i += 3) {
  chunkedFeatures.push(features.slice(i, i + 3));
}

const FeatureBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full max-w-352 mx-auto bg-[#1a47b8] py-4.5 px-0 md:px-4 rounded-none md:rounded-tl-[50px] md:rounded-tr-xl md:rounded-br-[50px] md:rounded-bl-xl">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-0 md:gap-10 md:justify-center items-start no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {chunkedFeatures.map((group, index) => (
          <div
            key={index}
            className="w-full flex-none grid grid-cols-3 gap-2 snap-center md:contents"
          >
            {group.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center max-w-30.25 h-25 md:h-auto md:max-w-none md:w-auto md:snap-center mx-auto md:mx-0"
              >
                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center mb-3">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-[60.72px] h-[60.72px] md:w-23 md:h-23 object-contain"
                  />
                </div>

                <p className="text-[#FFD700] text-[12px] md:text-[13px] font-semibold text-center leading-tight uppercase tracking-widest max-w-40">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 mt-4 md:hidden">
        {chunkedFeatures.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureBanner;
