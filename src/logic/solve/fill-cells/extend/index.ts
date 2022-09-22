import { CellStatus } from "../../../helper/type";
import { generatePatterns } from "./generate-separations/generate-areas/index";

export const extend = (
  nums: number[],
  currentCells: CellStatus[]
): CellStatus[] => {
  // false を区切りにして、num をあてはめる -> generateAreaPatterns
  const patterns = generatePatterns(nums, currentCells);

  // TODO すでに TRUE のところをマッピングする

  // TODO その中で埋める -> fillFromEdges が使えるか？
};
