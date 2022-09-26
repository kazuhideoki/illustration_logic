import { CellStatus } from "../../../../helper/type";
import { areaFromCells } from "./area-from-cells";
import { filterPatterns } from "./filter-pattterns";
import { generateSeparationPatterns } from "./generate-areas";
export const generatePatterns = (
  nums: number[],
  currentCells: CellStatus[]
) => {
  const areas = areaFromCells(currentCells); // TODO 外に出す、各関数でつかいまわす

  // 全パターンを生成する
  const patterns = generateSeparationPatterns(nums, areas);

  // 実際に各エリアに入るものだけ残す
  const filtered = filterPatterns(areas, patterns);

  return filtered;
};
