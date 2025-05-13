import React, { useState, useEffect, useRef } from 'react';

export interface MultiSelectOption {
  value: string;
  label: string;
}

interface MultiSelectProps {
  label?: string;
  labelWidth?: string;
  className?: string;
  fullWidth?: boolean;
  value?: string[];
  onChange: (value: string[]) => void;
  options: MultiSelectOption[];
  disabled?: boolean;
  placeholder?: string;
  [key: string]: any;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  labelWidth = "min-w-[120px]",
  className = "",
  fullWidth = false,
  value = [],
  onChange,
  options = [],
  disabled = false,
  placeholder = "Select"
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = (optionValue: string) => {
    const newValue = Array.isArray(value) ? [...value] : [];
    const index = newValue.indexOf(optionValue);
    
    if (index === -1) {
      newValue.push(optionValue);
    } else {
      newValue.splice(index, 1);
    }
    
    onChange(newValue);
  };

  return (
    <div
      className={`${
        fullWidth ? "md:col-span-2" : ""
      } sm:flex sm:items-center gap-x-3 ${className}`}
    >
      {label && <label className={`block text-base font-semibold mb-1 ${labelWidth}`}>
        {label}:
      </label>}
      <div className="flex-1 w-full relative" ref={dropdownRef}>
        <button
          type="button"
          className={`w-full border border-gray-300 rounded px-2 py-1 text-left ${
            disabled ? "bg-gray-100 text-gray-500" : "bg-white placeholder:text-gray-400 text-base"
          }`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
        >
          {value.length === 0
            ? placeholder
            : value.join(", ")}
        </button>
        
        {isOpen && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded shadow">
            {options.map((option) => (
              <label
                key={option.value}
                className="flex items-center px-2 py-1 cursor-pointer hover:bg-gray-100"
              >
                <input
                  type="checkbox"
                  checked={value.includes(option.value)}
                  onChange={() => handleToggle(option.value)}
                  className="mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
