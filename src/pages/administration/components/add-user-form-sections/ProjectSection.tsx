import React from "react";
import { Control, Controller } from "react-hook-form";
import FormSelect from "../../../../components/form-components/FormSelect";

interface ProjectSectionProps {
  control: Control<any>;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ control }) => (
  <>
    <div className="flex items-center gap-x-3 mb-4">
      <label className="block text-sm font-semibold min-w-[120px]">Project:</label>
      <input type="text" value="123" disabled className="w-1/4 border border-gray-300 rounded px-2 py-1" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-end">
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
  </>
);

export default ProjectSection; 