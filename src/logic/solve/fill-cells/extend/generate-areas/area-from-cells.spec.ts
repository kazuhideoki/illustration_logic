import { CellStatus } from "../../../../helper/type";
import { areaFromCells } from "./area-from-cells";

describe("areaFromCells", () => {
  it("areaFromCells", () => {
    const r = areaFromCells([CellStatus.UNKNOWN]);

    expect(r[0].areaLength).toEqual(1);
    expect(r[0].startIndex).toEqual(0);
    expect(r[0].endIndex).toEqual(0);

    const r2 = areaFromCells([CellStatus.TRUE]);
    expect(r2[0].areaLength).toEqual(1);
    expect(r2[0].startIndex).toEqual(0);
    expect(r2[0].endIndex).toEqual(0);

    const r3 = areaFromCells([
      CellStatus.UNKNOWN,
      CellStatus.FALSE,
      CellStatus.UNKNOWN,
    ]);

    expect(r3[0].areaLength).toEqual(1);
    expect(r3[0].startIndex).toEqual(0);
    expect(r3[0].endIndex).toEqual(0);
    expect(r3[1].areaLength).toEqual(1);
    expect(r3[1].startIndex).toEqual(2);
    expect(r3[1].endIndex).toEqual(2);

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
    console.log(r4);

    expect(r4[0].areaLength).toEqual(1);
    expect(r4[0].startIndex).toEqual(0);
    expect(r4[0].endIndex).toEqual(0);
    expect(r4[1].areaLength).toEqual(4);
    expect(r4[1].startIndex).toEqual(2);
    expect(r4[1].endIndex).toEqual(5);
    expect(r4[2].areaLength).toEqual(1);
    expect(r4[2].startIndex).toEqual(7);
    expect(r4[2].endIndex).toEqual(7);
  });
});
