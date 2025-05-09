import React from "react";
import { FieldArrayWithId, useFormContext } from "react-hook-form";
import FormSelect from "../../../components/form-components/FormSelect";
import FormInput from "../../../components/form-components/FormInput";
import { defaultValAuditCategory } from "../utils/defaultValues";
import { calculateScore } from "../utils/safetyAuditUtils";

interface AuditCategoriesProps {
  field: FieldArrayWithId;
  index: number;
  append: any;
  remove: any;
}

const AuditCategories: React.FC<AuditCategoriesProps> = ({
  field,
  index,
  append,
  remove,
}) => {
  const { control, setValue, getValues } = useFormContext();
  const violationCount = getValues().auditCategory[index].noOfViolations;
  const severityLevelCount = getValues().auditCategory[index].severityLevel;
  const {pointsDeduction, score, scorePctg, boxBgColor} = calculateScore(
    +violationCount,
    +severityLevelCount,
    1,
  );

  setValue(
    `auditCategory.${index}.pointDeductions`,
    pointsDeduction.toString(),
  );

  setValue(`auditCategory.${index}.sectionScore`, score.toString());


  return (
    <div className="mb-6" key={field.id}>
      <div className="font-semibold mb-2">Violation {index + 1}</div>

      <div className="mb-2">
        <div className="mb-4">
          <FormSelect
            name={`auditCategory.${index}.category`}
            control={control}
            label="Category"
            labelWidth="min-w-[125px]"
            options={[
              { value: "user1", label: "John Doe" },
              { value: "user2", label: "Jane Smith" },
              { value: "user3", label: "Alex Johnson" },
            ]}
            placeholder="Select"
          />
        </div>
        <div className="mb-4">
          <FormSelect
            name={`auditCategory.${index}.violationType`}
            control={control}
            label="Violation Type"
            labelWidth="min-w-[125px]"
            options={[
              { value: "user1", label: "John Doe" },
              { value: "user2", label: "Jane Smith" },
              { value: "user3", label: "Alex Johnson" },
            ]}
            placeholder="Select"
          />
        </div>
        <div className="mb-4">
          <FormSelect
            name={`auditCategory.${index}.responsibleParty`}
            control={control}
            label="Responsible Party"
            labelWidth="min-w-[125px]"
            options={[
              { value: "user1", label: "John Doe" },
              { value: "user2", label: "Jane Smith" },
              { value: "user3", label: "Alex Johnson" },
            ]}
            placeholder="Select"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2 mt-6">
        <div className="flex flex-col w-full">
          <div
            className="w-full h-[36px] flex items-center justify-center rounded border border-gray-300 mb-1"
            style={{ background: "#1D7ED9" }}
          >
            <span className="text-white text-xs font-semibold">Violations</span>
          </div>
          <FormInput 
            name={`auditCategory.${index}.noOfViolations`} 
            control={control}
            type="number" 
          />
        </div>
        <div className="flex flex-col w-full">
          <div
            className="w-full h-[36px] flex items-center justify-center rounded border border-gray-300 mb-1"
            style={{ background: "#1D7ED9" }}
          >
            <span className="text-white text-xs font-semibold">
              Highest Severity Level
            </span>
          </div>
          <FormSelect
            name={`auditCategory.${index}.severityLevel`}
            control={control}
            options={[
              { value: "0", label: "0-No Violation" },
              { value: "1", label: "1-Low" },
              { value: "2", label: "2-Medium" },
              { value: "3", label: "3-High" },
            ]}
          />
        </div>
        <div className="flex flex-col w-full">
          <div
            className="w-full h-[36px] flex items-center justify-center rounded border border-gray-300 mb-1"
            style={{ background: "#1D7ED9" }}
          >
            <span className="text-white text-xs font-semibold">
              Point Deductions
            </span>
          </div>
          <FormInput
            name={`auditCategory.${index}.pointDeductions`} 
            control={control}
            type="number" 
          />
        </div>
        <div className="flex flex-col w-full">
          <div
            className="w-full h-[36px] flex items-center justify-center rounded border border-gray-300 mb-1"
            style={{ background: "#1D7ED9" }}
          >
            <span className="text-white text-xs font-semibold">
              Section Score
            </span>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <FormInput
              name={`auditCategory.${index}.sectionScore`}
              control={control}
              type="number"
              disabled
              readOnly
            />
            <div className="h-3 rounded relative w-full bg-gray-200">
              <div
                className="h-3 rounded absolute left-0 top-0"
                style={{
                  width: `${scorePctg}%`,
                  background: boxBgColor
                }}
              />
              <span className="text-xs font-semibold text-white z-10 w-full text-center absolute left-0 top-0 flex items-center justify-center h-3">
                {scorePctg}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <FormInput
        name={`auditCategory.${index}.comments`}
        control={control}
        label="Comments"
        labelWidth="min-w-[120px]"
        fullWidth
        multiline
        rows={3}
      />
      <div className="mb-6"></div>

      <div className="flex justify-end gap-2">
        {index > 0 && (
          <button
            type="button"
            className="px-4 py-1 rounded bg-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-300"
            onClick={() => remove(index)}
          >
            Delete row
          </button>
        )}
        <button
          type="button"
          className="px-4 py-1 rounded bg-gray-800 text-white text-xs font-semibold hover:bg-gray-900"
          onClick={() => append({...JSON.parse(JSON.stringify(defaultValAuditCategory))})}
        >
          Add Row
        </button>
      </div>
    </div>
  );
};

export default AuditCategories;