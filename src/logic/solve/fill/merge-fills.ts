import assert from "assert";
import { CellStatus, IndexedCellStatus } from "../../helper/type";

/**
 * 双方向の filledRow をマージする
 */
export const mergeFills = (
  currentCells: CellStatus[],
  fromFirst: IndexedCellStatus[],
  fromLast: IndexedCellStatus[],
  nums: number[]
): CellStatus[] => {
  assert(
    currentCells.length === fromFirst.length &&
      currentCells.length === fromLast.length
  );
  let mergedRow: CellStatus[] = [];

  for (let i = 0; i < fromFirst.length; i++) {
    const current = currentCells[i];

    if (current === CellStatus.TRUE) {
      mergedRow.push(CellStatus.TRUE);
      continue;
    } else if (current === CellStatus.FALSE) {
      mergedRow.push(CellStatus.FALSE);
      continue;
    }

    const start = fromFirst[i];
    const end = fromLast[i];

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

  // currentRow と 変化がない & すべて埋まっている場合は UNKNOWN を FALSE に変換する
  if (
    mergedRow.every((cell, i) => cell === currentCells[i]) &&
    nums.reduce((acc, num) => acc + num, 0) ===
      mergedRow.filter((e) => e === CellStatus.TRUE).length
  ) {
    mergedRow = mergedRow.map((cell) =>
      cell === CellStatus.UNKNOWN ? CellStatus.FALSE : cell
    );
  }

  return mergedRow;
};
