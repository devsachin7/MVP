import React from "react";
import ProjectInformation from "./components/ProjectInformation";
import AuditSummary from "./components/AuditSummary";
import SeverityLevels from "./components/SeverityLevels";
import AuditCategories from "./components/AuditCategories";
import Card from "../../components/Card";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import {
  defaultValSafetyAudit,
} from "./utils/defaultValues";

const NewSafetyAudit2: React.FC = () => {
  const methods = useForm<any>({
    // To be replaced with proper interface
    defaultValues: defaultValSafetyAudit,
  });

  const { fields, append, remove } = useFieldArray({
    name: "auditCategory",
    control: methods.control,
  });

  const onSubmit = (data: any) => {
    console.log("Form submitted:", data);
  };

  const onError = (errors: any) => {
    console.error("Form errors:", errors);
  };  

  const renderSubmitButton = () => (
    <div className="flex justify-end mt-4">
      <button
        className="px-8 py-2 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-colors shadow"
        type="submit"
      >
        Submit
      </button>
    </div>
  );

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)} className="py-6 space-y-6">
        <Card title="Project Information">
          <ProjectInformation
            project="123"
            zone="Z1+"
            projectExecutive="Juan Garcia"
            operationsExecutive="Andrew Thompson"
            safetyDirector="Mark Cantu"
            generalSuperintendent="Kurt Jung"
            projectDirector="Rahul Deshmukh"
            projectManager="Rahul Deshmukh"
            superintendent="Kurt Jung"
            projectSafetyManager="Kurt Jung"
          />
        </Card>
        <Card title="Audit Summary">
          <AuditSummary />
        </Card>
        <Card title="Severity Levels">
          <SeverityLevels />
        </Card>
        <Card title="Audit Categories">
          {fields.map((field, index) => (
            <AuditCategories
              key={field.id}
              field={field}
              index={index}
              append={append}
              remove={remove}
            />
          ))}
          <div className="text-xs text-gray-700 mt-4">
            Once the audit is complete and the information is to be inputted
            into the Portal, please click on the "Submit" button. A brief
            summary of your audit will be displayed on the screen. If it is
            correct, click on the "Confirm and Submit" button.
          </div>
          {renderSubmitButton()}
        </Card>
      </form>
    </FormProvider>
  );
};

export default NewSafetyAudit2;