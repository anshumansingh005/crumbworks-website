import React from "react";
import Intro from "./Intro.tsx";
import MidStory from "./MidStory.tsx";
import OutStory from "./OutStory.tsx";

const OurStory = (): React.ReactElement => {
  return (
    <div className="bg-blue">
      <div className=" flex flex-col lg:flex-row lg:overflow-x-auto lg:snap-x lg:snap-mandatory no-scrollbar scroll-smooth max-w-400 mx-auto">
        <div className="w-full lg:min-w-[70%] ">
          <Intro />
        </div>
        <div className="w-full lg:min-w-[85%] flex">
          <MidStory />
        </div>
        <div className="w-full lg:min-w-[1500px] ">
          <OutStory />
        </div>
      </div>
    </div>
  );
};
export default OurStory;
