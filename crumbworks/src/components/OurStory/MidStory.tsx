import { Assets } from "@assets";
import React from "react";

const MidStory = (): React.ReactElement => {
  return (
    <section className="flex flex-col lg:flex-row w-full items-center">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <div className="overflow-hidden w-full max-w-[428px] h-[406px] lg:max-w-[554px] lg:max-h-[730px]  lg:mx-0 lg:h-[730px] lg:w-[554px] shrink-0">
          <img
            src={Assets.ourStory.vehiclePoster4}
            alt="Intro img"
            className="w-full h-full lg:w-[554px] lg:h-[730px] object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="w-full lg:max-w-[500px] flex flex-col gap-8 lg:gap-4">
          <div className="w-full lg:hidden mb-6">
            <img
              src={Assets.ourStory.text2}
              alt="Our Story Title"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="hidden lg:block z-[100]">
            <img
              src={Assets.ourStory.text2Md}
              alt="Our Story"
              className="w-full max-w-[500px] h-auto lg:max-w-[807px] "
              loading="lazy"
            />
          </div>

          <div className="flex flex-col gap-6 px-3.5">
            <p className="text-white text-[16px] lg:text-[18px]  leading-relaxed">
              Just two types of breadcrumbs. One flaky. One fine. Both are made
              from actual bread. No fillers, no hidden stuff. Just real
              ingredients, toasted right, and ground to do something useful:
              coat better, bind better, and give your food that little “damn,
              that's crispy” moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MidStory;
