import React from "react";
import { useFormContext } from "react-hook-form";
import FormInput from "../../../components/form-components/FormInput";
import FormSelect from "../../../components/form-components/FormSelect";
import FormDatePicker from "../../../components/form-components/FormDatePicker";
import { getEMF } from "../../../utils/safetyAuditUtils";

interface AuditSummaryProps {
  isReview?: boolean;
}

const AuditSummary: React.FC<AuditSummaryProps> = ({isReview}) => {
  const { setValue, watch } = useFormContext();
  const workForceCount = watch("workForce");
  const emfVal = getEMF(+workForceCount);
  setValue("emf", emfVal.toString());

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-4">
      <FormDatePicker name="auditDate" label="Audit Date" disabled={Boolean(isReview)} />
      <div className="sm:flex sm:items-center gap-x-3">
        <label className="block text-base font-semibold mb-1 min-w-[120px]">
          Audit By:
        </label>
        <span className="text-base">Rahul Deshmukh</span>
      </div>

      <FormSelect
        name="coAuditor1"
        label="Co-Auditor 1"
        labelWidth="min-w-[120px]"
        options={[
          { value: "user1", label: "John Doe" },
          { value: "user2", label: "Jane Smith" },
          { value: "user3", label: "Alex Johnson" },
        ]}
        placeholder="Select"
        disabled={Boolean(isReview)}
      />
      <FormSelect
        name="coAuditor2"
        label="Co-Auditor 2"
        labelWidth="min-w-[120px]"
        options={[
          { value: "user1", label: "John Doe" },
          { value: "user2", label: "Jane Smith" },
          { value: "user3", label: "Alex Johnson" },
        ]}
        placeholder="Select"
        disabled={Boolean(isReview)}
      />

      <FormInput
        name="notes"
        label="Notes"
        labelWidth="min-w-[120px]"
        fullWidth
        multiline
        rows={4}
        placeholder="Enter notes here..."
        disabled={Boolean(isReview)}
      />

      <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3">
        <FormInput
          name="workForce"
          label="Workforce"
          labelWidth="min-w-[120px]"
          className="flex-1"
          disabled={Boolean(isReview)}
        />
        <FormInput
          name="emf"
          label="EMF"
          labelWidth="min-w-[60px]"
          className="flex-1"
          disabled
        />

        <div className="sm:flex sm:items-center gap-x-3 flex-1">
          <label className="block text-base font-semibold mb-1 min-w-[110px]">
            Safety Score:
          </label>
          <div
            className="flex flex-col items-center gap-2 w-full mb-[-24px]"
          >
            <input
              type="text"
              value="150/150"
              disabled
              className="w-full border border-gray-300 rounded h-[42px] px-4 py-1 bg-gray-100 text-gray-500"
            />
            <div className="flex items-center justify-center h-[22px] rounded-lg relative w-full bg-green-600" style={{ width: "100%" }}>
              <span className="text-xs font-semibold text-white z-10 w-full text-center items-center justify-center">
                100%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditSummary;
