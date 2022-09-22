import assert from "assert";
import { CellStatus } from "../../helper/type";
import { fillFromEdges } from "./fill-from-edges.ts/index";

export const fillCells = (
  currentCells: CellStatus[],
  nums: number[]
): CellStatus[] => {
  const cellCount = currentCells.length;
  assert(
    cellCount >= nums.reduce((acc, num) => acc + num, 0) + nums.length - 1
  );

  const filled: CellStatus[] = fillFromEdges(nums, currentCells);

  return filled;
};
