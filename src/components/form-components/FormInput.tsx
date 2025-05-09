import {UseControllerProps, useController} from 'react-hook-form';
import { Input, InputProps } from './Input';

export interface FormInputProps extends InputProps, UseControllerProps {
  defaultValue?: string;
  pattern?: RegExp
}

export default function FormInput({
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
    <Input
      value={field.value}
      onChange={text => field.onChange(text)}
      {...rest}
    />
  );
}
