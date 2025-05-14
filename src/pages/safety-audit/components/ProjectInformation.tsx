import React from 'react';

export interface ProjectInformationProps {
  project: string;
  zone: string;
  projectExecutive: string;
  operationsExecutive: string;
  safetyDirector: string;
  generalSuperintendent: string;
  projectDirector: string;
  projectManager: string;
  superintendent: string;
  projectSafetyManager: string;
}

const ProjectInformation: React.FC<ProjectInformationProps> = ({
  project,
  zone,
  projectExecutive,
  operationsExecutive,
  safetyDirector,
  generalSuperintendent,
  projectDirector,
  projectManager,
  superintendent,
  projectSafetyManager,
}) => {
  const InfoItem = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col sm:flex-row items-start sm:items-center">
      <label className="font-semibold w-full sm:w-52 flex-shrink-0">{label}:</label>
      <span className="flex-1 min-w-0 break-words overflow-hidden text-ellipsis">{value}</span>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
      <InfoItem label="Project" value={project} />
      <InfoItem label="Zone" value={zone} />
      <InfoItem label="Project Executive" value={projectExecutive} />
      <InfoItem label="Operations Executive" value={operationsExecutive} />
      <InfoItem label="Safety Director" value={safetyDirector} />
      <InfoItem label="General Superintendent" value={generalSuperintendent} />
      <InfoItem label="Project Director" value={projectDirector} />
      <InfoItem label="Project Manager" value={projectManager} />
      <InfoItem label="Superintendent" value={superintendent} />
      <InfoItem label="Project Safety Manager" value={projectSafetyManager} />
    </div>
  );
};

export default ProjectInformation;