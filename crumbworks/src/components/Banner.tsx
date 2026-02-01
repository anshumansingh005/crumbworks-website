import bannerBg from "../assets/banner.jpg";
const Banner = () => {
  return (
    <section className="relative min-h-[85svh] md:min-h-[90vh] flex items-center px-3.5 md:px-4 pt-24 pb-12">
      <div
        className="
          absolute inset-3.5 md:inset-4 z-0 overflow-hidden
          rounded-tl-[40px] rounded-br-[40px] rounded-tr-none rounded-bl-none
        "
      >
        <div className="absolute inset-0 z-10" />

        <img
          src={bannerBg}
          alt="Freshly baked artisanal bread"
          className="w-full h-full object-cover scale-105 sanimate-subtle-zoom"
        />
      </div>
    </section>
  );
};

export default Banner;
