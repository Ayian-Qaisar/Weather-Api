import React from "react";

const Card = ({ icon, text, info }) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-[#19202D] text-white rounded-xl font-primary p-2">
        <p className="text-[13px]">{text}</p>

        <div className="w-[60px] h-[60px] flex justify-center items-center my-2">
          <img width={"100%"} src={icon} alt="" />
        </div>
        <h4 className="text-xl font-bold">
          {info} <span className="text-sm text-[#7F7F7F] font-light"></span>
        </h4>
      </div>
    </div>
  );
};

export default Card;
