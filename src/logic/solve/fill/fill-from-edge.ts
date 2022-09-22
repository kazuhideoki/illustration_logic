import assert from "assert";
import { CellStatus, IndexedCellStatus } from "../../helper/type";

/**
 * 端から埋めていくときの結果を取得
 * @param nums
 * @param currentCells
 * @returns
 */
export const fillFromEdge = (
  nums: number[],
  currentCells: CellStatus[]
): IndexedCellStatus[] => {
  let remainingCells = [...currentCells];
  let filledCells: IndexedCellStatus[] = [];

  for (let i = 0; i < nums.length; ) {
    const num = nums[i]; // 2

    // true の処理
    if (hasTarget(num, remainingCells)) {
      // 重なるところを TRUE にする
      filledCells = [
        ...filledCells,
        ...Array(num).fill({ index: i, cell: CellStatus.TRUE }),
      ];
      remainingCells.splice(0, num);

      // nums の 間の処理
      if (i !== nums.length - 1) {
        filledCells.push({ index: null, cell: CellStatus.FALSE });
        remainingCells.shift();
      }
      i++;
    } else {
      // 一度目は UNKNOWN か FALSE を削除
      filledCells.push({ index: null, cell: CellStatus.FALSE });
      remainingCells.shift();
      // 二度目以降は FALSE を削除
      while (remainingCells[0] === CellStatus.FALSE) {
        filledCells.push({ index: null, cell: CellStatus.FALSE });
        remainingCells.shift();
      }
    }
  }

  // 最後に穴埋めする
  // for (let i = filledRow.length; i < currentRow.length; i++) {
  //   filledRow.push(CellStatus.UNKNOWN);
  // }

  if (filledCells.length !== currentCells.length) {
    while (filledCells.length < currentCells.length) {
      filledCells.push({ index: null, cell: CellStatus.UNKNOWN });
    }
  }

  assert(filledCells.length === currentCells.length);

  return filledCells;
};

/**
 * 指定した num で最初の部分を抜き出す
 */
export const hasTarget = (num: number, remainingRow: CellStatus[]) => {
  // TODO リファクタ
  const firstOfNum = Array(num) // 2
    .fill("")
    .map((e, j) => remainingRow[j])
    .filter((e) => e === CellStatus.UNKNOWN || e === CellStatus.TRUE);

  const hasTarget =
    (firstOfNum.length === num && remainingRow[num] !== CellStatus.TRUE) ||
    firstOfNum.length === remainingRow.length;
  // cells.length === num;

  return hasTarget;
};
