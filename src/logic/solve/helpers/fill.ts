import assert from "assert";
import { SolvingRow } from "../solve";

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

type SolvingCell = {
  index: number;
  cell: boolean;
};

export const fill = (currentRow: SolvingRow, nums: number[]): SolvingRow => {
  const cellCount = currentRow.length;
  assert(
    cellCount >= nums.reduce((acc, num) => acc + num, 0) + nums.length - 1
  );

  const numsRow: boolean[] = numsRowFrom(nums);
  const filledNumsFromStart: (boolean | null)[] = filledNumsRowForm(
    numsRow,
    cellCount
  );
  const filledNumsFromEnd: (boolean | null)[] = filledNumsRowForm(
    numsRow.reverse(),
    cellCount
  );

  const filledRowFromStart: SolvingCell[] = [];
  const filledRowFromEnd: SolvingCell[] = [];

  // for (let i = 0; i < cellCount; i++) {
  //   const cellInRow = row[i];

  //   const solvingCell: SolvingCell = {
  //     index: i,
  //     cell,
  //   };
  // }
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

export const generateFilledRow = (
  currentRow: SolvingRow,
  filledNums: boolean[]
): SolvingCell[] => {};
