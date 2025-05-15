import React, { useState } from "react";
import Card from "../components/Card";
import { Select } from "../components/form-components/Select";
import { DatePicker } from "../components/form-components/DatePicker";
import { MultiSelect } from "../components/form-components/MultiSelect";
import { zoneOptions } from "../utils/safetyAuditUtils";

const Analytics: React.FC = () => {
  const [selectedZones, setSelectedZones] = useState<string[]>([]);
  
  return (
    <div className="py-6">
      <Card title="Analytics">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          <div className="col-span-1">
            <Select
              id="zone"
              label="Export Type"
              labelWidth="min-w-[120px]"
              options={[]}
            />
          </div>
          <div className="col-span-1" />
          <div className="col-span-1">
            <DatePicker label="Start Date" />
          </div>
          <div className="col-span-1">
            <DatePicker label="To Date" />
          </div>
          <div className="col-span-1">
            <MultiSelect
              label="Zones"
              labelWidth="min-w-[130px]"
              value={selectedZones}
              onChange={setSelectedZones}
              options={zoneOptions}
              placeholder="Select"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            className="px-8 py-2 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-colors shadow"
            type="submit"
          >
            Go
          </button>
        </div>
      </Card>
    </div>
  );
};
export default Analytics;
