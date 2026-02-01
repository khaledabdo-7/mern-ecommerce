import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Hero = () => {
  return (
    // el container el ra2esy:
    // flex-col: 3l4an el items tkon fo2 b3d (mobile first layout)
    // sm:flex-row: lma el 4a4a tkbr (sm aw akbar) yb2o gnb b3d (yemem w 4mal)
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* --- Hero Left Side (El Klam) --- */}

      {/* w-full sm:w-1/2: ya3ny 50% mn el 3rd fe el 4a4at el kbera, w 100% fe el mobile */}
      {/* flex items-center justify-center: 3l4an n-center el klam fe nos el box bzbt */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          {/* El satr el s8yr fo2 el 3nwan (OUR BESTSELLERS) */}
          <div className="flex items-center gap-2">
            {/* h-[2px]: da el 5at elly bytrsm, 3mlnah b <p> fadya w lonaha 8ame2 */}
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>

          {/* El 3nwan el ra2esy (LATEST ARRIVALS) */}
          {/* prata-regular: da no3 el font elly est5dmnah */}
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>

          {/* El zorar bta3 Shop Now w el 5at elly gnbo */}
          <div className=" flex items-center gap-2">
            <p className="text-semibold text-sm md:text-base">SHOP NOW</p>
            {/* h-[1px]: nfs el 5at elly fo2 bs arfa3 sna */}
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* --- Hero Right Side (El Sora) --- */}
      {/* Wa5da el nos el tany (w-1/2) fe el shashat el kbera */}
      <img src={assets.hero_img} className="w-full sm:w-1/2 " alt="" />
    </div>
  );
};

export default Hero;
