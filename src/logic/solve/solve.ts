import { Problem } from "../problem/problem";

export enum CellStatus {
  TRUE = "TRUE",
  FALSE = "FALSE",
  UNKNOWN = "UNKNOWN",
}

export type Solving = CellStatus[][];

export const solve = (problem: Problem): boolean[][] => {
  const { rows, columns } = problem;
  const rowCount = rows.length;
  const columnCount = columns.length;

  const answer: Solving = [];

  // while UNKNOWN がある間 & 一つ前の状態から変化がある間

  // 1. 端から端に動かして、重なるところを TRUE にする
  // 1-a. row を埋める method
  // 1-b. column を埋める method
  // 2. ※ UNKNOWN を TRUE に仮置して進めてみる

  // 終了条件
  // 1. UNKNOWN がなくなったら終了 (正解)
  // 2. 一つ前の状態と同じになったら終了 (解けない)
};
