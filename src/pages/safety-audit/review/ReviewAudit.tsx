import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/Card";
import { Input } from "../../../components/form-components/Input";
import { Select } from "../../../components/form-components/Select";
import {
  MultiSelect
} from "../../../components/form-components/MultiSelect";
import { DATE_FILTERS, ENTRIES, zoneOptions } from "../../../utils/safetyAuditUtils";

const ReviewAudit: React.FC = () => {
  const navigate = useNavigate();
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  const [dateFilter, setDateFilter] = useState("");
  const [search, setSearch] = useState("");
  const [showEntries, setShowEntries] = useState(10);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/safety-audit/review-audit-details");
  };

  const renderReviewTable = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm border-t">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-4 py-2 font-semibold text-left">Zone</th>
            <th className="px-4 py-2 font-semibold text-left">Auditor</th>
            <th className="px-4 py-2 font-semibold text-left">Co-Auditor1</th>
            <th className="px-4 py-2 font-semibold text-left">Co-Auditor2</th>
            <th className="px-4 py-2 font-semibold text-left">Activity Date</th>
            <th className="px-4 py-2 font-semibold text-left">Audit Date</th>
          </tr>
        </thead>
        <tbody>
          {/* No data row */}
          <tr>
            <td colSpan={6} className="text-center text-gray-400 py-8">
              No data available
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="py-6 space-y-6">
      <Card title="Review">
        <form className="p-2" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <Input
                id="project"
                label="Project"
                labelWidth="min-w-[120px]"
                value="123"
                disabled
              />
              <MultiSelect
                label="Zones"
                labelWidth="min-w-[130px]"
                value={selectedZones}
                onChange={setSelectedZones}
                options={zoneOptions}
                placeholder="Select"
              />
            </div>
            <div className="space-y-4 flex flex-col items-end">
              <div className="sm:flex sm:items-center relative w-full justify-end">
                <Select
                  label="Date filter"
                  labelWidth="min-w-[120px]"
                  className="flex-1 w-full max-w-sm"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  options={DATE_FILTERS.map((filter) => ({
                    value: filter,
                    label: filter,
                  }))}
                  placeholder="Select"
                />
              </div>
              <div className="flex justify-end w-full">
                <button
                  type="submit"
                  className="bg-black text-white px-8 py-2 rounded shadow hover:bg-gray-800 transition"
                >
                  Go
                </button>
              </div>
            </div>
          </div>
        </form>
      </Card>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4">
        <div className="flex items-center gap-2 w-full md:w-auto">
          <span className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="border border-gray-300 rounded pl-8 pr-3 py-2 w-64 placeholder:text-gray-400 text-sm"
            />
            <span className="absolute left-2 top-2.5 text-gray-400">
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.6 10.6Z"
                />
              </svg>
            </span>
          </span>
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          <Select
            label="Show"
            labelWidth="text-sm mr-2"
            value={showEntries}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setShowEntries(Number(e.target.value))
            }
            options={ENTRIES}
            className={!showEntries ? "text-gray-400" : "text-gray-900"}
          />

          <span className="ml-2">Entries</span>
        </div>
      </div>
      {renderReviewTable()}
    </div>
  );
};

export default ReviewAudit;
