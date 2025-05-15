import React from "react";
import { Control, FieldValues } from "react-hook-form";
import FormSelect from "../../../../../components/form-components/FormSelect";
import FormToggle from "../../../../../components/form-components/FormToggle";

interface PermissionSectionProps {
  control: Control<FieldValues>;
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
      <div className="flex items-center w-full">
        <FormToggle
          name="notificationsEnabled"
          control={control}
          label="Is Active"
          labelClassName="font-semibold text-base text-gray-800 min-w-[120px]"
        />
      </div>
    </div>
  </div>
);

export default PermissionSection; 