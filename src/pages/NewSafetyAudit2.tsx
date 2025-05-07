import React from 'react';
import Card from '../components/Card';

const NewSafetyAudit2: React.FC = () => {
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
        <div className="mb-6">
          <div className="font-semibold mb-2">Violation 1</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Category:</label>
              <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1">
                <option value="">Select</option>
              </select>
            </div>
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Violation Type:</label>
              <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1">
                <option value="">Select</option>
              </select>
            </div>
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Responsible Party:</label>
              <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1">
                <option value="">Select</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Violations</label>
              <input type="number" className="flex-1 w-full border border-gray-300 rounded px-2 py-1" value={0} readOnly />
            </div>
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Highest Severity Level</label>
              <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1">
                <option value="0">0-No Violation</option>
              </select>
            </div>
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Point Deductions</label>
              <input type="number" className="flex-1 w-full border border-gray-300 rounded px-2 py-1" value={0} readOnly />
            </div>
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Section Score</label>
              <div className="flex items-center gap-2">
                <input type="text" className="flex-1 w-full border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-500" value="150/150" readOnly />
                <div className="h-3 rounded relative w-full bg-gray-200">
                  <div className="h-3 rounded absolute left-0 top-0" style={{ width: '100%', background: '#0C9D3A' }} />
                  <span className="text-xs font-semibold text-white z-10 w-full text-center absolute left-0 top-0 flex items-center justify-center h-3">100%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex sm:items-start gap-x-3 mb-2">
            <label className="block text-xs font-semibold mb-1 min-w-[120px]">Comments:</label>
            <textarea className="flex-1 w-full border border-gray-300 rounded px-2 py-1 min-h-[48px]" />
          </div>
          <div className="flex justify-end">
            <button className="px-4 py-1 rounded bg-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-300">Delete row</button>
          </div>
        </div>
        {/* Violation 2 (repeat structure) */}
        <div className="mb-6">
          <div className="font-semibold mb-2">Violation 2</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Category:</label>
              <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1">
                <option value="">Select</option>
              </select>
            </div>
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Violation Type:</label>
              <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1">
                <option value="">Select</option>
              </select>
            </div>
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Responsible Party:</label>
              <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1">
                <option value="">Select</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Violations</label>
              <input type="number" className="flex-1 w-full border border-gray-300 rounded px-2 py-1" value={0} readOnly />
            </div>
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Highest Severity Level</label>
              <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1">
                <option value="0">0-No Violation</option>
              </select>
            </div>
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Point Deductions</label>
              <input type="number" className="flex-1 w-full border border-gray-300 rounded px-2 py-1" value={0} readOnly />
            </div>
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-xs font-semibold mb-1 min-w-[120px]">Section Score</label>
              <div className="flex items-center gap-2">
                <input type="text" className="flex-1 w-full border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-500" value="150/150" readOnly />
                <div className="h-3 rounded relative w-full bg-gray-200">
                  <div className="h-3 rounded absolute left-0 top-0" style={{ width: '100%', background: '#0C9D3A' }} />
                  <span className="text-xs font-semibold text-white z-10 w-full text-center absolute left-0 top-0 flex items-center justify-center h-3">100%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:flex sm:items-start gap-x-3 mb-2">
            <label className="block text-xs font-semibold mb-1 min-w-[120px]">Comments:</label>
            <textarea className="flex-1 w-full border border-gray-300 rounded px-2 py-1 min-h-[48px]" />
          </div>
          <div className="flex justify-end gap-2">
            <button className="px-4 py-1 rounded bg-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-300">Delete row</button>
            <button className="px-4 py-1 rounded bg-gray-800 text-white text-xs font-semibold hover:bg-gray-900">Add Row</button>
          </div>
        </div>
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