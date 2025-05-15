import React, { useState, useRef, useEffect } from 'react';
import { CloseIcon } from '../icons/Close';
export interface MultiSelectOption {
  value: string;
  label: string;
}

export interface MultiSelectProps {
  label: string;
  labelWidth?: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: MultiSelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  required?: boolean;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  label,
  labelWidth = 'min-w-[120px]',
  value = [],
  onChange,
  options = [],
  placeholder = 'Select',
  disabled = false,
  className = '',
  required = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
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

  const toggleOption = (optionValue: string) => {
    const isSelected = value.includes(optionValue);
    if (isSelected) {
      onChange(value.filter(v => v !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  const removeOption = (optionValue: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent dropdown from opening when removing an option
    onChange(value.filter(v => v !== optionValue));
  };

  return (
    <div className={`flex items-start ${className}`}>
      {label && (
        <label className={`${labelWidth} pt-2 block text-base font-semibold mb-1 flex-shrink-0`}>
          {label}:
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="flex-1 relative" ref={dropdownRef}>
        <div
          className={`border rounded-md px-3 py-2 flex flex-wrap gap-2 min-h-[42px] cursor-pointer ${
            disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'
          }`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          {value.length === 0 ? (
            <span className="text-gray-400">{placeholder}</span>
          ) : (
            value.map((selectedValue) => {
              const option = options.find(opt => opt.value === selectedValue);
              return option ? (
                <div
                  key={option.value}
                  className="bg-gray-100 rounded-full px-3 py-1 flex items-center text-sm"
                >
                  <span>{option.label}</span>
                  <span 
                    className="ml-2 cursor-pointer"
                    onClick={(e) => removeOption(option.value, e)}
                  >
                    <CloseIcon />
                  </span>
                </div>
              ) : null;
            })
          )}
        </div>
        
        {isOpen && !disabled && (
          <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
            {options.map((option) => (
              <div
                key={option.value}
                className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => toggleOption(option.value)}
              >
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={value.includes(option.value)}
                  readOnly
                />
                <span>{option.label}</span>
              </div>
            ))}
            {options.length === 0 && (
              <div className="px-3 py-2 text-gray-500">No options available</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
