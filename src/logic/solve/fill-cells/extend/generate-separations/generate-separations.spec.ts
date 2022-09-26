import { CellStatus } from "../../../../helper/type";
import { generateSeparations } from "./generate-separations";

describe("generateSeparations", () => {
  it("generateSeparations", () => {
    const r = generateSeparations([CellStatus.UNKNOWN]);

    expect(r[0].separationsLength).toEqual(1);
    expect(r[0].startIndex).toEqual(0);
    expect(r[0].endIndex).toEqual(0);

    const r2 = generateSeparations([CellStatus.TRUE]);
    expect(r2[0].separationsLength).toEqual(1);
    expect(r2[0].startIndex).toEqual(0);
    expect(r2[0].endIndex).toEqual(0);

    const r3 = generateSeparations([
      CellStatus.UNKNOWN,
      CellStatus.FALSE,
      CellStatus.UNKNOWN,
    ]);

    expect(r3[0].separationsLength).toEqual(1);
    expect(r3[0].startIndex).toEqual(0);
    expect(r3[0].endIndex).toEqual(0);
    expect(r3[1].separationsLength).toEqual(1);
    expect(r3[1].startIndex).toEqual(2);
    expect(r3[1].endIndex).toEqual(2);

    const r4 = generateSeparations([
      CellStatus.UNKNOWN,
      CellStatus.FALSE,
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.FALSE,
      CellStatus.TRUE,
    ]);

    expect(r4[0].separationsLength).toEqual(1);
    expect(r4[0].startIndex).toEqual(0);
    expect(r4[0].endIndex).toEqual(0);
    expect(r4[1].separationsLength).toEqual(4);
    expect(r4[1].startIndex).toEqual(2);
    expect(r4[1].endIndex).toEqual(5);
    expect(r4[2].separationsLength).toEqual(1);
    expect(r4[2].startIndex).toEqual(7);
    expect(r4[2].endIndex).toEqual(7);
  });
});
