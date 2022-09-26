import { Separation } from "../../../../helper/type";
import { filterPatterns } from "./filter-pattterns";
import { generateSeparationPatterns } from "./generate-separation-patterns";

/**
 * FALSE を区切りにして、num をあてはめることができるパターンを生成する
 */
export const generatePatterns = (nums: number[], separations: Separation[]) => {
  const patterns = generateSeparationPatterns(nums, separations);

  const filtered = filterPatterns(separations, patterns);

  return filtered;
};
