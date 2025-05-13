import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import { Input } from "../../components/form-components/Input";
import { Select } from "../../components/form-components/Select";
import { auditInstructions } from "./utils/locales";

const NewSafetyAudit1: React.FC = () => {
  const navigate = useNavigate();
  const handleGo = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/safety-audit/new-safety-audit-2");
  };

  const renderInstructions = () => (
    <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed space-y-2">
      {auditInstructions.map((instruction, index) => {
        if (typeof instruction === "object" && instruction.subItems) {
          return (
            <li key={index}>
              {instruction.text}
              <ul className="list-disc list-inside ml-5">
                {instruction.subItems.map((subItem, subIndex) => (
                  <li key={`${index}-${subIndex}`}>{subItem}</li>
                ))}
              </ul>
            </li>
          );
        }
        return (
          <li key={index}>
            {typeof instruction === "string" ? instruction : instruction.text}
          </li>
        );
      })}
    </ul>
  );

  const renderForm = () => (
    <form className="mt-8 space-y-6" onSubmit={handleGo}>
      <Input
        id="project"
        label="Project"
        labelWidth="min-w-[120px]"
        value="123"
        disabled
        className="max-w-md w-full"
      />
      <Select
        id="zone"
        label="Select a zone"
        labelWidth="min-w-[120px]"
        className="max-w-md w-full"
        options={[
          { value: "zone1", label: "Zone 1" },
          { value: "zone2", label: "Zone 2" },
        ]}
      />
      <div className="flex justify-end w-full">
        <button
          type="submit"
          className="px-8 py-2 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-colors shadow"
        >
          Go
        </button>
      </div>
    </form>
  );
  
  return (
    <div className="py-6">
      <Card title="New Safety Audit">
        <h6 className="text-base font-semibold text-gray-800 mb-4">
          Beginning of Safety Audit
        </h6>
        {renderInstructions()}
        {renderForm()}
      </Card>
    </div>
  );
};

export default NewSafetyAudit1;
