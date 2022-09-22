import assert from "assert";
import { isEqual } from "lodash";
import { CellStatus } from "../solve";
import {
  generatePossibleFilledRow,
  IndexedCellStatus,
} from "./generate-filled-row";
import { mergeFilledRow } from "./merge-filled-row";
import { reverseIndex } from "./reverse-index";

// 埋める method
// 1. 必要なデータを取得
// 1-a. 1行のセルの数
// rowCount | columnCount
// 1-b. すでに埋まっているところ
// SolvingRow
// 1-c. 埋めるべきところ
// PRow | PColumn

// 2. 埋める
// 2-a. スタートから順に埋める
// 2-b. エンドから順に埋める
// 2-c. ProcessingCell に変換する
// 重なるところを TRUE にする
// 重ならないところを UNKNOWN にする
// 狭くてスキップしたところを FALSE にする

// 3. ※ Column の場合は 列を SolvingRow にマッピングする

export const debugLog = (nums: number[]) => {
  if (isEqual(nums, [1, 2, 2, 1, 1])) {
    return (message: any, detail?: any) => {
      console.log(message, detail);
    };
  }

  return (message: any, detail?: any) => {};
};

export const fillCells = (
  currentRow: CellStatus[],
  nums: number[]
): CellStatus[] => {
  const debug = debugLog(nums);
  const cellCount = currentRow.length;
  assert(
    cellCount >= nums.reduce((acc, num) => acc + num, 0) + nums.length - 1
  );
  debug({ currentRow, nums });

  const filledRowFromStart: IndexedCellStatus[] = generatePossibleFilledRow(
    nums,
    currentRow
  );
  debug({ filledRowFromStart });
  let filledRowFromEnd: IndexedCellStatus[] = generatePossibleFilledRow(
    [...nums].reverse(),
    [...currentRow].reverse()
  ).reverse();
  debug({ filledRowFromEnd });
  filledRowFromEnd = reverseIndex(filledRowFromEnd);
  debug({ filledRowFromEnd });

  const mergedRow: CellStatus[] = mergeFilledRow(
    currentRow,
    filledRowFromStart,
    filledRowFromEnd,
    nums
  );
  debug({ mergedRow });

  return mergedRow;
};
