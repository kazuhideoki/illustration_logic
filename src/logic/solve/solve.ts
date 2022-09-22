import { printAnswer } from "../helper/print-answer";
import { CellStatus } from "../helper/type";
import {
  convertFilledColumnIntoAnswer,
  extractColumn,
} from "./conversion/conversion";
import { fillCells } from "./fill/fill-cells";

export const solve = (problem: {
  rows: number[][];
  columns: number[][];
}): CellStatus[][] => {
  const { rows, columns } = problem;
  const rowCount = rows.length;
  const columnCount = columns.length;

  let answer: CellStatus[][] = generateEmptyAnswer(rowCount, columnCount);
  let isChanged: boolean = true;

  for (let i = 0; isChanged; i++) {
    const prevAnswer = answer;
    // row
    for (let j = 0; j < rowCount; j++) {
      const currentRowCells = answer[j];
      const nums = rows[j];
      const filledRow = fillCells(currentRowCells, nums);

      answer[j] = filledRow;
    }
    // column
    for (let j = 0; j < columnCount; j++) {
      const currentColumnCells = extractColumn(answer, j);
      const nums = columns[j];
      const filledColumn = fillCells(currentColumnCells, nums);

      answer = convertFilledColumnIntoAnswer(answer, filledColumn, j);
    }

    const _answer = [...answer];

    isChanged = !prevAnswer.every((rows, j) =>
      rows.every((cell, k) => cell === _answer[j][k])
    );
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
    printAnswer(answer);
    return answer;
  }
};

export const generateEmptyAnswer = (
  rowCount: number,
  columnCount: number
): CellStatus[][] => {
  return Array(rowCount)
    .fill(null)
    .map(() => Array(columnCount).fill(CellStatus.UNKNOWN));
};
