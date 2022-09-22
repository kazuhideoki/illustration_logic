import { CellStatus } from "../solve";
import { mergeFilledRow } from "./merge-filled-row";
describe("mergeFilledRow", () => {
  it("mergeFilledRow", () => {
    const r = mergeFilledRow(
      [CellStatus.UNKNOWN],
      [{ index: 0, cell: CellStatus.TRUE }],
      [{ index: 0, cell: CellStatus.TRUE }]
    );
    expect(r).toStrictEqual([CellStatus.TRUE]);

    const r2 = mergeFilledRow(
      [CellStatus.UNKNOWN, CellStatus.UNKNOWN],
      [
        { index: 0, cell: CellStatus.TRUE },
        { index: 0, cell: CellStatus.UNKNOWN },
      ],
      [
        { index: 0, cell: CellStatus.UNKNOWN },
        { index: 0, cell: CellStatus.TRUE },
      ]
    );
    expect(r2).toStrictEqual([CellStatus.UNKNOWN, CellStatus.UNKNOWN]);

    const r3 = mergeFilledRow(
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
      ]
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
  });
});
