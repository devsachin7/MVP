import { MultiSelectOption } from "../components/form-components/MultiSelect";

export const ZONES = [
  "Zone -1",
  "Zone -2",
  "Zone -3",
  "Zone -4",
  "Zone -5",
  "Zone -6",
];
export const DATE_FILTERS = ["30 Days", "60 Days", "90 Days", "1 Year"];
export const ENTRIES = [
  { value: "", label: "Select..." },
  { value: "10", label: "10" },
  { value: "25", label: "25" },
  { value: "50", label: "50" },
  { value: "100", label: "100" },
];

export const zoneOptions: MultiSelectOption[] = ZONES.map((zone) => ({
  value: zone,
  label: zone,
}));

export const calculateScore = (
  violationCount: number,
  severityLevelCount: number,
  emf: number,
) => {
  let pointsDeduction = Math.ceil(violationCount) * severityLevelCount;  
  const maxSectionScore = 10 * emf;
  pointsDeduction =
    pointsDeduction > maxSectionScore ? maxSectionScore : pointsDeduction;
  const score = maxSectionScore - pointsDeduction;
  const scorePctg = (score * 100) / maxSectionScore;
  let boxBgColor = '#0C9D3A';
  if (scorePctg >= 80 && scorePctg < 100) {
    boxBgColor = '#DD845A';
  } else if (scorePctg === 100) {
    boxBgColor = '#0C9D3A';
  } else {
    boxBgColor = '#E06C5F';
  }
  return {
    score,
    pointsDeduction,
    scorePctg,
    boxBgColor,
  };
};

export const getEMF = (workforce: number): number => {
  let emf = 1;

  if (workforce < 101) {
      emf = 1;
  } else if (workforce < 201) {
      emf = 1.25;
  } else if (workforce < 301) {
      emf = 1.5;
  } else if (workforce < 401) {
      emf = 1.75;
  } else if (workforce < 501) {
      emf = 2;
  } else {
      emf = 2.25;
  }

  return emf;
}