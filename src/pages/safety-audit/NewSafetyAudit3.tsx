import React from 'react';
import Card from '../../components/Card';

const NewSafetyAudit3: React.FC = () => {
  return (
    <div className="py-6 space-y-6">
      {/* Project Information */}
      <Card title="Project Information">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
          <div><span className="font-semibold">Project:</span> 123</div>
          <div><span className="font-semibold">Zone:</span> Z1+</div>
          <div><span className="font-semibold">Project Executive:</span> Juan Garcia</div>
          <div><span className="font-semibold">Operations Executive:</span> Andrew Thompson</div>
          <div><span className="font-semibold">Safety Director:</span> Mark Cantu</div>
          <div><span className="font-semibold">General Superintendent:</span> Kurt Jung</div>
          <div><span className="font-semibold">Project Director:</span> Rahul Deshmukh</div>
          <div><span className="font-semibold">Project Manager:</span> Rahul Deshmukh</div>
          <div><span className="font-semibold">Superintendent:</span> Kurt Jung</div>
          <div><span className="font-semibold">Project Safety Manager:</span> Kurt Jung</div>
        </div>
      </Card>

      {/* Audit Summary */}
      <Card title="Audit Summary">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Audit Date:</label>
            <input type="date" className="w-full border border-gray-300 rounded px-2 py-1" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Audit By:</label>
            <input type="text" value="Rahul Deshmukh" disabled className="w-full border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Co-Auditor 1:</label>
            <select className="w-full border border-gray-300 rounded px-2 py-1">
              <option value="">Select</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Co-Auditor 2:</label>
            <select className="w-full border border-gray-300 rounded px-2 py-1">
              <option value="">Select</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold mb-1">Notes:</label>
            <textarea className="w-full border border-gray-300 rounded px-2 py-1 min-h-[48px]" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Workforce:</label>
            <input type="text" className="w-full border border-gray-300 rounded px-2 py-1" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">EMF:</label>
            <input type="text" value="1" disabled className="w-full border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-500" />
          </div>
          <div className="flex items-end gap-2 md:col-span-2">
            <div>
              <label className="block text-sm font-semibold mb-1">Safety Score:</label>
              <div className="flex items-center gap-2">
                <input type="text" value="150/150" disabled className="w-24 border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-500" />
                <div className="w-32 h-4 bg-gray-200 rounded">
                  <div className="h-4 bg-green-500 rounded" style={{ width: '100%' }} />
                </div>
                <span className="text-xs font-semibold text-green-700">100%</span>
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
            <div>
              <label className="block text-xs font-semibold mb-1">Category:</label>
              <select className="w-full border border-gray-300 rounded px-2 py-1">
                <option value="">Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Violation Type:</label>
              <select className="w-full border border-gray-300 rounded px-2 py-1">
                <option value="">Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Responsible Party:</label>
              <select className="w-full border border-gray-300 rounded px-2 py-1">
                <option value="">Select</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
            <div>
              <label className="block text-xs font-semibold mb-1">Violations</label>
              <input type="number" className="w-full border border-gray-300 rounded px-2 py-1" value={0} readOnly />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Highest Severity Level</label>
              <select className="w-full border border-gray-300 rounded px-2 py-1">
                <option value="0">0-No Violation</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Point Deductions</label>
              <input type="number" className="w-full border border-gray-300 rounded px-2 py-1" value={0} readOnly />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Section Score</label>
              <input type="text" className="w-full border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-500" value="150/150" readOnly />
              <div className="w-full h-3 bg-gray-200 rounded mt-1">
                <div className="h-3 bg-green-500 rounded" style={{ width: '100%' }} />
              </div>
              <span className="text-xs font-semibold text-green-700">100%</span>
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-xs font-semibold mb-1">Comments:</label>
            <textarea className="w-full border border-gray-300 rounded px-2 py-1 min-h-[48px]" />
          </div>
          <div className="flex justify-end">
            <button className="px-4 py-1 rounded bg-gray-200 text-gray-700 text-xs font-semibold hover:bg-gray-300">Delete row</button>
          </div>
        </div>
        {/* Violation 2 (repeat structure) */}
        <div className="mb-6">
          <div className="font-semibold mb-2">Violation 2</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
            <div>
              <label className="block text-xs font-semibold mb-1">Category:</label>
              <select className="w-full border border-gray-300 rounded px-2 py-1">
                <option value="">Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Violation Type:</label>
              <select className="w-full border border-gray-300 rounded px-2 py-1">
                <option value="">Select</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Responsible Party:</label>
              <select className="w-full border border-gray-300 rounded px-2 py-1">
                <option value="">Select</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-2">
            <div>
              <label className="block text-xs font-semibold mb-1">Violations</label>
              <input type="number" className="w-full border border-gray-300 rounded px-2 py-1" value={0} readOnly />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Highest Severity Level</label>
              <select className="w-full border border-gray-300 rounded px-2 py-1">
                <option value="0">0-No Violation</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Point Deductions</label>
              <input type="number" className="w-full border border-gray-300 rounded px-2 py-1" value={0} readOnly />
            </div>
            <div>
              <label className="block text-xs font-semibold mb-1">Section Score</label>
              <input type="text" className="w-full border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-500" value="150/150" readOnly />
              <div className="w-full h-3 bg-gray-200 rounded mt-1">
                <div className="h-3 bg-green-500 rounded" style={{ width: '100%' }} />
              </div>
              <span className="text-xs font-semibold text-green-700">100%</span>
            </div>
          </div>
          <div className="mb-2">
            <label className="block text-xs font-semibold mb-1">Comments:</label>
            <textarea className="w-full border border-gray-300 rounded px-2 py-1 min-h-[48px]" />
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

export default NewSafetyAudit3; 