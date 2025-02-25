import React from "react";
import "./Button.scss"; // Import du fichier SCSS

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "danger" | "warning" | "disabled";
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, variant = "primary", onClick, disabled = false }) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`button ${variant} ${disabled ? "disabled" : ""}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
