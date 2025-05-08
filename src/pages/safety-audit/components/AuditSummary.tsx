import React from 'react';

const AuditSummary: React.FC = () => {
  return (
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
  );
};

export default AuditSummary; 