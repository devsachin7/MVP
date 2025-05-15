import React from "react";
import { Control, Controller } from "react-hook-form";
import FormSelect from "../../../../../components/form-components/FormSelect";
import FormToggle from "../../../../../components/form-components/FormToggle";

interface ProjectSectionProps {
  control: Control<any>;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ control }) => (
  <>
    <div className="flex items-center gap-x-3 mb-4">
      <label className="block font-semibold text-base text-gray-800 min-w-[120px]">Project:</label>
      <input type="text" value="123" disabled className="w-1/4 border border-gray-300 rounded px-2 py-1" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-end">
      <div className="flex items-center gap-x-3">
        <div className="flex items-center w-full">
          <FormToggle
            name="isProjectRole"
            control={control}
            label="Is Project Role"
            labelClassName="font-semibold text-base text-gray-800 min-w-[120px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <label className="block font-semibold text-base text-gray-800 min-w-[120px]">Project Role Assignment</label>
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
  </>
);

export default ProjectSection; 