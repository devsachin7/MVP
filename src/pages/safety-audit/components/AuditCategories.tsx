import React from 'react';

interface Violation {
  category: string;
  violationType: string;
  responsibleParty: string;
  violations: number;
  severity: string;
  deductions: number;
  sectionScore: string;
  comments: string;
}

interface AuditCategoriesProps {
  violations: Violation[];
  setViolations: (v: Violation[]) => void;
  handleAddViolation: () => void;
  handleDeleteViolation: (idx: number) => void;
}

const AuditCategories: React.FC<AuditCategoriesProps> = ({ violations, setViolations, handleAddViolation, handleDeleteViolation }) => (
  <>
    {violations.map((v, idx) => (
      <div className="mb-6" key={idx}>
        <div className="font-semibold mb-2">Violation {idx + 1}</div>
        <div className="mb-2">
          <div className="sm:flex sm:items-center gap-x-3 mb-4">
            <label className="block text-xs font-semibold mb-1 min-w-[120px]">Category:</label>
            <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1" value={v.category} onChange={e => {
              const updated = [...violations];
              updated[idx].category = e.target.value;
              setViolations(updated);
            }}>
              <option value="">Select</option>
            </select>
          </div>
          <div className="sm:flex sm:items-center gap-x-3 mb-4">
            <label className="block text-xs font-semibold mb-1 min-w-[120px]">Violation Type:</label>
            <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1" value={v.violationType} onChange={e => {
              const updated = [...violations];
              updated[idx].violationType = e.target.value;
              setViolations(updated);
            }}>
              <option value="">Select</option>
            </select>
          </div>
          <div className="sm:flex sm:items-center gap-x-3 mb-4">
            <label className="block text-xs font-semibold mb-1 min-w-[120px]">Responsible Party:</label>
            <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1" value={v.responsibleParty} onChange={e => {
              const updated = [...violations];
              updated[idx].responsibleParty = e.target.value;
              setViolations(updated);
            }}>
              <option value="">Select</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2 mt-6">
          <div className="flex flex-col w-full">
            <div className="w-full h-[36px] flex items-center justify-center rounded border border-gray-300 mb-1" style={{ background: '#1D7ED9' }}>
              <span className="text-white text-xs font-semibold">Violations</span>
            </div>
            <input type="number" className="w-full border border-gray-300 rounded px-2 py-1" value={v.violations} readOnly />
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full h-[36px] flex items-center justify-center rounded border border-gray-300 mb-1" style={{ background: '#1D7ED9' }}>
              <span className="text-white text-xs font-semibold">Highest Severity Level</span>
            </div>
            <select className="w-full border border-gray-300 rounded px-2 py-1" value={v.severity} onChange={e => {
              const updated = [...violations];
              updated[idx].severity = e.target.value;
              setViolations(updated);
            }}>
              <option value="0">0-No Violation</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full h-[36px] flex items-center justify-center rounded border border-gray-300 mb-1" style={{ background: '#1D7ED9' }}>
              <span className="text-white text-xs font-semibold">Point Deductions</span>
            </div>
            <input type="number" className="w-full border border-gray-300 rounded px-2 py-1" value={v.deductions} readOnly />
          </div>
          <div className="flex flex-col w-full">
            <div className="w-full h-[36px] flex items-center justify-center rounded border border-gray-300 mb-1" style={{ background: '#1D7ED9' }}>
              <span className="text-white text-xs font-semibold">Section Score</span>
            </div>
            <div className="flex flex-col gap-1 w-full">
              <input type="text" className="w-full border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-500" value={v.sectionScore} readOnly />
              <div className="h-3 rounded relative w-full bg-gray-200">
                <div className="h-3 rounded absolute left-0 top-0" style={{ width: '100%', background: '#0C9D3A' }} />
                <span className="text-xs font-semibold text-white z-10 w-full text-center absolute left-0 top-0 flex items-center justify-center h-3">100%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-start gap-x-3 mb-2 mt-6">
          <label className="block text-xs font-semibold mb-1 min-w-[120px]">Comments:</label>
          <textarea className="flex-1 w-full border border-gray-300 rounded px-2 py-1 min-h-[48px]" value={v.comments} onChange={e => {
            const updated = [...violations];
            updated[idx].comments = e.target.value;
            setViolations(updated);
          }} />
        </div>
        <div className="mb-6"></div>
        <div className="flex justify-end gap-2">
          <button className="px-4 py-1 rounded bg-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-300" onClick={() => handleDeleteViolation(idx)} disabled={violations.length === 1}>Delete row</button>
          {idx === violations.length - 1 && (
            <button className="px-4 py-1 rounded bg-gray-800 text-white text-xs font-semibold hover:bg-gray-900" onClick={handleAddViolation}>Add Row</button>
          )}
        </div>
      </div>
    ))}
    <div className="text-xs text-gray-700">
      Once the audit is complete and the information is to be inputted into the Portal, please click on the "Submit" button. A brief summary of your audit will be displayed on the screen. If it is correct, click on the "Confirm and Submit" button.
    </div>
    <div className="flex justify-end mt-4">
      <button className="px-8 py-2 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-colors shadow">Submit</button>
    </div>
  </>
);

export default AuditCategories; 