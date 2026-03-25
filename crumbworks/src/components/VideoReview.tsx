import { Assets } from "@assets";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

const VIDEOS = [
  { id: 1, rotation: "rotate-2", translate: "translate-y-4" },
  { id: 2, rotation: "-rotate-1", translate: "-translate-y-2" },
  { id: 3, rotation: "rotate-3", translate: "translate-y-6" },
  { id: 4, rotation: "rotate-2", translate: "translate-y-2" },
];
const vidLink = [
  { src: "https://youtube.com/shorts/DRZ51P08ElU?si=u57e5E3GYtmKefV_" },
  { src: "https://youtu.be/R2_wxLf0eRo?si=nndnCrn60p2zfCNo" },
  { src: "https://www.youtube.com/shorts/fzucN0zYpZ0?feature=share" },
  { src: "https://youtube.com/shorts/iSHkBiz3If8?si=bJoJtxYY6-M0W8Kg" },
];

const VideoCard = ({
  video,
  index,
}: {
  video: typeof VIDEOS[0];
  index: number;
}) => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        shrink-0 snap-center relative bg-black rounded-[10px] border-[2.5px] border-white overflow-hidden shadow-xl
        w-[235px] h-[418px] lg:w-[257px] lg:h-[457px]
        ${video.rotation} ${video.translate}
        transition-transform duration-300 hover:scale-105 hover:z-10 hover:rotate-0
        cursor-pointer
      `}
    >
      <ReactPlayer
        src={vidLink[index]?.src}
        width="100%"
        height="100%"
        controls
        playing={playing}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
    </div>
  );
};

const VideoReview = () => {
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
    <section className="bg-yellow relative md:pb-[144px] pb-[74px] overflow-hidden mt-12">
      <div className="absolute h-7 md:h-[44px] w-full flex -top-0 bg-bg  border-none bg-yellowZig hidden md:block "></div>
      <div className="absolute h-7 md:h-[44px] w-full flex -top-0 bg-bg  border-none bg-yellowZigMd md:hidden ">
        {/* <div className="hidden lg:block z-[90]">
          <img
            src={Assets.yelloZig}
            alt="Our Story"
            className="w-full h-auto"
          />
        </div>
        <div className="w-full lg:hidden">
          <img
            src={Assets.yelloZigMb}
            alt="Our Story Title"
            className="w-full"
          />
        </div> */}
      </div>
      <div className="w-full pt-9 md:pt-[100px] flex justify-center -top-[9%] left-0 md:left-[0] md:-top-[26%]">
        {/* md:left-[20%] md:-top-[24%] */}
        <picture className="items-center">
          <source
            media="(min-width: 769px)"
            srcSet={Assets.vidReviewHeader}
            className=""
          />
          <img
            src={Assets.vidReviewHeaderMb}
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
          className="flex overflow-x-auto md:gap-13 gap-5 pb-12 p-3.5 snap-x snap-mandatory no-scrollbar items-center w-full max-w-[1219px] mx-auto"
        >
          {VIDEOS.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-4 lg:hidden">
          {VIDEOS.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === activeIndex ? "bg-blue" : "bg-blue/20"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="absolute h-7 md:h-[44px] w-full flex bg-pink border-none bg-yellowZig hidden md:block upside-down bottom-0 "></div>
      <div className="absolute h-7 md:h-[44px] w-full flex bottom-0 bg-pink  border-none bg-yellowZigMd md:hidden upside-down "></div>
    </section>
  );
};

export default VideoReview;
