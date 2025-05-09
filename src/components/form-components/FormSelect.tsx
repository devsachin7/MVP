import {UseControllerProps, useController} from 'react-hook-form';
import { Select, SelectProps } from './Select';

export interface FormSelectProps extends SelectProps, UseControllerProps {}

export default function FormSelect({
  name,
  control,
  required,
  ...rest
}: FormSelectProps) {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
    rules: {required: required},
  });
  return <Select value={field.value} onChange={field.onChange} {...rest} />;
}
