import { CellStatus, SeparatedArea } from "../../../../helper/type";

export const areaFromCells = (cells: CellStatus[]): SeparatedArea[] => {
  const areas: SeparatedArea[] = [];
  let areaLength = 0;
  cells.forEach((cell, i) => {
    if (cell === CellStatus.TRUE || cell === CellStatus.UNKNOWN) {
      areaLength += 1;

      if (i === cells.length - 1) {
        areas.push({
          areaLength,
          startIndex: i - areaLength + 1,
          endIndex: i,
        });
      }
    } else {
      if (areaLength > 0) {
        areas.push({ areaLength, startIndex: i - areaLength, endIndex: i - 1 });
        areaLength = 0;
      }
    }
  });

  // if (areaLength > 0 && areas.length === 0) {
  //   areas.push({
  //     areaLength,
  //     startIndex: 0,
  //     endIndex: cells.length - 1,
  //   });
  //   areaLength = 0;
  // }

  return areas;
};
