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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">

            <FormInput name="companyId" label="Company ID" placeholder="Enter company ID" className="flex-1" required control={control as any} />
            <FormInput name="contactName" label="First Name" placeholder="Enter contact name" className="flex-1" required control={control as any} />

            <FormSelect<TradeFormFields>
              name="tradePartnerTier"
              label="Trade Partner Tier"
              labelWidth="min-w-[120px]"
              options={[
                { value: "", label: "Select" },
                { value: "Tier 1", label: "Tier 1" },
                { value: "Tier 2", label: "Tier 2" },
                { value: "Tier 3", label: "Tier 3" },
              ]}
              control={control as any}
            />

            <FormSelect<TradeFormFields>
              name="parentCompanyId"
              label="Parent Company ID"
              labelWidth="min-w-[120px]"
              options={[
                { value: "", label: "Select" },
                { value: "Parent 1", label: "Parent 1" },
                { value: "Parent 2", label: "Parent 2" },
              ]}
              control={control as any}
            />

            <FormSelect<TradeFormFields>
              name="tradePartnerId"
              label="Trade Partner ID"
              labelWidth="min-w-[120px]"
              options={[
                { value: "", label: "Select" },
                { value: "TPID 1", label: "TPID 1" },
                { value: "TPID 2", label: "TPID 2" },
              ]}
              control={control as any}
            />

            <FormSelect<TradeFormFields>
              name="zone"
              label="Zone"
              labelWidth="min-w-[120px]"
              options={[
                { value: "", label: "Select" },
                { value: "Zone 1", label: "Zone 1" },
                { value: "Zone 2", label: "Zone 2" },
              ]}
              control={control as any}
            />
            <FormInput name="companyName" label="Company Name" placeholder="Enter company name" className="flex-1" required control={control as any} />
            <FormInput name="contactEmail" label="Contact Email" placeholder="Enter contact email" className="flex-1" required control={control as any} />
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