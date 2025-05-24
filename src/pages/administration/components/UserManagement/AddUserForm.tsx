import React, { useRef, useState } from "react";
import { useForm, FormProvider, set } from "react-hook-form";
import UserDetailsSection from "./add-user-form-sections/UserDetailsSection";
import PermissionSection from "./add-user-form-sections/PermissionSection";
import ZoneRoleAssignmentSection from "./add-user-form-sections/ZoneRoleAssignmentSection";
import ProjectSection from "./add-user-form-sections/ProjectSection";
import { IProjectWithZones, IRole, userManagementApi } from "../../../../api/user.api";
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

const AddUserForm: React.FC<AddUserFormProps> = ({
  onAdd,
  onClose,
  editData,
  projectRolesData,
  projectWithZoneData,
  zoneRolesData,
  systemRolesData,
}) => {
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

  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [photoUploadedUrl, setPhotoUploadedUrl] = useState("")

  const allowedTypes = ["image/jpeg", "image/png"];
  // Maximum file size in bytes (5MB)
  const maxSize = 5 * 1024 * 1024;

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: any) => {
    const selectedFile = e.target.files[0];
    setError("");
    setSuccess("");
    setFile(null);

    if (!selectedFile) return;

    if (!allowedTypes.includes(selectedFile.type)) {
      setError("Invalid file format. Only JPG, and PNG are allowed.");
      return;
    }

    if (selectedFile.size > maxSize) {
      setError("File size exceeds 5MB limit.");
      return;
    }

    setFile(selectedFile);
    setSuccess(`File "${selectedFile.name}" selected successfully.`);
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file first.");
      return;
    }

    setIsUploading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const formData = new FormData();
      formData.append('file', file);
      const response = await userManagementApi.uploadUserPhoto(formData);
      setPhotoUploadedUrl(response.data);
      setSuccess("File uploaded successfully!");
    } catch (error) {
      setError("Error uploading file. Please try again.");
      console.error("Upload error:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + " KB";
    else return (bytes / 1048576).toFixed(2) + " MB";
  };

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: IAddUserFormFields) => {
    console.log("Form submitted:", data);
    if (data.firstName && data.email) {
      onAdd({...data, profilePhotoUrl: photoUploadedUrl});
      reset();
    }
  };

  const renderFileUploadSection = () => (
    <div className="mb-8">
      <div className="flex items-center mb-8">
        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 mr-6">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".jpg,.jpeg,.png"
          />

          <button
            type="button"
            onClick={handleButtonClick}
            className="flex items-center btn-white btn-md mr-2 mb-2"
          >
            Select File
          </button>

          {file && (
            <button
              type="button"
              onClick={handleUpload}
              disabled={isUploading}
              className={'btn-black btn-md'}
            >
              {isUploading ? "Uploading..." : "Upload File"}
            </button>
          )}
        </div>
      </div>

      {file && (
        <div className="border border-gray-200 rounded p-4 mb-4">
          <h3 className="font-medium text-gray-800 mb-2">File Details</h3>
          <p className="text-sm text-gray-600">Name: {file.name}</p>
          <p className="text-sm text-gray-600">Type: {file.type}</p>
          <p className="text-sm text-gray-600">
            Size: {formatFileSize(file.size)}
          </p>
        </div>
      )}

      <div className="text-xs text-gray-500 mt-2">
        <p>Allowed formats: JPG, PNG</p>
        <p>Maximum size: 5MB</p>
      </div>
    </div>
  );

  const renderUserFormSection = () => (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserDetailsSection />

        <hr className="border-t-2 border-gray-200 my-4" />

        <PermissionSection systemRolesData={systemRolesData} />

        <hr className="border-t-2 border-gray-200 my-4" />

        <ProjectSection
          projectRolesData={projectRolesData}
          projectWithZoneData={projectWithZoneData}
        />

        <hr className="border-t-2 border-gray-200 my-4" />

        <ZoneRoleAssignmentSection
          zoneRolesData={zoneRolesData}
          projectWithZoneData={projectWithZoneData}
        />

        <div className="col-span-1 md:col-span-2 flex justify-end mt-4">
          <button
            type="button"
            onClick={onClose}
            className="btn-white btn-md mr-2"
          >
            Cancel
          </button>
          <button type="submit" className="btn-black btn-md">
            Save
          </button>
        </div>
      </form>
    </FormProvider>
  );

  return (
    <div className="w-full max-w-7xl mx-auto bg-white rounded-xl p-8 mb-4">
      {/* <div className="flex items-center mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-300 mr-6">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <button type="button" className="border border-gray-400 rounded px-4 py-1 bg-white text-gray-700 text-sm font-medium shadow-sm hover:bg-gray-50">Upload</button>
            </div> */}
      {renderFileUploadSection()}
      {renderUserFormSection()}
    </div>
  );
};

export default AddUserForm;
