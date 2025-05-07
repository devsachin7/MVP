import React, { useState } from 'react';
import Card from '../components/Card';

const NewSafetyAudit2: React.FC = () => {
  const [violations, setViolations] = useState([
    {
      category: '',
      violationType: '',
      responsibleParty: '',
      violations: 0,
      severity: '0',
      deductions: 0,
      sectionScore: '150/150',
      comments: '',
    },
  ]);

  const handleAddViolation = () => {
    setViolations([
      ...violations,
      {
        category: '',
        violationType: '',
        responsibleParty: '',
        violations: 0,
        severity: '0',
        deductions: 0,
        sectionScore: '150/150',
        comments: '',
      },
    ]);
  };

  const handleDeleteViolation = (idx: number) => {
    if (violations.length === 1) return;
    setViolations(violations.filter((_, i) => i !== idx));
  };

  return (
    <div className="py-6 space-y-6">
      {/* Project Information */}
      <Card title="Project Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
          <div className="sm:flex sm:items-center gap-x-3">
            <label className="block min-w-[120px] font-semibold">Project:</label>
            <span>123</span>
          </div>
          <div className="sm:flex sm:items-center gap-x-3">
            <label className="block min-w-[120px] font-semibold">Zone:</label>
            <span>Z1+</span>
          </div>
          <div className="sm:flex sm:items-center gap-x-3">
            <label className="block min-w-[120px] font-semibold">Project Executive:</label>
            <span>Juan Garcia</span>
          </div>
          <div className="sm:flex sm:items-center gap-x-3">
            <label className="block min-w-[120px] font-semibold">Operations Executive:</label>
            <span>Andrew Thompson</span>
          </div>
          <div className="sm:flex sm:items-center gap-x-3">
            <label className="block min-w-[120px] font-semibold">Safety Director:</label>
            <span>Mark Cantu</span>
          </div>
          <div className="sm:flex sm:items-center gap-x-3">
            <label className="block min-w-[120px] font-semibold">General Superintendent:</label>
            <span>Kurt Jung</span>
          </div>
          <div className="sm:flex sm:items-center gap-x-3">
            <label className="block min-w-[120px] font-semibold">Project Director:</label>
            <span>Rahul Deshmukh</span>
          </div>
          <div className="sm:flex sm:items-center gap-x-3">
            <label className="block min-w-[120px] font-semibold">Project Manager:</label>
            <span>Rahul Deshmukh</span>
          </div>
          <div className="sm:flex sm:items-center gap-x-3">
            <label className="block min-w-[120px] font-semibold">Superintendent:</label>
            <span>Kurt Jung</span>
          </div>
          <div className="sm:flex sm:items-center gap-x-3">
            <label className="block min-w-[120px] font-semibold">Project Safety Manager:</label>
            <span>Kurt Jung</span>
          </div>
        </div>
      </Card>

      {/* Audit Summary */}
      <Card title="Audit Summary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-4">
          <div className="sm:flex sm:items-center gap-x-3">
            <label className="block text-sm font-semibold mb-1 min-w-[120px]">Audit Date:</label>
            <input type="date" className="flex-1 w-full border border-gray-300 rounded px-2 py-1" />
          </div>
            <div className="sm:flex sm:items-center gap-x-3">
            <label className="block text-sm font-semibold mb-1 min-w-[120px]">Audit By:</label>
            <span className='text-sm'>Rahul Deshmukh</span>
          </div>
          <div className="sm:flex sm:items-center gap-x-3">
            <label className="block text-sm font-semibold mb-1 min-w-[120px]">Co-Auditor 1:</label>
            <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1">
              <option value="">Select</option>
            </select>
          </div>
          <div className="sm:flex sm:items-center gap-x-3">
            <label className="block text-sm font-semibold mb-1 min-w-[120px]">Co-Auditor 2:</label>
            <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1">
              <option value="">Select</option>
            </select>
          </div>
          <div className="md:col-span-2 sm:flex sm:items-start gap-x-3">
            <label className="block text-sm font-semibold mb-1 min-w-[120px]">Notes:</label>
            <textarea className="flex-1 w-full border border-gray-300 rounded px-2 py-1 min-h-[48px]" />
          </div>
          <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="sm:flex sm:items-center gap-x-3 flex-1">
              <label className="block text-sm font-semibold mb-1 min-w-[120px]">Workforce:</label>
              <input type="text" className="flex-1 w-full border border-gray-300 rounded px-2 py-1" />
            </div>
            <div className="sm:flex sm:items-center gap-x-3 flex-1">
              <label className="block text-sm font-semibold mb-1 min-w-[60px]">EMF:</label>
              <input type="text" value="1" disabled className="flex-1 w-full border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-500" />
            </div>
            <div className="sm:flex sm:items-center gap-x-3 flex-1">
              <label className="block text-sm font-semibold mb-1 min-w-[100px]">Safety Score:</label>
              <div className="flex items-center gap-2 w-full">
                <input type="text" value="150/150" disabled className="w-24 border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-500" />
                <div className="h-3 rounded relative w-full bg-gray-200">
                  <div className="h-3 rounded absolute left-0 top-0" style={{ width: '100%', background: '#0C9D3A' }} />
                  <span className="text-xs font-semibold text-white z-10 w-full text-center absolute left-0 top-0 flex items-center justify-center h-3">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Severity Levels */}
      <Card title="Severity Levels">
        <div className="text-sm mb-2">
          When you select the Severity Level for each category, please refer to the following:
        </div>
        <ul className="text-sm list-disc list-inside mb-2">
          <li>0 - No Violation - Satisfactory level of compliance met for the category.</li>
          <li>1 - Minimal - Minimal opportunity for injury, but demonstrates lack of support for the requirement.</li>
          <li>2 - Minor - The violation has the potential to result in medical first aid or damage to equipment, but be minimum.</li>
          <li>3 - Medium - The violation has the potential to result in a medical first aid or recordable injury or damage greater than $1,000 may occur.</li>
          <li>4 - Serious - The violation has the potential to result in a recordable injury and/or a recordable injury with restricted duty or damage greater than $10,000.</li>
          <li>5 - IDLH (Immediately Dangerous to Life and Health) - The violation has the potential to result in a lost work day case or fatality or damage greater than $100,000 may occur.</li>
        </ul>
        <div className="text-xs text-gray-700">
          If you see an IDLH condition on the jobsite, you need to immediately stop the work activity and contact site leadership. You need to remain at the location until proper response has been carried out. IDLH condition is not listed in the 'Highest Severity Level' dropdown, but listed as a separate item at the bottom of the form.
        </div>
      </Card>

      {/* Audit Categories - Violation 1 */}
      <Card title="Audit Categories">
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
      </Card>
    </div>
  );
};

export default NewSafetyAudit2; 