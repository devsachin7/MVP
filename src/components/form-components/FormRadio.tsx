import { UseControllerProps, useController } from 'react-hook-form';

interface FormRadioProps extends UseControllerProps {
  options: { label: string; value: string }[];
  required?: boolean;
}

export default function FormRadio({
  name,
  control,
  required,
  options,
}: FormRadioProps) {
  const { field } = useController({
    control,
    defaultValue: '',
    name,
    rules: { required: required },
  });

  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={field.value === option.value}
            onChange={() => field.onChange(option.value)}
            className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-500"
          />
          <span className="text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
}
