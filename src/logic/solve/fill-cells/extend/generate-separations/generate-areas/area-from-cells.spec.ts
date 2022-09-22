import { CellStatus } from "../../../../../helper/type";
import { areaFromCells } from "./area-from-cells";

describe("areaFromCells", () => {
  it("areaFromCells", () => {
    const r = areaFromCells([CellStatus.UNKNOWN]);
    expect(r).toEqual([1]);

    const r2 = areaFromCells([CellStatus.TRUE]);
    expect(r2).toEqual([1]);

    const r3 = areaFromCells([
      CellStatus.UNKNOWN,
      CellStatus.FALSE,
      CellStatus.UNKNOWN,
    ]);
    expect(r3).toEqual([1, 1]);

    const r4 = areaFromCells([
      CellStatus.UNKNOWN,
      CellStatus.FALSE,
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.FALSE,
      CellStatus.TRUE,
    ]);

    expect(r4).toEqual([1, 4, 1]);
  });
});
