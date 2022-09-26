import { printAnswer } from "./helper/print-answer";
import { solve } from "./solve/solve";

// 入力
const problem: {
  rows: number[][];
  columns: number[][];
  // } = {
  //   rows: [[2], [1], [1], [4]],
  //   columns: [[1], [1, 1], [4], [1]],
  // };
} = {
  rows: [
    [4, 6],
    [4, 3],
    [5, 2, 2, 2],
    [4, 2],
    [4, 3, 3, 1],
    //
    [4, 1],
    [3, 1],
    [3, 3, 1],
    [3, 2, 2],
    [3, 1, 2, 1],
    //
    [3, 3, 1],
    [1, 3, 2],
    [2, 3, 1, 1],
    [3, 1, 2, 2],
    [2, 1, 4],
  ],
  columns: [
    [1],
    [4, 1],
    [8, 2],
    [10, 1],
    [11, 1],
    //
    [3, 5, 1],
    [1, 1, 2],
    [1, 1, 2, 1],
    [1, 2, 2, 1, 1],
    [1, 1, 2, 1],
    //
    [1, 1, 1, 2, 3, 1],
    [1, 1, 1, 4, 2],
    [2, 1, 2, 2],
    [4, 2, 1],
    [5, 4],
  ],
};

// 出力

const answer = solve(problem); // => [[false, true, true,false], [false, false, true, false], [false, false, true, false], [true, true, true, true]]

printAnswer(answer);
