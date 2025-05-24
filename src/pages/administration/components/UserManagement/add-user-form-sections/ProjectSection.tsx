import React from "react";
import FormSelect from "../../../../../components/form-components/FormSelect";
import FormToggle from "../../../../../components/form-components/FormToggle";
import { IRole, IProjectWithZones } from "../../../../../api/user.api";
import { Input } from "../../../../../components/form-components/Input";

interface ProjectSectionProps {
  projectRolesData: IRole[];
  projectWithZoneData: IProjectWithZones[];
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projectRolesData, projectWithZoneData }) => {  
  return(
  <>
    <div className="flex items-center mb-4 w-1/2 pr-4">
      <Input label="Project" labelWidth="min-w-[120px]" value={projectWithZoneData?.[0]?.projectName} disabled className="w-full" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 items-end">
      <div className="flex items-center gap-x-3">
        <div className="flex items-center w-full">
          <FormToggle
            name="isProjectRole"
            label="Is Project Role"
            labelClassName="font-semibold text-base text-gray-800 min-w-[120px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <FormSelect
          name="projectRoleId"
          label={"Project Role Assignment"}
          labelWidth="min-w-[120px]"
          options={projectRolesData ?? []}
          className="w-full"
          labelKey="name"
          valueKey="id"
        />
      </div>
    </div>
  </>
)};

export default ProjectSection; 