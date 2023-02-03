import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  label?: string;
  buttonSet?: string;
}

const Button: FC<ButtonProps> = ({ id, label, buttonSet, ...props }) => {
  return (
    <button id={id} className={`btn tracking-wider ${buttonSet}`} {...props}>
      {label}
    </button>
  );
};

export default Button;
