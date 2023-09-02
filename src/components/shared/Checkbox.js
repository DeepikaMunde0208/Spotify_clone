import React from "react";

const Checkbox = ({ id, name, value, label }) => {
  return (
    <div className="flex flex-col w-full text-sm ">
      <label htmlFor={id} className="flex items-center">
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          className="mr-2 " // Add some right margin to create space between checkbox and label
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;