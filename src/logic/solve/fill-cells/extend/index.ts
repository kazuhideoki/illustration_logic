import { CellStatus } from "../../../helper/type";
import { fillFixedSeparations } from "./fill-fixed-separations/fill-fixed-separations";
import { generateSeparations } from "./generate-separations/generate-separations";
import { generatePatterns } from "./generate-separations/index";

export const extend = (
  nums: number[],
  currentCells: CellStatus[]
): CellStatus[] => {
  const separations = generateSeparations(currentCells);

  const patterns = generatePatterns(nums, separations);

  return fillFixedSeparations(nums, separations, patterns, currentCells);

  // TODO すでに TRUE のところをマッピングする
  // 1. 一つのエリアの中で nums の組み合わせが確定して場合、それを使って埋める -> fillFromEdges

  // 2. 各nums と TRUEs の最大のものから比較し、確定したらそれを使って埋める -> fillFromEdges

  // TODO 3. TRUE がつながるべきところはどうやって判定するか？
};
