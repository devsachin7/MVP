import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "../../../../../components/form-components/FormInput";
import FormSelect from "../../../../../components/form-components/FormSelect";

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
    <div className="w-full max-w-7xl mx-auto bg-white rounded-xl p-8 mb-4">     
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 mb-8">
            {/* Left column */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-8">
                <label className="font-semibold text-base text-gray-800 w-48 text-right">Company ID</label>
                <FormInput name="companyId" placeholder="Enter company ID" className="w-96" required control={control} />
              </div>
              <div className="flex items-center gap-8">
                <label className="font-semibold text-base text-gray-800 w-48 text-right">Contact Name</label>
                <FormInput name="contactName" placeholder="Enter contact name" className="w-96" required control={control} />
              </div>
              <div className="flex items-center gap-8">
                <label className="font-semibold text-base text-gray-800 w-48 text-right">Trade Partner Tier</label>
                <FormSelect<TradeFormFields>
                  name="tradePartnerTier"
                  options={[
                    { value: "", label: "Select" },
                    { value: "Tier 1", label: "Tier 1" },
                    { value: "Tier 2", label: "Tier 2" },
                    { value: "Tier 3", label: "Tier 3" },
                  ]}
                  className="w-96"
                  required
                  control={control}
                />
              </div>
              <div className="flex items-center gap-8">
                <label className="font-semibold text-base text-gray-800 w-48 text-right">Parent Company ID</label>
                <FormSelect<TradeFormFields>
                  name="parentCompanyId"
                  options={[
                    { value: "", label: "Select" },
                    { value: "Parent 1", label: "Parent 1" },
                    { value: "Parent 2", label: "Parent 2" },
                  ]}
                  className="w-96"
                  control={control}
                />
              </div>
            </div>
            {/* Right column */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-8">
                <label className="font-semibold text-base text-gray-800 w-48 text-right">Company Name</label>
                <FormInput name="companyName" placeholder="Enter company name" className="w-96" required control={control} />
              </div>
              <div className="flex items-center gap-8">
                <label className="font-semibold text-base text-gray-800 w-48 text-right">Contact Email</label>
                <FormInput name="contactEmail" placeholder="Enter contact email" className="w-96" required control={control} />
              </div>
              <div className="flex items-center gap-8">
                <label className="font-semibold text-base text-gray-800 w-48 text-right">Trade Partner ID</label>
                <FormSelect<TradeFormFields>
                  name="tradePartnerId"
                  options={[
                    { value: "", label: "Select" },
                    { value: "TPID 1", label: "TPID 1" },
                    { value: "TPID 2", label: "TPID 2" },
                  ]}
                  className="w-96"
                  control={control}
                />
              </div>
              <div className="flex items-center gap-8">
                <label className="font-semibold text-base text-gray-800 w-48 text-right">Zone</label>
                <FormSelect<TradeFormFields>
                  name="zone"
                  options={[
                    { value: "", label: "Select" },
                    { value: "Zone 1", label: "Zone 1" },
                    { value: "Zone 2", label: "Zone 2" },
                  ]}
                  className="w-96"
                  control={control}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-4 mt-8">
            <button type="button" onClick={onClose} className="btn-white btn-sm">Cancel</button>
            <button type="submit" className="btn-black btn-sm">Save</button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default TradeForm;