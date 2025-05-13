import {UseControllerProps, useController, FieldValues, Path, PathValue} from 'react-hook-form';
import { Select, SelectProps } from './Select';

export interface FormSelectProps<T extends FieldValues = FieldValues> extends SelectProps, UseControllerProps<T> {
  defaultValue?: PathValue<T, Path<T>>;
}

export default function FormSelect<T extends FieldValues = FieldValues>({
  name,
  control,
  required,
  ...rest
}: FormSelectProps<T>) {
  const {field} = useController({
    control,
    defaultValue: rest.defaultValue,
    name,
    rules: {required: required},
  });
  return <Select value={field.value} onChange={field.onChange} {...rest} />;
}
