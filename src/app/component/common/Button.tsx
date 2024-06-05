import React from "react";

const Button = ({ children, styleClass, onClick, disabled }: any) => {
  return (
    <button
      type="submit"
      className={`py-3 font-semibold cursor-pointer rounded-lg shadow-sm ${styleClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
