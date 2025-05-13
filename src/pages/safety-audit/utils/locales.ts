export const auditInstructions = [
    "Commit a maximum of one hour to perform a Safety Audit. Smaller projects may take less time.",
    "All project leadership must participate, including Superintendents, Project Managers, Assistant Superintendents, Project Engineers, Quality, and Safety personnel.",
    "Use any method (iPad, iPhone, or pen and paper) to record observations and severity.",
    "If using pen and paper, complete the Safety Audit Form after the walkthrough.",
    "Each of the 15 categories in the form includes dropdowns for specific violations and responsible parties.",
    "Assign a severity level to each violation.",
    "If the observed violation isn't listed, select \"Other\" and describe it in the Notes area.",
    "Use the form to note if work was stopped due to IDLH (Immediately Dangerous to Life or Health) conditions.",
    "The audit checks for both compliance (e.g., rigging inspection) and unsafe conditions/acts.",
    {
      text: "Examples:",
      subItems: [
        "Unsafe condition: tripping hazard like a board in a walkway.",
        "Unsafe act: someone walking over that board."
      ]
    },
    "Special attention is given to risk areas like lower back strain, line of fire, and pinch points."
  ];

  export const severityLevels = [
    {
      level: 0,
      title: "No Violation",
      description: "Satisfactory level of compliance met for the category."
    },
    {
      level: 1,
      title: "Minimal",
      description: "Minimal opportunity for injury, but demonstrates lack of support for the requirement."
    },
    {
      level: 2,
      title: "Minor",
      description: "The violation has the potential to result in medical first aid or damage to equipment, but be minimum."
    },
    {
      level: 3,
      title: "Medium",
      description: "The violation has the potential to result in a medical first aid or recordable injury or damage greater than $1,000 may occur."
    },
    {
      level: 4,
      title: "Serious",
      description: "The violation has the potential to result in a recordable injury and/or a recordable injury with restricted duty or damage greater than $10,000."
    },
    {
      level: 5,
      title: "IDLH (Immediately Dangerous to Life and Health)",
      description: "The violation has the potential to result in a lost work day case or fatality or damage greater than $100,000 may occur."
    }
  ];