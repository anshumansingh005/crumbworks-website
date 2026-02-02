import bannerBg from '../assets/BG.webp';
import bannerMb from '../assets/M-BANNER.webp';
import redPacket from '../assets/Pack-1.webp';
import bluePacket from '../assets/Pack.webp';

const Banner = () => {
  return (
    <section className="relative flex justify-center mb-20.5 px-3.5 md:px-4 pt-4 md:pt-[18px] pb-12">
      <div
        className="
          relative w-full max-w-352 h-146
          rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl
          overflow-hidden md:rounded-tl-4xl md:rounded-br-4xl  md:rounded-tr-sm  md:rounded-bl-sm
        "
      >
        <div className="absolute inset-0 z-10 "/>

        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={bannerBg}/>
          <img
            src={bannerMb}
            alt="Freshly baked artisanal bread"
            className="absolute inset-0 w-full h-full object-cover scale-105 sanimate-subtle-zoom z-0"
          />
        </picture>

        <div className="relative z-20 flex flex-col items-center justify-start md:pt-24 pt-13 text-center px-4">
          <h2 className="text-blue text-base md:text-[18px] font-semibold  tracking-widest mb-4">
            We know how to hold it together
          </h2>

          <h1 className="text-blue text-[45px] md:text-[58px] leading-[1.1] max-w-4xl drop-shadow-lg uppercase font-anton">
            Panko for the crunch.
            <br/>
            Classic for everything else.
          </h1>
        </div>
      </div>
      <div className="flex absolute content-center items-end w-full max-w-4xl mt-4 md:bottom-[-144px] bottom-[-74px] z-100">
        {/* Blue Packet - Slight left tilt */}
        <div className="absolute z-10 md:z-auto md:left-21.5 left-0 w-[95%] max-w-[291px] max-h-[399px]  md:max-w-[452px] md:max-h-[620px]  animate-shake-delay-1">
          <img
            src={bluePacket}
            alt="American Bread Crumbs"
            className="w-full h-auto object-contain transform md:-rotate-[2deg] hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
          />
        </div>

        {/* Red Packet - Slight right tilt */}
        <div className="absolute md:right-27.25 right-[-32px] w-[95%] md:max-w-[452px] md:max-h-[620px] max-w-[332px] max-h-[399px] bottom-[67px] animate-shake-delay-2">
          <img
            src={redPacket}
            alt="Panko Bread Crumbs"
            className="w-full h-auto object-contain transform rotate-[-2px] hover:scale-105 transition-transform duration-300 drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
