import React, { useState } from "react";
import { Column, UserData } from "../types/table";

interface DynamicTableProps {
  columns: Column[];
  data: UserData[];
  showAction?: boolean;
  onEditRow?: (row: UserData) => void;
}

// Type guard for non-null string
function isNonNullString(val: unknown): val is string {
  return typeof val === 'string' && val !== null && val !== undefined;
}

const Table: React.FC<DynamicTableProps> = ({ columns, data, showAction, onEditRow }) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const allColumns = showAction
    ? [...columns, { key: 'action', label: 'Action' }]
    : columns;

  // Sorting logic
  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    const sorted = [...data].sort((a, b) => {
      const aValue = a[sortKey] ?? '';
      const bValue = b[sortKey] ?? '';
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      }
      return sortDirection === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
    return sorted;
  }, [data, sortKey, sortDirection]);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  return (
    <div className="rounded-xl overflow-hidden shadow bg-white">
      <table className="min-w-full table-auto text-left border-collapse">
        <thead className="table-bg">
          <tr>
            {allColumns.map((col) => (
              <th
                key={col.key}
                className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-700 border-b border-gray-200 text-left select-none cursor-pointer"
                onClick={() => handleSort(col.key)}
              >
                <span className="flex items-center gap-1">
                  {col.label}
                  {/* Sort icon */}
                  {sortKey === col.key ? (
                    sortDirection === 'asc' ? (
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
                    ) : (
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    )
                  ) : (
                    <svg className="w-3 h-3 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /></svg>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-4 text-gray-500">
                No data available.
              </td>
            </tr>
          ) : (
            sortedData?.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50 border-b border-gray-200 last:border-b-0">
                {allColumns.map((col) => {
                  const cellValue = row[col.key];
                  const cellClass = "px-4 py-3 text-sm text-gray-700";
                  if (col.key === 'action') {
                    return (
                      <td key={col.key} className={cellClass + " cursor-pointer"}>
                        <button
                          onClick={() => onEditRow && onEditRow(row)}
                          className="text-blue-600 hover:underline"
                        >
                          Edit
                        </button>
                      </td>
                    );
                  }
                  return (
                    <td key={col.key} className={cellClass}>
                      <span title={isNonNullString(cellValue) && cellValue.length > 20 ? cellValue : undefined}>
                        {cellValue != null ? String(cellValue) : ''}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
