import assert from "assert";
import { CellStatus } from "../solve";
import {
  generatePossibleFilledRow,
  IndexedPossibleCell,
} from "./generate-filled-row";

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

  const numsRow: boolean[] = numsRowFrom(nums);
  const filledNumsFromStart: (boolean | null)[] = filledNumsRowForm(
    numsRow,
    cellCount
  );
  //TODO index も逆にする
  const filledNumsFromEnd: (boolean | null)[] = filledNumsRowForm(
    numsRow.reverse(),
    cellCount
  );

  const filledRowFromStart: IndexedPossibleCell[] = generatePossibleFilledRow(
    nums,
    currentRow
  );
  const filledRowFromEnd: IndexedPossibleCell[] = generatePossibleFilledRow(
    nums.reverse(),
    currentRow.reverse()
  ).reverse();

  const updatedRow: CellStatus[] = [];
  // currentRow で UNKNOWN の場所において、 filledRowFromStart と filledRowFromEnd を比較して、結果に反映する
  // TRUE が重なるところは 新たに TRUE にする
  // FALSE は FALSE にする
  // その他は UNKNOWN にする
};

export const numsRowFrom = (nums: number[]): boolean[] => {
  return nums
    .map((num, i) => [i !== 0 ? false : undefined, ...Array(num).fill(true)])
    .flat()
    .filter((e) => e !== undefined);
};

export const filledNumsRowForm = (
  numsArray: boolean[],
  cellCount: number
): (boolean | null)[] => {
  return Array(cellCount)
    .fill(null)
    .map((e, i) => {
      if (i < numsArray.length) {
        return numsArray[i];
      }

      return e;
    });
};
