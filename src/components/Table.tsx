import React from "react";
import { Column, UserData } from "../types/table";

interface DynamicTableProps {
  columns: Column[];
  data: UserData[];
}

const Table: React.FC<DynamicTableProps> = ({ columns, data }) => {
    console.log(data);
    
  return (
    <div className="border rounded-md overflow-hidden shadow-sm">
      <table className="min-w-full table-auto text-left border-collapse">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-2 border-b">
                {col.label}
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
              <tr key={index} className="hover:bg-gray-50">
                {columns.map((col) => (
                  <td key={col.key} className="px-4 py-2 border-t">
                    {row[col.key]}
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
