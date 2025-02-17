import React from "react";
import "./Button.scss"; // Import du fichier SCSS

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "danger" | "warning" | "disabled";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, variant = "primary", onClick }) => {
  return <button className={`button ${variant}`} onClick={onClick}>{text}</button>;
};

export default Button;
