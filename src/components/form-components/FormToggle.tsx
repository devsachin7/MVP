import { Controller, UseControllerProps, FieldValues } from 'react-hook-form';

interface FormToggleProps<T extends FieldValues = FieldValues> extends UseControllerProps<T> {
    label: string;
    required?: boolean;
    labelClassName?: string;
}

export default function FormToggle<T extends FieldValues = FieldValues>({
    name,
    control,
    required,
    label,
    labelClassName = "",
}: FormToggleProps<T>) {
    return (
        <div className="flex items-center space-x-2">
            <label className={`text-gray-700 ${labelClassName}`} htmlFor={name}>{label}</label>
            <Controller
                name={name}
                control={control}
                rules={{ required }}
                render={({ field: { value, onChange, name, ref } }) => (
                    <label className="relative inline-block w-12 h-7 align-middle select-none">
                        <input
                            type="checkbox"
                            checked={!!value}
                            onChange={e => onChange(e.target.checked)}
                            name={name}
                            id={name}
                            ref={ref}
                            className="sr-only peer"
                        />
                        <span
                            className={
                                `absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition-colors duration-300 bg-gray-300 peer-checked:bg-blue-600 rounded-full`
                            }
                        />
                        <span
                            className={
                                `absolute left-1 top-1 h-5 w-5 bg-white rounded-full transition-transform duration-300 shadow peer-checked:translate-x-5`
                            }
                        />
                    </label>
                )}
            />
        </div>
    );
}
