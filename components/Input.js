import React from "react";

function Input({ text, type, placeholder, className, value, onChange }) {
  return (
    <div className={`${className} group my-4`}>
      <span className="text-sm text-[#8d8d8d] group-focus-within:text-black dark:group-focus-within:text-white transition-all duration-200 dark:text-[#FF7F0D]">
        {text}
      </span>
      <div className="border-b focus-within:border-black dark:group-focus-within:text-white dark:border-white transition-all duration-200">
        {type !== "textarea" ? (
          <input
            type={type}
            placeholder={placeholder}
            className="outline-none border-none w-full bg-transparent p-2"
            value={value}
            onChange={onChange}
          />
        ) : (
          <textarea
            rows="5"
            className="w-full bg-transparent outline-none border-none p-2 appearance-none resize-none"
            placeholder={placeholder}
          ></textarea>
        )}
      </div>
    </div>
  );
}

export default Input;
