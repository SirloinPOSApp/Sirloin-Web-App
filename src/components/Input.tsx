import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  name: string;
  inputSet?: string;
  labelSet?: string;
  rows?: number;
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  name: string;
  inputSet?: string;
  labelSet?: string;
  rows?: number;
}

export const Input: FC<InputProps> = ({
  label,
  id,
  name,
  labelSet,
  inputSet,
  ...props
}) => {
  return (
    <div className="mb-3 flex flex-col">
      <label className={`mb-2 font-semibold text-[#4AA3BA] ${labelSet}`}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        className={`rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96 ${inputSet}`}
        {...props}
      />
    </div>
  );
};

export const TextArea: FC<TextAreaProps> = ({
  label,
  id,
  name,
  rows,
  labelSet,
  inputSet,
  ...props
}) => {
  return (
    <div className="mb-3 flex flex-col">
      <label className={`mb-2 font-semibold text-[#4AA3BA] ${labelSet}`}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        rows={rows}
        className={`rounded-lg bg-white mt-2 p-2 border-2 focus:outline-none text-black w-96 ${inputSet}`}
        {...props}
      />
    </div>
  );
};
