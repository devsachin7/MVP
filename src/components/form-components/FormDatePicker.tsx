import {UseControllerProps, useController} from 'react-hook-form';
import { InputProps } from './Input';
import { DatePicker } from './DatePicker';

export interface FormInputProps extends InputProps, UseControllerProps {
  defaultValue?: string;
  pattern?: RegExp
}

export default function FormDatePicker({
  name,
  control,
  required,
  defaultValue,
  pattern,
  ...rest
}: FormInputProps) {
  const {field} = useController({
    control,
    defaultValue,
    name,
    rules: {required, pattern},
  });
  return (
    <DatePicker
      value={field.value}
      onChange={text => field.onChange(text)}
      {...rest}
    />
  );
}
