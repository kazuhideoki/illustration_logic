import assert from "assert";
import { CellStatus, IndexedCellStatus } from "../../helper/type";
import { fillFromEdge } from "./fill-from-edge";
import { mergeFills } from "./merge-fills";
import { reverseIndex } from "./reverse-index";

export const fillCells = (
  currentCells: CellStatus[],
  nums: number[]
): CellStatus[] => {
  const cellCount = currentCells.length;
  assert(
    cellCount >= nums.reduce((acc, num) => acc + num, 0) + nums.length - 1
  );

  const filledFromFirst: IndexedCellStatus[] = fillFromEdge(nums, currentCells);
  let filledFromLast: IndexedCellStatus[] = fillFromEdge(
    [...nums].reverse(),
    [...currentCells].reverse()
  ).reverse();
  filledFromLast = reverseIndex(filledFromLast);

  const mergedRow: CellStatus[] = mergeFills(
    currentCells,
    filledFromFirst,
    filledFromLast,
    nums
  );

  return mergedRow;
};
