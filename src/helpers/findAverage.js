export default function findAverage(grades) {
  let newGrades = grades.map((g) => parseInt(g, 10));
  let sum = newGrades.reduce((a, b) => {
    return a + b;
  }, 0);
  let average = (sum / newGrades.length).toFixed(2);
  return `${average}%`;
}
