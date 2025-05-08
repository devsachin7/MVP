import React, { useState } from 'react';
import Card from '../../../components/Card';
import ProjectInformation from '../components/ProjectInformation';
import AuditSummary from '../components/AuditSummary';
import SeverityLevels from '../components/SeverityLevels';
import AuditCategories from '../components/AuditCategories';

const ReviewAuditDetails: React.FC = () => {
  const [violations, setViolations] = useState([
    {
      category: '',
      violationType: '',
      responsibleParty: '',
      violations: 0,
      severity: '0',
      deductions: 0,
      sectionScore: '150/150',
      comments: '',
    },
  ]);

  const handleAddViolation = () => {
    setViolations([
      ...violations,
      {
        category: '',
        violationType: '',
        responsibleParty: '',
        violations: 0,
        severity: '0',
        deductions: 0,
        sectionScore: '150/150',
        comments: '',
      },
    ]);
  };

  const handleDeleteViolation = (idx: number) => {
    if (violations.length === 1) return;
    setViolations(violations.filter((_, i) => i !== idx));
  };

  return (
    <div className="py-6 space-y-6">
      <Card title="Project Information">
        <ProjectInformation
          project="123"
          zone="Z1+"
          projectExecutive="Juan Garcia"
          operationsExecutive="Andrew Thompson"
          safetyDirector="Mark Cantu"
          generalSuperintendent="Kurt Jung"
          projectDirector="Rahul Deshmukh"
          projectManager="Rahul Deshmukh"
          superintendent="Kurt Jung"
          projectSafetyManager="Kurt Jung"
        />
      </Card>
      <Card title="Audit Summary">
        <AuditSummary />
      </Card>
      <Card title="Severity Levels">
        <SeverityLevels />
      </Card>
      <Card title="Audit Categories">
        <AuditCategories
          violations={violations}
          setViolations={setViolations}
          handleAddViolation={handleAddViolation}
          handleDeleteViolation={handleDeleteViolation}
        />
      </Card>
    </div>
  );
};

export default ReviewAuditDetails; 