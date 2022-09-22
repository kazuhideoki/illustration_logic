import { CellStatus } from "../../../helper/type";
import { mergeFills } from "./merge-fills";
describe("mergeFills", () => {
  it("mergeFills", () => {
    const r = mergeFills(
      [CellStatus.UNKNOWN],
      [{ index: 0, cell: CellStatus.TRUE }],
      [{ index: 0, cell: CellStatus.TRUE }],
      [1]
    );
    expect(r).toStrictEqual([CellStatus.TRUE]);

    const r2 = mergeFills(
      [CellStatus.UNKNOWN, CellStatus.UNKNOWN],
      [
        { index: 0, cell: CellStatus.TRUE },
        { index: 0, cell: CellStatus.UNKNOWN },
      ],
      [
        { index: 0, cell: CellStatus.UNKNOWN },
        { index: 0, cell: CellStatus.TRUE },
      ],
      [1]
    );
    expect(r2).toStrictEqual([CellStatus.UNKNOWN, CellStatus.UNKNOWN]);

    const r3 = mergeFills(
      [
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
      ],
      [
        { index: 0, cell: CellStatus.TRUE },
        { index: 0, cell: CellStatus.TRUE },
        { index: 0, cell: CellStatus.TRUE },
        { index: null, cell: CellStatus.FALSE },
        { index: 1, cell: CellStatus.TRUE },
        { index: 1, cell: CellStatus.TRUE },
        { index: null, cell: CellStatus.FALSE },
      ],
      [
        { index: null, cell: CellStatus.FALSE },
        { index: 0, cell: CellStatus.TRUE },
        { index: 0, cell: CellStatus.TRUE },
        { index: 0, cell: CellStatus.TRUE },
        { index: null, cell: CellStatus.FALSE },
        { index: 1, cell: CellStatus.TRUE },
        { index: 1, cell: CellStatus.TRUE },
      ],
      [3, 2]
    );
    expect(r3).toStrictEqual([
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.UNKNOWN,
    ]);

    const r4 = mergeFills(
      [
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
      ],
      [
        { index: 0, cell: CellStatus.TRUE },
        { index: 0, cell: CellStatus.TRUE },
        { index: 0, cell: CellStatus.TRUE },
        { index: null, cell: CellStatus.FALSE },
        { index: 1, cell: CellStatus.TRUE },
        { index: 1, cell: CellStatus.TRUE },
        { index: null, cell: CellStatus.FALSE },
      ],
      [
        { index: 0, cell: CellStatus.TRUE },
        { index: 0, cell: CellStatus.TRUE },
        { index: 0, cell: CellStatus.TRUE },
        { index: null, cell: CellStatus.FALSE },
        { index: 1, cell: CellStatus.TRUE },
        { index: 1, cell: CellStatus.TRUE },
        { index: null, cell: CellStatus.FALSE },
      ],
      [3, 2]
    );
    expect(r4).toStrictEqual([
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.FALSE,
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.FALSE,
    ]);
  });
});
