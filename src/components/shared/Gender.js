const Gender = ({
    label,
    className,
    value,
    setValue,
    labelClassName,
  }) => {
    const genderOptions = ["Male", "Female","non-Binary","prefer not to say", "Other"]; // You can add more options if needed
  
    return (
      <div className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}>
        <label htmlFor={label} className={`font-semibold ${labelClassName}`}>
          {label}
        </label>
        {genderOptions.map((option) => (
          <label key={option} className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio h-5 w-5 text-blue-600"
              name="gender"
              value={option}
              checked={value === option}
              onChange={(e) => setValue(e.target.value)}
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </div>
    );
  };
  
  export default Gender;
  
  
  