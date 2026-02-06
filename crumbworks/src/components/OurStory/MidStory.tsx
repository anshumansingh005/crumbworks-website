import { Assets } from "@assets";
import React from "react";

const MidStory = (): React.ReactElement => {
  return (
    <section className="flex flex-col lg:flex-row w-full items-center">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <div className="overflow-hidden w-full max-w-[428px] h-[406px] lg:max-w-[554px] lg:max-h-[730px]  lg:mx-0 lg:h-[730px] lg:w-[554px] shrink-0">
          <img
            src={Assets.ourStory.organicFresh}
            alt="Intro img"
            className="w-full h-full lg:w-[554px] lg:h-[730px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right Side (Desktop): SVG and Description */}
        <div className="w-full lg:max-w-[500px] flex flex-col gap-8 lg:gap-4">
          <div className="w-full lg:hidden mb-6">
            <img
              src={Assets.ourStory.text2}
              alt="Our Story Title"
              className="w-full h-auto"
            />
          </div>
          <div className="hidden lg:block z-[100]">
            <img
              src={Assets.ourStory.text2Md}
              alt="Our Story"
              className="w-full max-w-[500px] h-auto lg:max-w-[807px] "
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
    // <div className="flex flex-col md:flex-row w-full items-center">
    //   <div className="overflow-hidden w-full max-w-[428px] h-[406px] md:max-w-[554px] md:max-h-[730px]  md:mx-0 md:h-[730px] md:w-[554px] shrink-0">
    //     <img
    //       src={Assets.ourStory.organicFresh}
    //       alt="Intro img"
    //       className="w-full h-full md:w-[554px] md:h-[730px] object-cover hover:scale-105 transition-transform duration-500"
    //     />
    //   </div>
    //   <section className="px-4 py-12 md:py-20 md:flex md:flex-row gap-5 md:gap-6 ">
    //     <div className="md:max-w-[505px] md:w-[505px]">
    //       <div className="md:block z-[100] mx-auto">
    //         <picture className="items-center">
    //           <source
    //             media="(min-width: 768px)"
    //             srcSet={Assets.ourStory.text2Md}
    //             className="w-full max-w-[500px] h-auto md:max-w-[807px]"
    //           />
    //           <img
    //             src={Assets.ourStory.text2}
    //             alt="Freshly baked artisanal bread"
    //             className="w-full h-full h-auto md:max-w-[807px]"
    //           />
    //         </picture>
    //       </div>
    //       <div className="max-w-7xl mx-auto flex  items-center mt-[30px] md:mt-[50px] gap-8 md:max-w-[505px]">
    //         <p className="text-white text-lg md:text-xl max-w-3xpl leading-relaxed text-[16px] md:text-[18px] ">
    //           Just two types of breadcrumbs. One flaky. One fine. Both are made
    //           from actual bread. No fillers, no hidden stuff. Just real
    //           ingredients, toasted right, and ground to do something useful:
    //           coat better, bind better, and give your food that little “damn,
    //           that’s crispy” moment.
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default MidStory;
