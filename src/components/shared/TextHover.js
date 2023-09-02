
const TextHover = ({  displayText, active }) => {
  return (
    <div className="flex items-centre justify-start mt-8 cursor-pointer">
      <div
        className={`${
          active ? "text-white" : "text-gray-500 "
        } text-3xl font-semibold pt-1  hover:text-white`}
      >
        {displayText}
      </div>
    </div>
  );
};

export default TextHover;
