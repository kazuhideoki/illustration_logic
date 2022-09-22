import { sumBy } from "lodash";

export const filterPatterns = (areas: number[], patterns: number[][][]) => {
  const filtered = patterns.filter((pattern, i) => {
    return pattern.every((area, j) => {
      const filledAmount = sumBy(area) + area.length - 1;

      return filledAmount <= areas[j];
    });
  });

  return filtered;
};
