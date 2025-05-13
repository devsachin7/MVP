import { UseControllerProps, useController } from 'react-hook-form';

interface FormCheckboxProps extends UseControllerProps {
  options: { label: string; value: string }[];
  required?:boolean;
}

export default function FormCheckbox({
  name,
  control,
  required,
  options,
}: FormCheckboxProps) {
  const { field } = useController({
    control,
    defaultValue: [],
    name,
    rules: { required: required },
  });

  const handleChange = (value: string) => {
    if (field.value.includes(value)) {
      field.onChange(field.value.filter((val: string) => val !== value));
    } else {
      field.onChange([...field.value, value]);
    }
  };

  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="checkbox"
            name={name}
            value={option.value}
            checked={field.value.includes(option.value)}
            onChange={() => handleChange(option.value)}
            className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
}
