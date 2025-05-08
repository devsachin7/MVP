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
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
    <div className="sm:flex items-center gap-x-3">
      <label className="block min-w-[180px] font-semibold">Project:</label>
      <span className="flex-1 min-w-0">{project}</span>
    </div>
    <div className="sm:flex items-center gap-x-3">
      <label className="block min-w-[180px] font-semibold">Zone:</label>
      <span className="flex-1 min-w-0">{zone}</span>
    </div>
    <div className="sm:flex items-center gap-x-3">
      <label className="block min-w-[180px] font-semibold">Project Executive:</label>
      <span className="flex-1 min-w-0">{projectExecutive}</span>
    </div>
    <div className="sm:flex items-center gap-x-3">
      <label className="block min-w-[180px] font-semibold">Operations Executive:</label>
      <span className="flex-1 min-w-0">{operationsExecutive}</span>
    </div>
    <div className="sm:flex items-center gap-x-3">
      <label className="block min-w-[180px] font-semibold">Safety Director:</label>
      <span className="flex-1 min-w-0">{safetyDirector}</span>
    </div>
    <div className="sm:flex items-center gap-x-3">
      <label className="block min-w-[180px] font-semibold">General Superintendent:</label>
      <span className="flex-1 min-w-0">{generalSuperintendent}</span>
    </div>
    <div className="sm:flex items-center gap-x-3">
      <label className="block min-w-[180px] font-semibold">Project Director:</label>
      <span className="flex-1 min-w-0">{projectDirector}</span>
    </div>
    <div className="sm:flex items-center gap-x-3">
      <label className="block min-w-[180px] font-semibold">Project Manager:</label>
      <span className="flex-1 min-w-0">{projectManager}</span>
    </div>
    <div className="sm:flex items-center gap-x-3">
      <label className="block min-w-[180px] font-semibold">Superintendent:</label>
      <span className="flex-1 min-w-0">{superintendent}</span>
    </div>
    <div className="sm:flex items-center gap-x-3">
      <label className="block min-w-[180px] font-semibold">Project Safety Manager:</label>
      <span className="flex-1 min-w-0">{projectSafetyManager}</span>
    </div>
  </div>
);

export default ProjectInformation; 