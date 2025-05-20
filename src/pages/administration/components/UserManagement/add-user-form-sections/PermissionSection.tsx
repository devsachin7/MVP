import React from "react";
import { Control } from "react-hook-form";
import FormSelect from "../../../../../components/form-components/FormSelect";
import FormToggle from "../../../../../components/form-components/FormToggle";
import { IRole } from "../../../../../api/user.api";

interface PermissionSectionProps {
  control: Control<any>;
  systemRolesData: IRole[];
}

const PermissionSection: React.FC<PermissionSectionProps> = ({ control, systemRolesData }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
    <FormSelect
      name="systemRole"
      label="Group Permission"
      labelWidth="min-w-[120px]"
      options={systemRolesData ?? []}
      labelKey="name"
      valueKey="name"
      placeholder="Select"
      control={control}
    />
    <div className="flex items-center gap-2 mt-2">
      <div className="flex items-center w-full">
        <FormToggle
          name="isActive"
          control={control}
          label="Is Active"
          labelClassName="font-semibold text-base text-gray-800 min-w-[120px]"
        />
      </div>
    </div>
  </div>
);

export default PermissionSection; 