import React from "react";
import { Control } from "react-hook-form";
import FormSelect from "../../../../components/form-components/FormSelect";

interface ZoneRoleAssignmentSectionProps {
  control: Control<any>;
}

const zones = [
  { name: "zone1", label: "Zone-1" },
  { name: "zone2", label: "Zone-2" },
  { name: "zone3", label: "Zone-3" },
  { name: "zone4", label: "Zone-4" },
  { name: "zone5", label: "Zone-5" },
  { name: "zone6", label: "Zone-6" },
];

const ZoneRoleAssignmentSection: React.FC<ZoneRoleAssignmentSectionProps> = ({ control }) => (
  <>
    <div className="mb-2 font-semibold text-sm text-gray-700">Zone Role Assignment</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {zones.map((zone) => (
        <div key={zone.name} className="flex flex-col w-full min-w-[160px]">
          <button type="button" className="w-full bg-blue-600 text-white rounded py-1 mb-1 font-semibold text-sm">{zone.label}</button>
          <FormSelect
            name={`auditCategory.${zone.name}`}
            control={control}
            options={[
              { value: "", label: "Select Role" },
              { value: "0", label: "0-No Violation" },
              { value: "1", label: "1-Low" },
              { value: "2", label: "2-Medium" },
              { value: "3", label: "3-High" },
            ]}
            className="w-full"
          />
        </div>
      ))}
    </div>
  </>
);

export default ZoneRoleAssignmentSection; 