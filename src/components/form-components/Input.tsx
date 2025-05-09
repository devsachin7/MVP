import React from "react";

export interface InputProps {
  label?: string;
  labelWidth?: string;
  className?: string;
  fullWidth?: boolean;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  disabled?: boolean;
  type?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  [key: string]: any; // For any additional props
}

export const Input: React.FC<InputProps> = ({
  label,
  labelWidth = "min-w-[120px]",
  className = "",
  fullWidth = false,
  value,
  onChange,
  disabled = false,
  type = "text",
  placeholder = "",
  multiline = false,
  rows = 3,
  ...props
}) => {
  return (
    <div
      className={`${fullWidth ? "md:col-span-2" : ""} sm:flex ${
        multiline ? "sm:items-start" : "sm:items-center"
      } gap-x-3 ${className}`}
    >
      {label && <label className={`block text-sm font-semibold mb-1 ${labelWidth}`}>
        {label}:
      </label>}
      {multiline ? (
        <textarea
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          rows={rows}
          className={`flex-1 w-full border border-gray-300 rounded px-2 py-1 ${
            disabled ? "bg-gray-100 text-gray-500" : ""
          }`}
          {...props}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={`flex-1 w-full border border-gray-300 rounded px-2 py-1 ${
            disabled ? "bg-gray-100 text-gray-500" : ""
          }`}
          {...props}
        />
      )}
    </div>
  );
};
