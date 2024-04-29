import React from "react";

function Input({ text, type, placeholder, className, value, onChange }) {
  return (
    <div className={`${className} group`}>
      <span className="text-sm text-[#8d8d8d] group-focus-within:text-black transition-all duration-200">
        {text}
      </span>
      <div className="border-b focus-within:border-black transition-all duration-200">
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
