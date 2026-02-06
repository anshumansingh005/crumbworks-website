import { Assets } from "@assets";

import React from "react";

const OutStory = (): React.ReactElement => {
  return (
    <section className="px-4 py-12 lg:py-24 max-w-7xl bg-blue">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-4">
        <div className="w-full lg:max-w-[425px] flex flex-col gap-6">
          <div className="overflow-hidden drop-shadow-xl w-full max-w-[400px] lg:max-w-[425px] mx-auto lg:mx-0">
            <img
              src={Assets.ourStory.midstoryPic}
              alt="Intro img"
              className="w-full lg:h-[424px] lg:w-[425px] h-[316px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="lg:block">
            <p className="text-white text-[16px] lg:text-[18px] leading-relaxed">
              We’re not trying to be a heritage brand. We just got tired of
              pretending the existing crumbs were fine.
            </p>
          </div>
        </div>

        {/* Right Side (Desktop): SVG and Description */}
        <div className="w-full lg:max-w-[500px] flex flex-col gap-8 lg:gap-4">
          <div className="w-full lg:hidden mb-6">
            <img
              src={Assets.ourStory.text3}
              alt="Our Story Title"
              className="w-full h-auto"
            />
          </div>
          <div className="hidden lg:block z-[100]">
            <img
              src={Assets.ourStory.text3}
              alt="Our Story"
              className="w-full max-w-[500px] h-auto lg:max-w-[807px] "
            />
          </div>

          <div className="flex flex-col gap-6 px-3.5">
            <p className="text-white text-[16px] lg:text-[18px]  leading-relaxed">
              And if you’ve ever stared at your recipes wondering why it’s
              falling apart, this is for you.Also, we’re not saying these crumbs
              will fix your life.But they will make your food hold it together.
            </p>
          </div>
        </div>
        <div className="relative w-[249px] h-[349px] lg:w-[300px] lg:h-[448px] shrink-0">
          <img
            src={Assets.pankobread}
            alt="Panko bread crumbs"
            className="absolute top-1/2 lg:left-[45%] left-[30%]  w-full h-full -translate-x-1/2 -translate-y-1/2 object-contain"
          />
          <img
            src={Assets.bannerAsset.bluePacket}
            alt="American Bread Crumbs"
            className="absolute top-1/2 lg:left-[89%] left-[71%]  w-full h-full -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </div>
      </div>
    </section>
  );
};
export default OutStory;
