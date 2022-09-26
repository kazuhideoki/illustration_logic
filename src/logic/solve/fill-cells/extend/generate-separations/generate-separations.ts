import { CellStatus, Separation } from "../../../../helper/type";

/**
 * False を区切りにして、セパレーションを生成する
 * @param cells
 * @returns
 */
export const generateSeparations = (cells: CellStatus[]): Separation[] => {
  const areas: Separation[] = [];
  let separationLength = 0;
  cells.forEach((cell, i) => {
    if (cell === CellStatus.TRUE || cell === CellStatus.UNKNOWN) {
      separationLength += 1;

      if (i === cells.length - 1) {
        areas.push({
          separationsLength: separationLength,
          startIndex: i - separationLength + 1,
          endIndex: i,
        });
      }
    } else {
      if (separationLength > 0) {
        areas.push({
          separationsLength: separationLength,
          startIndex: i - separationLength,
          endIndex: i - 1,
        });
        separationLength = 0;
      }
    }
  });

  return areas;
};
