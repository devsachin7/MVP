import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "../../../components/form-components/FormInput";
import FormSelect from "../../../components/form-components/FormSelect";
import FormToggle from "../../../components/form-components/FormToggle";

interface AddUserFormProps {
    onAdd: (data: { name: string; email: string }) => void;
    onClose: () => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onAdd, onClose }) => {
    const methods = useForm({
        defaultValues: {
            name: "",
            email: "",
            notificationsEnabled: false, // Add default value for toggle
        },
    });

    const { control, handleSubmit, reset } = methods;

    const onSubmit = (data: { name: string; email: string; notificationsEnabled: boolean }) => {
        if (data.name && data.email) {
            onAdd(data);
            reset();
        }
    };

    return (
        <div className="w-full mb-4">
            <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        <FormInput
                            name="firstname"
                            label="First Name"
                            placeholder="Enter first name"
                            className="flex-1"
                            required
                        />
                        <FormInput
                            name="lastname"
                            label="Last Name"
                            placeholder="Enter last name"
                            className="flex-1"
                            required
                        />
                        <FormInput
                            name="email"
                            label="Email"
                            placeholder="Enter email"
                            className="flex-1"
                            required
                        />
                        <FormInput
                            name="password"
                            label="Password"
                            placeholder="Enter password"
                            className="flex-1"
                        />
                        <FormInput
                            name="phone"
                            label="Phone"
                            placeholder="Enter phone"
                            className="flex-1"
                        />
                        <FormInput
                            name="title"
                            label="Title"
                            placeholder="Enter title"
                            className="flex-1"
                        />
                    </div>

                    <hr className="border-t-2 border-gray-300 my-4" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                        <FormSelect
                            name="coAuditor1"
                            label="Co-Auditor 1"
                            labelWidth="min-w-[120px]"
                            options={[
                                { value: "user1", label: "John Doe" },
                                { value: "user2", label: "Jane Smith" },
                                { value: "user3", label: "Alex Johnson" },
                            ]}
                            placeholder="Select"
                        />

                        <FormToggle
                            name="notificationsEnabled"
                            control={control} // Now passing the control prop
                            label="Enable Notifications"
                            required={true}
                        />
                    </div>

                    <hr className="border-t-2 border-gray-300 my-4" />


                    <div className="col-span-1 md:col-span-2 flex justify-end">
                        <button onClick={onClose} className="btn-white btn-sm">
                            Cancel
                        </button>
                        <button type="submit" className="btn-black btn-sm ml-2">
                            Save
                        </button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default AddUserForm;
