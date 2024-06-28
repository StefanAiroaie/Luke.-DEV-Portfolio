"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";



type WorkSliderBtnsProps = {
  containerStyles: string;
  btnStyles: string;
  iconsStyles: string;
};

const WorkSliderBtns: React.FC<WorkSliderBtnsProps> = ({ containerStyles, btnStyles, iconsStyles }) => {

  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
