import React from "react";
import { Control } from "react-hook-form";
import FormSelect from "../../../../../components/form-components/FormSelect";
import { IProjectWithZones, IRole } from "../../../../../api/user.api";

interface ZoneRoleAssignmentSectionProps {
  control: Control<any>;
  zoneRolesData: IRole[];
  projectWithZoneData: IProjectWithZones[];
}

const ZoneRoleAssignmentSection: React.FC<ZoneRoleAssignmentSectionProps> = ({ control, zoneRolesData, projectWithZoneData }) => (
  <>
    <div className="mb-2 font-semibold text-base text-gray-800">Zone Role Assignment</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projectWithZoneData?.[0]?.zones && projectWithZoneData[0].zones.map((zone) => (
        <div key={zone.zoneName} className="flex flex-col w-full min-w-[160px]">
          <button type="button" className="w-full bg-blue-600 text-white rounded py-1 mb-1 font-semibold text-base">{zone.zoneName}</button>
          <FormSelect
            name={`zoneRoles.${zone.id.toString()}`}
            control={control}
            options={zoneRolesData ?? []}
            className="w-full"
            labelKey="name"
            valueKey="id"
          />
        </div>
      ))}
    </div>
  </>
);

export default ZoneRoleAssignmentSection; 