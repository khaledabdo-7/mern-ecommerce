import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    // inline-flex: 3l4an el title mya5od4 el satr kolo, ya5od ms7a 3la ad el klam bs
    // gap-2: msafa ben el klam w el 5at elly gnbo
    <div className="inline-flex gap-2 items-center mb-3">
      {/* text1: El klam el awalany lono romady fate7 (text-gray-500) */}
      <p className="text-gray-500">
        {text1}
        {/* text2: El klam el tany 7tenah gwa span 3l4an ndelo lon a8m2 (gray-700) w font at2l (medium) */}
        <span className=" text-gray-700 font-medium">{text2}</span>
      </p>

      {/* Da el 5at elly gnb el 3nwan */}
      {/* w-8 sm:w-12: el 3rd bta3o byzed fe el shashat el kbera */}
      {/* h-[1px]: da el somk bta3 el 5at */}
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>
    </div>
  );
};

export default Title;
