import {
  convertFilledRowIntoAnswer,
  extractColumn,
} from "./conversion/conversion";
import { fillCells } from "./fill-row/fill-cells";

export enum CellStatus {
  TRUE = "TRUE",
  FALSE = "FALSE",
  UNKNOWN = "UNKNOWN",
}

export type Solving = CellStatus[][];
export const solve = (problem: {
  rows: number[][];
  columns: number[][];
}): CellStatus[][] => {
  const { rows, columns } = problem;
  const rowCount = rows.length;
  const columnCount = columns.length;

  let answer: Solving = generateEmptyAnswer(rowCount, columnCount);
  let isChanged: boolean = true;

  console.log("start");
  console.log({ rows, columns, answer });

  for (let i = 0; isChanged === true; i++) {
    console.log("loop", i);

    const prevAnswer = answer;
    // row
    for (let j = 0; j < rowCount; j++) {
      const currentRow = answer[j];
      const nums = rows[j];
      const rowAnswer = fillCells(currentRow, nums);

      answer[j] = rowAnswer;
    }
    // column
    for (let j = 0; j < columnCount; j++) {
      console.log("column", j);
      const currentColumn = extractColumn(answer, j);
      console.log({ currentColumn });

      const nums = columns[j];
      console.log({ nums });

      const columnAnswer = fillCells(currentColumn, nums);
      console.log({ columnAnswer });

      answer = convertFilledRowIntoAnswer(answer, columnAnswer, j);
    }

    const _answer = [...answer];
    // TODO 1周して変わったかどうか
    isChanged = !prevAnswer.every((rows, j) =>
      rows.every((cell, k) => cell === _answer[j][k])
    );

    console.log({ i, isChanged });
  }

  const isSolved = answer.every((row) =>
    row.every((cell) => cell !== CellStatus.UNKNOWN)
  );

  if (isSolved) {
    console.log("solved!");
    printAnswer(answer);
    return answer;
  } else {
    console.error("unable to solve...");
    console.error(answer);
    return answer;
  }

  // 終了条件
  // 1. UNKNOWN がなくなったら終了 (正解)
  // 2. 一つ前の状態と同じになったら終了 (解けない)
};

export const generateEmptyAnswer = (
  rowCount: number,
  columnCount: number
): Solving => {
  return Array(rowCount)
    .fill(null)
    .map(() => Array(columnCount).fill(CellStatus.UNKNOWN));
};

export const printAnswer = (answer: Solving) => {
  const converted = answer.map((row) =>
    row.map((cell) => {
      switch (cell) {
        case CellStatus.TRUE:
          return "◯";
        case CellStatus.FALSE:
          return " ";
        case CellStatus.UNKNOWN:
          return " ";
      }
    })
  );

  const stringified = `| ${converted
    .map((row) => row.join(""))
    .join(" |\n| ")} |`;

  console.log(stringified);
};
