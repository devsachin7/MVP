import React from "react";
import { severityLevels } from "../utils/locales";

const SeverityLevels: React.FC = () => (
  <>
    <div className="text-sm mb-2">
      When you select the Severity Level for each category, please refer to the
      following:
    </div>
    <ul className="text-sm list-disc list-inside mb-2">
      {severityLevels.map((item) => (
        <li key={item.level}>
          {item.level} - {item.title} - {item.description}
        </li>
      ))}
    </ul>

    <div className="text-xs text-gray-700">
      If you see an IDLH condition on the jobsite, you need to immediately stop
      the work activity and contact site leadership. You need to remain at the
      location until proper response has been carried out. IDLH condition is not
      listed in the 'Highest Severity Level' dropdown, but listed as a separate
      item at the bottom of the form.
    </div>
  </>
);

export default SeverityLevels;
