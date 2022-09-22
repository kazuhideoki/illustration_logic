import { CellStatus, IndexedCellStatus } from "../../../helper/type";
import { fillFromEdge } from "./fill-from-edge";
import { mergeFills } from "./merge-fills";
import { reverseIndex } from "./reverse-index";

export const fillFromEdges = (
  nums: number[],
  currentCells: CellStatus[]
): CellStatus[] => {
  const filledFromFirst: IndexedCellStatus[] = fillFromEdge(nums, currentCells);
  let filledFromLast: IndexedCellStatus[] = fillFromEdge(
    [...nums].reverse(),
    [...currentCells].reverse()
  ).reverse();
  filledFromLast = reverseIndex(filledFromLast);

  const merged: CellStatus[] = mergeFills(
    currentCells,
    filledFromFirst,
    filledFromLast,
    nums
  );

  return merged;
};
