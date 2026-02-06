import { Assets } from "@assets";

const Intro = () => {
  return (
    <section className="px-4 py-12 lg:py-24 mx-auto max-w-7xl bg-blue">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Mobile: SVG Text goes on top */}
        <div className="w-full lg:hidden mb-6">
          <img
            src={Assets.ourStory.text1}
            alt="Our Story Title"
            className="w-full h-auto"
          />
        </div>

        {/* Left Side (Desktop): Image and some text */}
        <div className="w-full lg:max-w-[316px] flex flex-col gap-6">
          <div className="overflow-hidden drop-shadow-xl w-full max-w-[400px] lg:max-w-[316px] mx-auto lg:mx-0">
            <img
              src={Assets.ourStory.introImg}
              alt="Intro img"
              className="w-full h-[316px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="lg:block">
            <p className="text-white text-[16px] lg:text-[18px] leading-relaxed">
              Every great meal deserves a fantastic crunch, right? Here at
              Crumbworks.
            </p>
          </div>
        </div>

        {/* Right Side (Desktop): SVG and Description */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-4">
          {/* Desktop: SVG Icon appears here */}
          <div className="hidden lg:block z-[100]">
            <img
              src={Assets.ourStory.text1Md}
              alt="Our Story"
              className="w-full max-w-[500px] h-auto lg:max-w-[807px] "
            />
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-white text-[16px] lg:text-[18px]  leading-relaxed">
              We say this as people who’ve been personally victimised by sad,
              stale supermarket crumbs that taste like the cardboard box they
              came in. At some point, we realised the breadcrumb aisle wasn’t
              broken, it had just never been built properly. We say this as
              people who’ve been personally victimised by sad, stale supermarket
              crumbs that taste like the cardboard box they came in. At some
              point, we realised the breadcrumb aisle wasn’t broken, it had just
              never been built properly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
