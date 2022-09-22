import assert from "assert";
import { CellStatus } from "../solve";
export const extractColumn = (
  answer: CellStatus[][],
  columnIndex: number
): CellStatus[] => {
  assert(answer[0].length > columnIndex);
  return answer.map((row) => row[columnIndex]);
};

export const convertFilledRowIntoAnswer = (
  answer: CellStatus[][],
  filledColumn: CellStatus[],
  columnIndex: number
): CellStatus[][] => {
  assert(answer.length === filledColumn.length);
  return answer.map((row, i) => {
    return row.map((cell, j) => {
      if (j === columnIndex) {
        return filledColumn[i];
      }
      return cell;
    });
  });
};
