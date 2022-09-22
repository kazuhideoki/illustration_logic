import { describe, expect } from "@jest/globals";
import { CellStatus } from "../../helper/type";
import { fillFromEdge, hasTarget } from "./fill-from-edge";

describe("generateFilledRow", () => {
  it("pickTarget", () => {
    const r = hasTarget(1, [CellStatus.UNKNOWN]);
    expect(r).toBe(true);

    const r2 = hasTarget(2, [CellStatus.TRUE, CellStatus.UNKNOWN]);
    expect(r2).toBe(true);

    const r3 = hasTarget(2, [CellStatus.FALSE, CellStatus.TRUE]);
    expect(r3).toBe(false);

    const r4 = hasTarget(2, [
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.FALSE,
    ]);
    expect(r4).toBe(false);

    const r5 = hasTarget(2, [
      CellStatus.FALSE,
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.FALSE,
    ]);
    expect(r5).toBe(false);

    const r6 = hasTarget(2, [
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.TRUE,
    ]);
    expect(r6).toBe(false);
  });

  it("fillFromEdge", () => {
    const r = fillFromEdge([1], [CellStatus.UNKNOWN]);
    expect(r).toStrictEqual([{ index: 0, cell: CellStatus.TRUE }]);

    const r2 = fillFromEdge(
      [2],
      [CellStatus.UNKNOWN, CellStatus.UNKNOWN, CellStatus.UNKNOWN]
    );
    expect(r2).toStrictEqual([
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.UNKNOWN },
    ]);

    const r3 = fillFromEdge(
      [3, 1],
      [
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
      ]
    );
    expect(r3).toStrictEqual([
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.FALSE },
      { index: 1, cell: CellStatus.TRUE },
    ]);
    const r4 = fillFromEdge(
      [3, 2],
      [
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
      ]
    );
    expect(r4).toStrictEqual([
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.FALSE },
      { index: 1, cell: CellStatus.TRUE },
      { index: 1, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.UNKNOWN },
    ]);
    const r5 = fillFromEdge(
      [3, 2],
      [
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.FALSE,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
      ]
    );
    expect(r5).toStrictEqual([
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.FALSE },
      { index: null, cell: CellStatus.FALSE },
      { index: 1, cell: CellStatus.TRUE },
      { index: 1, cell: CellStatus.TRUE },
    ]);
    const r6 = fillFromEdge(
      [3, 2],
      [
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.TRUE,
        CellStatus.TRUE,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.TRUE,
        CellStatus.UNKNOWN,
      ]
    );

    expect(r6).toStrictEqual([
      { index: null, cell: CellStatus.FALSE },
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.FALSE },
      { index: 1, cell: CellStatus.TRUE },
      { index: 1, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.UNKNOWN },
    ]);
  });
});
