import React from "react";

const HourlyCard = ({
  getName,
  time,
  icon,
  condition,
  temp,
  minTemp,
  maxTemp,
}) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#19202D] text-white rounded-xl p-2 font-primary">
      <p className="text-[13px]">
        {getName} <span className="text-[#7F7F7F] font-light">{time}</span>
      </p>

      <div className="w-[60px] h-[60px] flex justify-center items-center my-1">
        <img width={"100%"} src={icon} alt="" />
      </div>
      <p className="text-[#7F7F7F] text-xs mb-1">{condition}</p>

      {minTemp && maxTemp ? (
        <div className="flex gap-2">
          <h4 className="text-[13px]">{maxTemp}°</h4>{" "}
          <h4 className="text-[13px] font-light text-[#7F7F7F]">{minTemp}°</h4>{" "}
        </div>
      ) : (
        <h4 className="text-[13px]">{temp}°</h4>
      )}
    </div>
  );
};

export default HourlyCard;
