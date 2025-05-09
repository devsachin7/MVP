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