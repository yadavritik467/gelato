import React from "react";

const Button: React.FC<{
  isIcon: boolean;
  isBgBlack: boolean;
  iconName?: any;
  className?: string;
  btnName: string;
}> = ({
  isIcon = false,
  isBgBlack = true,
  iconName = null,
  btnName,
  className,
}) => {
  return (
    <div
      className={`flex cursor-pointer ${className ?? ""} ${
        isBgBlack
          ? "bg-black hover:opacity-30 text-white"
          : " bg-white hover:bg-gray-300"
      }  rounded-full transition-all duration-150 p-2 px-3  gap-3 justify-start items-center`}
    >
      {isIcon ? iconName : null}
      <p>{btnName}</p>
    </div>
  );
};

export default Button;
