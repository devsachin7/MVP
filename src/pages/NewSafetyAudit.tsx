import React from 'react';
import Card from '../components/Card';
import { useNavigate } from 'react-router-dom';

const NewSafetyAudit1: React.FC = () => {
  const navigate = useNavigate();
  const handleGo = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/safety-audit/new-safety-audit-2');
  };
  return (
    <div className="py-6">
      <Card title="New Safety Audit 1">
        <h6 className="text-base font-semibold text-gray-800 mb-4">
          Beginning of Safety Audit
        </h6>
        <ul className="list-disc list-inside text-sm text-gray-700 leading-relaxed space-y-2">
          <li>Commit a maximum of one hour to perform a Safety Audit. Smaller projects may take less time.</li>
          <li>All project leadership must participate, including Superintendents, Project Managers, Assistant Superintendents, Project Engineers, Quality, and Safety personnel.</li>
          <li>Use any method (iPad, iPhone, or pen and paper) to record observations and severity.</li>
          <li>If using pen and paper, complete the Safety Audit Form after the walkthrough.</li>
          <li>Each of the 15 categories in the form includes dropdowns for specific violations and responsible parties.</li>
          <li>Assign a severity level to each violation.</li>
          <li>If the observed violation isn't listed, select "Other" and describe it in the Notes area.</li>
          <li>Use the form to note if work was stopped due to IDLH (Immediately Dangerous to Life or Health) conditions.</li>
          <li>The audit checks for both compliance (e.g., rigging inspection) and unsafe conditions/acts.</li>
          <li>Examples:
            <ul className="list-disc list-inside ml-5">
              <li>Unsafe condition: tripping hazard like a board in a walkway.</li>
              <li>Unsafe act: someone walking over that board.</li>
            </ul>
          </li>
          <li>Special attention is given to risk areas like lower back strain, line of fire, and pinch points.</li>
        </ul>

        {/* Form Section */}
        <form className="mt-8 space-y-6" onSubmit={handleGo}>
          <div className="sm:flex sm:items-center gap-x-3 w-full">
            <label htmlFor="project" className="block min-w-[120px] text-sm font-semibold text-gray-700 mb-1 sm:mb-0">Project</label>
            <input
              id="project"
              type="text"
              value="123"
              disabled
              className="max-w-xs w-full py-2.5 sm:py-2 px-4 border border-gray-300 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none text-gray-500 bg-gray-100"
            />
          </div>
          <div className="sm:flex sm:items-center gap-x-3 w-full">
            <label htmlFor="zone" className="block min-w-[120px] text-sm font-semibold text-gray-700 mb-1 sm:mb-0">Select a Zone</label>
            <select
              id="zone"
              className="max-w-xs w-full py-2.5 sm:py-2 px-4 border border-gray-300 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500"
              defaultValue=""
            >
              <option value="" disabled>Select a zone</option>
              <option value="zone1">Zone 1</option>
              <option value="zone2">Zone 2</option>
            </select>
          </div>
          <div className="flex justify-end w-full">
            <button
              type="submit"
              className="px-8 py-2 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-colors shadow"
            >
              Go
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default NewSafetyAudit1; 