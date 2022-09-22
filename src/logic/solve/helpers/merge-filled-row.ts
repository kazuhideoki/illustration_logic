import assert from "assert";
import { CellStatus } from "../solve";
import { IndexedCellStatus } from "./generate-filled-row";

/**
 * 双方向の filledRow をマージする
 */
export const mergeFilledRow = (
  currentRow: CellStatus[],
  fromStart: IndexedCellStatus[],
  fromEnd: IndexedCellStatus[]
): CellStatus[] => {
  assert(
    currentRow.length === fromStart.length &&
      currentRow.length === fromEnd.length
  );
  let mergedRow: CellStatus[] = [];

  for (let i = 0; i < fromStart.length; i++) {
    const current = currentRow[i];

    if (current === CellStatus.TRUE) {
      mergedRow.push(CellStatus.TRUE);
      continue;
    } else if (current === CellStatus.FALSE) {
      mergedRow.push(CellStatus.FALSE);
      continue;
    }

    const start = fromStart[i];
    const end = fromEnd[i];

    const isOverlapped =
      start.index !== null && end.index !== null && start.index === end.index;
    const bothTrue =
      start.cell === CellStatus.TRUE && end.cell === CellStatus.TRUE;
    const bothFalse =
      start.cell === CellStatus.FALSE && end.cell === CellStatus.FALSE;

    if (isOverlapped && bothTrue) {
      mergedRow.push(CellStatus.TRUE);
    } else if (bothFalse) {
      mergedRow.push(CellStatus.FALSE);
    } else {
      mergedRow.push(CellStatus.UNKNOWN);
    }
  }

  return mergedRow;
};
