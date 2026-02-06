import { Assets } from "@assets";
import React from "react";

const Banner = (): React.ReactElement => {
  return (
    <section className="relative flex justify-center lg:mb-[130px] md:mb-[155px] mb-20.5 px-3.5 md:px-4 pt-4 md:pt-[18px] pb-12">
      <div
        className="
          relative w-full max-w-352 h-146
          rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl
          overflow-hidden md:rounded-tl-4xl md:rounded-br-4xl  md:rounded-tr-sm  md:rounded-bl-sm"
      >
        <div className="absolute inset-0 z-10" />

        <picture>
          <source media="(min-width: 768px)" srcSet={Assets.bannerBg} />
          <img
            src={Assets.bannerAsset.bannerMb}
            alt="Freshly baked artisanal bread"
            className="absolute inset-0 w-full h-full object-cover scale-105 sanimate-subtle-zoom z-0"
          />
        </picture>

        <div className="relative z-20 flex flex-col items-center justify-start md:pt-[70px] pt-13 text-center px-4">
          <h2 className="text-blue text-base md:text-[18px] font-semibold  tracking-widest mb-4">
            We know how to hold it together
          </h2>

          <h1 className="text-blue text-[45px] md:text-[58px] leading-[1.1] max-w-4xl drop-shadow-lg uppercase font-anton">
            Panko for the crunch.
            <br />
            Classic for everything else.
          </h1>
        </div>
      </div>
      <div className="flex absolute content-center items-end w-full max-w-4xl mt-4 lg:bottom-[-144px] bottom-[-74px] z-30">
        <div className="absolute z-10 md:z-auto md:left-21.5 left-0 -bottom-[13px]animate-shake-delay-1">
          <div className="absolute max-w-[80px] left-[25px] z-11 md:w-[107px] md:h-[72px] md:top-[189px]">
            <p className="text-[16px] md:text-[18px] font-bold text-blue leading-[19px]">
              High Fibre
            </p>
            {
              <img
                src={Assets.bannerAsset.HighFiberArrow}
                className="h-[56px] md:h-[85px] md:w-[111px] rotate-[21deg] md:rotate-[7deg]"
              />
            }
          </div>
          <div className="absolute top-[227px] md:top-[358px] z-1 left-[10px] rotate-[-8deg] max-w-[86px] max-h-[60px] md:max-w-[110px] md:max-h-[78px]">
            <img src={Assets.bannerAsset.classicChat} />
          </div>
          <img
            src={Assets.bannerAsset.bluePacket}
            alt="American Bread Crumbs"
            className=" max-w-[291px] max-h-[399px]  md:max-w-[452px] md:max-h-[620px]   w-full h-auto object-contain transform md:-rotate-[2deg] hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
          />
        </div>
        <div className="absolute md:right-5.25 right-0 bottom-16.75 md:bottom-[-5px] animate-shake-delay-2">
          <div className="absolute right-[10px] bottom-[16px] md:bottom-[210px] max-w-[80px] md:max-w-[170px] z-11 md:w-[107px] md:h-[72px] md:flex ">
            <img
              src={Assets.bannerAsset.wholeGrainArrow}
              className="h-[52px] md:h-[78px] rotate-[30deg] md:-rotate-[26deg]"
            />
            <p className="text-[16px] md:text-[18px] font-bold text-blue leading-[19px]">
              Whole Grain
            </p>
          </div>
          <div className="absolute z-11 top-[179px] md:top-[225px] left-[179px] md:left-87  rotate-[-8deg] ">
            <img
              src={Assets.bannerAsset.flakyChat}
              className="w-[86px] h-[60px] md:max-w-[105px] md:max-h-[72px] md:w-[105px] md:h-[72px]"
            />
          </div>
          <img
            src={Assets.bannerAsset.redPacket}
            alt="Panko Bread Crumbs"
            className=" md:max-w-113 md:max-h-155 max-w-83 max-h-99.75  w-full h-auto object-contain transform rotate-[-2px] hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
