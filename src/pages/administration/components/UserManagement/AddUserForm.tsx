import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import UserDetailsSection from "./add-user-form-sections/UserDetailsSection";
import PermissionSection from "./add-user-form-sections/PermissionSection";
import ZoneRoleAssignmentSection from "./add-user-form-sections/ZoneRoleAssignmentSection";
import ProjectSection from "./add-user-form-sections/ProjectSection";
import { IProjectWithZones, IRole } from "../../../../api/user.api";
import { IAddUserFormFields } from "../../../../utils/userUtils";

interface AddUserFormProps {
    onAdd: (data: IAddUserFormFields) => void;
    onClose: () => void;
    editData?: Partial<IAddUserFormFields>;
    projectRolesData: IRole[];
    zoneRolesData: IRole[];
    systemRolesData: IRole[];
    projectWithZoneData: IProjectWithZones[];
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onAdd, onClose, editData, projectRolesData, projectWithZoneData, zoneRolesData, systemRolesData }) => {
    const methods = useForm<IAddUserFormFields>({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            mobileNumber: "",
            title: "",
            isActive: false,
            zoneRoles: {
                "1": "",
                "2": "",
                "3": "",
                "4": "",
                "5": "",
                "6": "",
            },
            isProjectRole: false,
            projectRoleId: "",
            systemRole: "",
            ...editData,
        },
    });

    const { control, handleSubmit, reset } = methods;

    const onSubmit = (data: IAddUserFormFields) => {
        console.log("Form submitted:", data);
        if (data.firstName && data.email) {
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

                    <hr className="border-t-2 border-gray-200 my-4" />

                    <PermissionSection control={control} systemRolesData={systemRolesData} />

                    <hr className="border-t-2 border-gray-200 my-4" />

                    <ProjectSection control={control} projectRolesData={projectRolesData} projectWithZoneData={projectWithZoneData} />

                    <hr className="border-t-2 border-gray-200 my-4" />

                    <ZoneRoleAssignmentSection control={control} zoneRolesData={zoneRolesData} projectWithZoneData={projectWithZoneData} />

                    <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
                        <button type="button" onClick={onClose} className="btn-white btn-md mr-2">Cancel</button>
                        <button type="submit" className="btn-black btn-md">Save</button>
                    </div>
                </form>
            </FormProvider>
        </div>
    );
};

export default AddUserForm;
