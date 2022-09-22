import assert from "assert";
import { CellStatus } from "../../helper/type";
export const extractColumn = (
  answer: CellStatus[][],
  columnIndex: number
): CellStatus[] => {
  assert(answer[0].length > columnIndex);
  return answer.map((row) => row[columnIndex]);
};

export const convertFilledColumnIntoAnswer = (
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
