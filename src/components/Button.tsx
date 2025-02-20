import React from "react";
import "./Button.scss"; // Import du fichier SCSS

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "danger" | "warning" | "disabled";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, variant = "primary", onClick }) => {
  const handleClick = () => {
    if (variant !== "disabled" && onClick) {
      onClick();
    }
  };
  return <button className={`button ${variant}`} onClick={handleClick}>{text}</button>;
};

export default Button;
