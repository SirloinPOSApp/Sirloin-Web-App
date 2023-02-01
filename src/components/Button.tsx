import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  buttonSet?: string;
}

const Button: FC<ButtonProps> = ({ label, buttonSet, ...props }) => {
  return (
    <button className={`btn tracking-wider ${buttonSet}`} {...props}>
      {label}
    </button>
  );
};

export default Button;
