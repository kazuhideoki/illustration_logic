import { describe, expect } from "@jest/globals";
import { CellStatus } from "../../helper/type";
import { reverseIndex } from "./reverse-index";

describe("reverseIndex", () => {
  it("reverseIndex", () => {
    const r = reverseIndex([
      { index: 0, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.FALSE },
      { index: 1, cell: CellStatus.TRUE },
    ]);
    expect(r).toStrictEqual([
      { index: 1, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.FALSE },
      { index: 0, cell: CellStatus.TRUE },
    ]);

    const r2 = reverseIndex([
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.FALSE },
      { index: 1, cell: CellStatus.TRUE },
      { index: 1, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.FALSE },
    ]);
    expect(r2).toStrictEqual([
      { index: 1, cell: CellStatus.TRUE },
      { index: 1, cell: CellStatus.TRUE },
      { index: 1, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.FALSE },
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.FALSE },
    ]);
  });
});
