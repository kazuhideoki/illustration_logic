import assert from "assert";
import { CellStatus } from "../../helper/type";
import { extend } from "./extend";
import { fillFromEdges } from "./fill-from-edges.ts/index";

export const fillCells = (
  currentCells: CellStatus[],
  nums: number[]
): CellStatus[] => {
  const cellCount = currentCells.length;
  assert(
    cellCount >= nums.reduce((acc, num) => acc + num, 0) + nums.length - 1
  );

  let filled: CellStatus[] = fillFromEdges(nums, currentCells);
  console.log("filled", filled);

  // TODO まだ変わってない。。。中でロジックを改善する必要がある
  filled = extend(nums, filled);
  console.log("filled2", filled);

  return filled;
};
