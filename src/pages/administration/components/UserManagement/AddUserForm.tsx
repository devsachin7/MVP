import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import UserDetailsSection from "./add-user-form-sections/UserDetailsSection";
import PermissionSection from "./add-user-form-sections/PermissionSection";
import ZoneRoleAssignmentSection from "./add-user-form-sections/ZoneRoleAssignmentSection";
import ProjectSection from "./add-user-form-sections/ProjectSection";

interface AddUserFormProps {
    onAdd: (data: AddUserFormFields) => void;
    onClose: () => void;
    editData?: Partial<AddUserFormFields>;
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

const AddUserForm: React.FC<AddUserFormProps> = ({ onAdd, onClose, editData }) => {
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
            ...editData,
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
                    <UserDetailsSection control={control} />

                    <hr className="border-t-2 border-gray-300 my-4" />

                    <PermissionSection control={control} />

                    <hr className="border-t-2 border-gray-300 my-4" />

                    <ProjectSection control={control} />

                    <hr className="border-t-2 border-gray-300 my-4" />

                    <ZoneRoleAssignmentSection control={control} />

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
