import { sumBy } from "lodash";
import { SeparatedArea, SeparatedPattern } from "../../../../helper/type";

export const filterPatterns = (
  areas: SeparatedArea[],
  patterns: SeparatedPattern[]
) => {
  const filtered = patterns.filter((pattern, i) => {
    return pattern.every((e, j) => {
      const filledAmount = sumBy(e.area) + e.area.length - 1;

      return filledAmount <= areas[j].areaLength;
    });
  });

  return filtered;
};
