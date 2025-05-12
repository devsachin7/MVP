import { Controller, UseControllerProps } from 'react-hook-form';

interface FormToggleProps extends UseControllerProps<{ notificationsEnabled: boolean }> {
    label: string;
    required?: boolean;
}

export default function FormToggle({
    name,
    control,
    required,
    label,
}: FormToggleProps) {
    return (
        <div className="flex items-center space-x-2">
            <label className="text-gray-700">{label}</label>
            <Controller
                name={name}
                control={control}
                defaultValue={false}
                rules={{ required }}
                render={({ field }) => (
                    <button
                        type="button"
                        onClick={() => field.onChange(!field.value)}
                        className={`relative inline-flex items-center cursor-pointer rounded-full w-12 h-6 transition-colors duration-200 ${field.value ? 'bg-blue-500' : 'bg-gray-300'
                            }`}
                    >
                        <span
                            className={`inline-block w-6 h-6 rounded-full bg-white transition-transform duration-200 transform ${field.value ? 'translate-x-6' : 'translate-x-0'
                                }`}
                        ></span>
                    </button>
                )}
            />
        </div>
    );
}
