import React from "react";
import { Column, UserData } from "../types/table";

interface DynamicTableProps {
  columns: Column[];
  data: UserData[];
}

const Table: React.FC<DynamicTableProps> = ({ columns, data }) => {
    console.log(data);
    
  return (
    <div className="rounded-xl overflow-hidden shadow bg-white">
      <table className="min-w-full table-auto text-left border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-700 border-b border-gray-200 text-left">
                <span className="flex items-center gap-1">
                  {col.label}
                  <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-4 text-gray-500">
                No data available.
              </td>
            </tr>
          ) : (
            data?.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 border-b border-gray-200 last:border-b-0">
                {columns.map((col) => (
                  <td key={col.key} className="px-6 py-3 text-sm text-gray-700">
                    {col.key === 'action' ? (
                      <a href="#" className="text-blue-600 hover:underline">Edit</a>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
