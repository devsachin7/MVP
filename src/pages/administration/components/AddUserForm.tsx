import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "../../../components/form-components/FormInput";
import FormSelect from "../../../components/form-components/FormSelect";
import { Controller } from "react-hook-form";

interface AddUserFormProps {
    onAdd: (data: AddUserFormFields) => void;
    onClose: () => void;
}

interface AddUserFormFields {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    phone: string;
    title: string;
    notificationsEnabled: boolean;
    coAuditor1: string;
    auditCategory: {
        zone1: string;
        zone2: string;
        zone3: string;
        zone4: string;
        zone5: string;
        zone6: string;
    };
    isProjectRole: boolean;
    projectRoleAssignment: string;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onAdd, onClose }) => {
    const methods = useForm<AddUserFormFields>({
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            phone: "",
            title: "",
            notificationsEnabled: false,
            coAuditor1: "",
            auditCategory: {
                zone1: "",
                zone2: "",
                zone3: "",
                zone4: "",
                zone5: "",
                zone6: "",
            },
            isProjectRole: false,
            projectRoleAssignment: "",
        },
    });

    const { control, handleSubmit, reset } = methods;

    const onSubmit = (data: AddUserFormFields) => {
        if (data.firstname && data.email) {
            onAdd(data);
            reset();
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto bg-white rounded-xl p-8 mb-4">
            {/* Profile Image and Upload Button */}
            <div className="flex items-center mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 mr-6">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <button type="button" className="border border-gray-400 rounded px-4 py-1 bg-white text-gray-700 text-sm font-medium shadow-sm hover:bg-gray-50">Upload</button>
            </div>
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
                            name="groupPermission"
                            label="Group Permission"
                            labelWidth="min-w-[120px]"
                            options={[
                                { value: "user1", label: "John Doe" },
                                { value: "user2", label: "Jane Smith" },
                                { value: "user3", label: "Alex Johnson" },
                            ]}
                            placeholder="Select"
                        />
                        <div className="flex items-center gap-2 mt-2">
                            <label htmlFor="notificationsEnabled" className="font-medium text-sm text-gray-700">Is Active</label>
                            <Controller
                                name="notificationsEnabled"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <button
                                        type="button"
                                        onClick={() => onChange(!value)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${value ? ("bg-blue-600") : ("bg-gray-300")}`}
                                    >
                                        <span
                                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-200 ${value ? 'translate-x-5' : 'translate-x-0'}`}
                                        />
                                    </button>
                                )}
                            />
                        </div>
                    </div>

                    <hr className="border-t-2 border-gray-300 my-4" />

                    {/* Project input row */}
                    <div className="flex items-center gap-x-3 mb-4">
                        <label className="block text-sm font-semibold min-w-[120px]">Project:</label>
                        <input type="text" value="123" disabled className="w-1/4 border border-gray-300 rounded px-2 py-1" />
                    </div>
                    {/* Is Project Role and Project Role Assignment on same row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-end">
                        {/* Is Project Role toggle */}
                        <div className="flex items-center gap-x-3">
                            <label className="block text-sm font-semibold min-w-[120px]">Is Project Role</label>
                            <Controller
                                name="isProjectRole"
                                control={control}
                                defaultValue={false}
                                render={({ field: { value, onChange } }) => (
                                    <button
                                        type="button"
                                        onClick={() => onChange(!value)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${value ? ("bg-blue-600") : ("bg-gray-300")}`}
                                    >
                                        <span
                                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform duration-200 ${value ? 'translate-x-5' : 'translate-x-0'}`}
                                        />
                                    </button>
                                )}
                            />
                        </div>
                        {/* Project Role Assignment dropdown */}
                        <div className="flex items-center gap-x-3">
                            <label className="block text-sm font-semibold min-w-[120px]">Project Role Assignment</label>
                            <FormSelect
                                name="projectRoleAssignment"
                                control={control}
                                options={[
                                    { value: '', label: 'Select Role' },
                                    { value: 'admin', label: 'Admin' },
                                    { value: 'manager', label: 'Manager' },
                                    { value: 'auditor', label: 'Auditor' },
                                ]}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <hr className="border-t-2 border-gray-300 my-4" />

                    <div className="mb-2 font-semibold text-sm text-gray-700">Zone Role Assignment</div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col w-full min-w-[160px]">
                            <button type="button" className="w-full bg-blue-600 text-white rounded py-1 mb-1 font-semibold text-sm">Zone-1</button>
                            <FormSelect
                                name="auditCategory.zone1"
                                control={control}
                                options={[
                                    { value: "", label: "Select Role" },
                                    { value: "0", label: "0-No Violation" },
                                    { value: "1", label: "1-Low" },
                                    { value: "2", label: "2-Medium" },
                                    { value: "3", label: "3-High" },
                                ]}
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col w-full min-w-[160px]">
                            <button type="button" className="w-full bg-blue-600 text-white rounded py-1 mb-1 font-semibold text-sm">Zone-2</button>
                            <FormSelect
                                name="auditCategory.zone2"
                                control={control}
                                options={[
                                    { value: "", label: "Select Role" },
                                    { value: "0", label: "0-No Violation" },
                                    { value: "1", label: "1-Low" },
                                    { value: "2", label: "2-Medium" },
                                    { value: "3", label: "3-High" },
                                ]}
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col w-full min-w-[160px]">
                            <button type="button" className="w-full bg-blue-600 text-white rounded py-1 mb-1 font-semibold text-sm">Zone-3</button>
                            <FormSelect
                                name="auditCategory.zone3"
                                control={control}
                                options={[
                                    { value: "", label: "Select Role" },
                                    { value: "0", label: "0-No Violation" },
                                    { value: "1", label: "1-Low" },
                                    { value: "2", label: "2-Medium" },
                                    { value: "3", label: "3-High" },
                                ]}
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col w-full min-w-[160px]">
                            <button type="button" className="w-full bg-blue-600 text-white rounded py-1 mb-1 font-semibold text-sm">Zone-4</button>
                            <FormSelect
                                name="auditCategory.zone4"
                                control={control}
                                options={[
                                    { value: "", label: "Select Role" },
                                    { value: "0", label: "0-No Violation" },
                                    { value: "1", label: "1-Low" },
                                    { value: "2", label: "2-Medium" },
                                    { value: "3", label: "3-High" },
                                ]}
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col w-full min-w-[160px]">
                            <button type="button" className="w-full bg-blue-600 text-white rounded py-1 mb-1 font-semibold text-sm">Zone-5</button>
                            <FormSelect
                                name="auditCategory.zone5"
                                control={control}
                                options={[
                                    { value: "", label: "Select Role" },
                                    { value: "0", label: "0-No Violation" },
                                    { value: "1", label: "1-Low" },
                                    { value: "2", label: "2-Medium" },
                                    { value: "3", label: "3-High" },
                                ]}
                                className="w-full"
                            />
                        </div>
                        <div className="flex flex-col w-full min-w-[160px]">
                            <button type="button" className="w-full bg-blue-600 text-white rounded py-1 mb-1 font-semibold text-sm">Zone-6</button>
                            <FormSelect
                                name="auditCategory.zone6"
                                control={control}
                                options={[
                                    { value: "", label: "Select Role" },
                                    { value: "0", label: "0-No Violation" },
                                    { value: "1", label: "1-Low" },
                                    { value: "2", label: "2-Medium" },
                                    { value: "3", label: "3-High" },
                                ]}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
                        <button type="button" onClick={onClose} className="btn-white btn-sm mr-2">Cancel</button>
                        <button type="submit" className="btn-black btn-sm">Save</button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default AddUserForm;
