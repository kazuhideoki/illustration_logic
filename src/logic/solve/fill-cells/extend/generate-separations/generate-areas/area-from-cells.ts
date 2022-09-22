import { CellStatus } from "../../../../../helper/type";

export const areaFromCells = (cells: CellStatus[]): number[] => {
  const areas: number[] = [];
  let area = 0;
  cells.forEach((cell) => {
    if (cell === CellStatus.TRUE || cell === CellStatus.UNKNOWN) {
      area += 1;
    } else {
      if (area > 0) {
        areas.push(area);
        area = 0;
      }
    }
  });
  if (area > 0) {
    areas.push(area);
  }
  return areas;
};
