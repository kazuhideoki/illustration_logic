import { sumBy } from "lodash";
import { NumSeparationPatterns, Separation } from "../../../../helper/type";

/**
 * 全パターンから、実際に各エリアに入るものだけ残す
 * @param separations
 * @param patterns
 * @returns
 */
export const filterPatterns = (
  separations: Separation[],
  patterns: NumSeparationPatterns[]
) => {
  const filtered = patterns.filter((pattern, i) => {
    return pattern.every((e, j) => {
      const filledAmount =
        sumBy(e.numsInSeparation) + e.numsInSeparation.length - 1;

      return filledAmount <= separations[j].separationsLength;
    });
  });

  return filtered;
};
