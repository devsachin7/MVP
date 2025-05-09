export interface SelectProps {
  label?: string;
  labelWidth?: string;
  className?: string;
  fullWidth?: boolean;
  value?: string | number;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  disabled?: boolean;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  [key: string]: any;
}

export const Select: React.FC<SelectProps> = ({
  label,
  labelWidth = "min-w-[120px]",
  className = "",
  fullWidth = false,
  value,
  onChange,
  disabled = false,
  options = [],
  placeholder = "Select",
  ...props
}) => {
  return (
    <div
      className={`${
        fullWidth ? "md:col-span-2" : ""
      } sm:flex sm:items-center gap-x-3 ${className}`}
    >
      {label && <label className={`block text-sm font-semibold mb-1 ${labelWidth}`}>
        {label}:
      </label>}
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`flex-1 w-full border border-gray-300 rounded px-2 py-1 ${
          disabled ? "bg-gray-100 text-gray-500" : ""
        }`}
        {...props}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
