import { Assets } from "@assets";
import React from "react";

const TopMarquee = () => {
  return (
    <div className="bg-pink overflow-hidden py-3 relative z-50 md:h-[38px] h-[35px]">
      <div className="flex whitespace-nowrap">
        <div className="flex animate-marquee shrink-0 items-center">
          <MarqueeContent />
        </div>
        <div
          className="flex animate-marquee shrink-0 items-center"
          aria-hidden="true"
        >
          <MarqueeContent />
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

const MarqueeContent = () => (
  <>
    {[...Array(4)].map((_, i) => (
      <React.Fragment key={i}>
        <span className="mx-8 text-white font-medium uppercase tracking-wider text-[12px] md:text-[13px]">
          These breadcrumbs actually do the job without falling apart halfway
          through frying.
        </span>

        <img src={Assets.marqueeAsset} alt="" />
      </React.Fragment>
    ))}
  </>
);

export default TopMarquee;
