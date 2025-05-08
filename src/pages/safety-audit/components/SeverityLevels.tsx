import React from 'react';

const SeverityLevels: React.FC = () => (
  <>
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
  </>
);

export default SeverityLevels; 