import React from "react";
import { Control, Controller } from "react-hook-form";
import FormSelect from "../../../../components/form-components/FormSelect";

interface PermissionSectionProps {
  control: Control<any>;
}

const PermissionSection: React.FC<PermissionSectionProps> = ({ control }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
    <FormSelect
      name="groupPermission"
      label="Group Permission"
      labelWidth="min-w-[120px]"
      options={[
        { value: "user", label: "User" },
        { value: "poweruser", label: "Power User" },
        { value: "admin", label: "Admin" },
      ]}
      placeholder="Select"
      control={control}
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
);

export default PermissionSection; 