import React from "react";
import { useForm, FormProvider, Controller } from "react-hook-form";
import FormInput from "../../../../../components/form-components/FormInput";
import FormSelect from "../../../../../components/form-components/FormSelect";
import { MultiSelect } from "../../../../../components/form-components/MultiSelect";

interface TradeFormFields {
  companyId: string;
  companyName: string;
  contactName: string;
  contactEmail: string;
  tradePartnerTier: string;
  tradePartnerId: string;
  parentCompanyId: string;
  zone: string;
}

interface TradeFormProps {
  onAdd: (data: TradeFormFields) => void;
  onClose: () => void;
  editData?: Partial<TradeFormFields>;
}

const DEFAULT_VALUES: TradeFormFields = {
  companyId: "",
  companyName: "",
  contactName: "",
  contactEmail: "",
  tradePartnerTier: "",
  tradePartnerId: "",
  parentCompanyId: "",
  zone: "",
};

const ZONE_OPTIONS = [
  { value: "Zone 1", label: "Zone 1" },
  { value: "Zone 2", label: "Zone 2" },
  { value: "Zone 3", label: "Zone 3" },
  { value: "Zone 4", label: "Zone 4" },
  { value: "Zone 5", label: "Zone 5" },
  { value: "Zone 6", label: "Zone 6" },
];

const TradeForm: React.FC<TradeFormProps> = ({ onAdd, onClose, editData }) => {
  const methods = useForm<TradeFormFields>({
    defaultValues: {
      ...DEFAULT_VALUES,
      ...editData,
    },
  });
  const { handleSubmit, reset, control } = methods;

  const onSubmit = (data: TradeFormFields) => {
    onAdd(data);
    reset();
  };

  return (
    <div className="w-full max-w-8xl mx-auto bg-white rounded-xl p-4 sm:p-8 mb-4">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 mb-8">
            <div className="flex items-center">
              <label className="font-semibold text-base text-gray-800 w-56">Company ID</label>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <FormInput name="companyId" placeholder="Enter company ID" className="flex-1" required control={control as any} />
            </div>
            <div className="flex items-center">
              <label className="font-semibold text-base text-gray-800 w-56">Company Name</label>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <FormInput name="companyName" placeholder="Enter company name" className="flex-1" required control={control as any} />
            </div>
            <div className="flex items-center">
              <label className="font-semibold text-base text-gray-800 w-56">Contact Name</label>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <FormInput name="contactName" placeholder="Enter contact name" className="flex-1" required control={control as any} />
            </div>
            <div className="flex items-center">
              <label className="font-semibold text-base text-gray-800 w-56">Contact Email</label>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <FormInput name="contactEmail" placeholder="Enter contact email" className="flex-1" required control={control as any} />
            </div>
            <div className="flex items-center">
              <label className="font-semibold text-base text-gray-800 w-56">Trade Partner Tier</label>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <FormSelect<TradeFormFields>
                name="tradePartnerTier"
                options={[
                  { value: "", label: "Select" },
                  { value: "Tier 1", label: "Tier 1" },
                  { value: "Tier 2", label: "Tier 2" },
                  { value: "Tier 3", label: "Tier 3" },
                ]}
                className="flex-1"
                required
                control={control as any}
              />
            </div>
            <div className="flex items-center">
              <label className="font-semibold text-base text-gray-800 w-56">Trade Partner ID</label>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <FormSelect<TradeFormFields>
                name="tradePartnerId"
                options={[
                  { value: "", label: "Select" },
                  { value: "TPID 1", label: "TPID 1" },
                  { value: "TPID 2", label: "TPID 2" },
                ]}
                className="flex-1"
                control={control as any}
              />
            </div>
            <div className="flex items-center">
              <label className="font-semibold text-base text-gray-800 w-56">Parent Company ID</label>
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              <FormSelect<TradeFormFields>
                name="parentCompanyId"
                options={[
                  { value: "", label: "Select" },
                  { value: "Parent 1", label: "Parent 1" },
                  { value: "Parent 2", label: "Parent 2" },
                ]}
                className="flex-1"
                control={control as any}
              />
            </div>
            <div className="flex items-center">
              <label className="font-semibold text-base text-gray-800 w-56">Zone</label>
              <Controller
                name="zone"
                control={control}
                render={({ field }) => (
                  <MultiSelect
                    label=""
                    value={field.value ? (Array.isArray(field.value) ? field.value : [field.value]) : []}
                    onChange={field.onChange}
                    options={ZONE_OPTIONS}
                    placeholder="Select Zones"
                    className="flex-1"
                  />
                )}
              />
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-8">
            <button type="button" onClick={onClose} className="btn-white btn-md">Cancel</button>
            <button type="submit" className="btn-black btn-md">Save</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default TradeForm;