import { CellStatus } from "../../../helper/type";
import { fillFixedSets } from "./fill-areas/fill-areas";
import { areaFromCells } from "./generate-areas/area-from-cells";
import { generatePatterns } from "./generate-areas/index";

export const extend = (
  nums: number[],
  currentCells: CellStatus[]
): CellStatus[] => {
  const areas = areaFromCells(currentCells);

  // false を区切りにして、num をあてはめる -> generateAreaPatterns
  const patterns = generatePatterns(nums, currentCells);

  return fillFixedSets(nums, areas, patterns, currentCells);

  // TODO すでに TRUE のところをマッピングする
  // 1. 一つのエリアの中で nums の組み合わせが確定して場合、それを使って埋める -> fillFromEdges

  // 2. 各nums と TRUEs の最大のものから比較し、確定したらそれを使って埋める -> fillFromEdges

  // TODO 3. TRUE がつながるべきところはどうやって判定するか？
};
