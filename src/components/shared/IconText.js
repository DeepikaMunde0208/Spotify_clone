import { Icon } from "@iconify/react";
const IconText = ({ iconName, displayText, active }) => {
  return (
    <div className="flex items-centre justify-start mt-8 cursor-pointer">
      <div className="px-5 py-2">
        <Icon icon={iconName} color={active ? "white" : "gray"} fontSize={40}  />
      </div>
      <div
        className={`${
          active ? "text-white" : "text-gray-400 "
        } text-3xl font-semibold pt-1  hover:text-white`}
      >
        {displayText}
      </div>
    </div>
  );
};

export default IconText;
