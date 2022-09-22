import { uniq } from "lodash";
import { IndexedCellStatus } from "./generate-filled-row";

/**
 * filledRow の index を数字の部分のみ逆にする
 * @param filledRow
 * @returns
 */
export const reverseIndex = (
  filledRow: IndexedCellStatus[]
): IndexedCellStatus[] => {
  console.log("reverseIndex, start");

  const indexes = uniq(
    filledRow.map((cell) => cell.index).filter((e) => e !== null)
  );
  const reversedIndexes = indexes.reverse();

  console.log({ indexes, reversedIndexes });

  const reverseIndexedRow: IndexedCellStatus[] = [];
  for (let i = 0; i < filledRow.length; i++) {
    const prevCell = i > 0 ? filledRow[i - 1] : undefined;
    const cell = filledRow[i];

    if (cell.index !== null) {
      reverseIndexedRow.push({ ...cell, index: reversedIndexes[0] });
    } else {
      reverseIndexedRow.push(cell);
    }

    if (typeof prevCell?.index === "number" && cell.index === null) {
      reversedIndexes.shift();
    }
  }

  console.log("reverseIndex, end");

  return reverseIndexedRow;
};