import { Problem } from "problem/problem";
import { solve } from "solve/solve";

// 入力
const problem: Problem = {
  rows: [[2], [1], [1], [4]],
  columns: [[1], [1, 1], [4], [1]],
};

// 出力

const answer = solve(problem); // => [[false, true, true,false], [false, false, true, false], [false, false, true, false], [true, true, true, true]]

console.log({ answer });
