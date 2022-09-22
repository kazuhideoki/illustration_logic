import assert from "assert";
import { CellStatus } from "../solve";
import { debugLog } from "./fill-cells";

export type IndexedCellStatus = {
  index: number | null;
  cell: CellStatus;
};

/**
 * 端から埋めていくときの結果を取得
 * @param nums
 * @param currentRow
 * @returns
 */
export const generatePossibleFilledRow = (
  nums: number[],
  currentRow: CellStatus[]
): IndexedCellStatus[] => {
  const debug = debugLog([...nums].reverse());
  debug("generatePossibleFilledRow start");
  let remainingRow = [...currentRow];
  let filledRow: IndexedCellStatus[] = [];

  debug("", { remainingRow, filledRow, nums });
  for (let i = 0; i < nums.length; ) {
    // debug("loop", i); // 2 で無限ループ
    const num = nums[i]; // 2

    const { hasTarget } = pickTarget(num, remainingRow);

    // true の処理
    if (hasTarget) {
      // 重なるところを TRUE にする
      filledRow = [
        ...filledRow,
        ...Array(num).fill({ index: i, cell: CellStatus.TRUE }),
      ];
      // for (let j = 0; j < num; j++) {
      //   remainingRow.shift();
      // }
      remainingRow.splice(0, num);

      // nums の 間の処理
      // 一つ前が TRUE であれば、間は FALSE にする
      // 一つ前が FALSE か UNKNOWN であれば、何もしない
      if (i !== nums.length - 1) {
        if (remainingRow[0] === CellStatus.TRUE) {
          filledRow.push({ index: i, cell: CellStatus.TRUE });
          filledRow.push({ index: null, cell: CellStatus.FALSE });
          remainingRow.shift();
          remainingRow.shift();
        } else {
          filledRow.push({ index: null, cell: CellStatus.FALSE });
          remainingRow.shift();
        }
      }
      i++;
    } else {
      while (remainingRow[0] === CellStatus.FALSE) {
        filledRow.push({ index: null, cell: CellStatus.FALSE });
        remainingRow.shift();
      }
    }
  }

  debug("generatePossibleFilledRow for loop end");

  // 最後に穴埋めする
  // for (let i = filledRow.length; i < currentRow.length; i++) {
  //   filledRow.push(CellStatus.UNKNOWN);
  // }

  if (filledRow.length !== currentRow.length) {
    while (filledRow.length < currentRow.length) {
      filledRow.push({ index: null, cell: CellStatus.UNKNOWN });
    }
  }

  assert(filledRow.length === currentRow.length);

  debug("generatePossibleFilledRow end");

  return filledRow;
};

/**
 * 指定した element で最初の部分を抜き出す
 * @deprecated
 */
export const pickFirstElements = <T>(arr: any[], element: T): T[] => {
  const index = arr.indexOf(element); // 2

  let _arr = [...arr];

  let res: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < index) {
      _arr = _arr.filter((_, j) => j !== 0);
      continue;
    }

    if (_arr[0] === element) {
      res = [...res, element];
      _arr = _arr.filter((_, j) => j !== 0);
    }
  }

  return res;
};

/**
 * 指定した num で最初の部分を抜き出す
 */
export const pickTarget = (num: number, remainingRow: CellStatus[]) => {
  const cells = Array(num) // 2
    .fill("")
    .map((e, j) => remainingRow[j])
    .filter((e) => e === CellStatus.UNKNOWN || e === CellStatus.TRUE);
  const hasTarget =
    // cells.length === num && [...remainingRow].slice(num)[0] !== CellStatus.TRUE;
    cells.length === num;

  const targetCells = hasTarget ? cells : undefined;

  return {
    hasTarget,
    targetCells,
  };
};