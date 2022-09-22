import assert from "assert";
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

export const fillRow = (
  currentRow: CellStatus[],
  nums: number[]
): CellStatus[] => {
  const cellCount = currentRow.length;
  assert(
    cellCount >= nums.reduce((acc, num) => acc + num, 0) + nums.length - 1
  );

  const filledRowFromStart: IndexedCellStatus[] = generatePossibleFilledRow(
    nums,
    currentRow
  );
  const filledRowFromEnd: IndexedCellStatus[] = reverseIndex(
    generatePossibleFilledRow(
      [...nums].reverse(),
      [...currentRow].reverse()
    ).reverse()
  );

  const mergedRow: CellStatus[] = mergeFilledRow(
    currentRow,
    filledRowFromStart,
    filledRowFromEnd
  );

  return mergedRow;
};
