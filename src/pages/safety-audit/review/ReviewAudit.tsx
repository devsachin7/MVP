import React from 'react';
import Card from '../../../components/Card';

const ReviewAudit: React.FC = () => {
  return (
    <div className="py-6 space-y-6">
      <Card title="Review">
        <form className="p-8">
          <div className="space-y-4">
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-sm font-semibold mb-1 min-w-[120px]">Project:</label>
              <input type="text" value="123" disabled className="flex-1 w-full border border-gray-300 rounded px-2 py-1 bg-gray-100 text-gray-500" />
            </div>
            <div className="sm:flex sm:items-center gap-x-3">
              <label className="block text-sm font-semibold mb-1 min-w-[120px]">Select a Zone:</label>
              <select className="flex-1 w-full border border-gray-300 rounded px-2 py-1">
                <option value="">Select</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button type="submit" className="bg-black text-white px-8 py-2 rounded shadow hover:bg-gray-800 transition">Go</button>
          </div>
        </form>
      </Card>
      <footer className="text-xs text-gray-700 text-center py-8">
        © 2025 McCarthy Vaughn Partnership. All rights reserved.
      </footer>
    </div>
  );
};

export default ReviewAudit; 