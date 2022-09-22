import { describe, expect } from "@jest/globals";
import { CellStatus } from "../solve";
import {
  generatePossibleFilledRow,
  pickFirstElements,
  pickTarget,
} from "./generate-filled-row";

describe("generateFilledRow", () => {
  it("pickFirstElements", () => {
    const r = pickFirstElements([true, true, false], true);
    expect(r).toStrictEqual([true, true]);

    const r2 = pickFirstElements([1, 1, 2, 1, 1], 1);
    expect(r2).toStrictEqual([1, 1]);

    const r3 = pickFirstElements([1, 1, 2, 2, 1], 2);
    expect(r3).toStrictEqual([2, 2]);
  });

  it("pickTarget", () => {
    const r = pickTarget(1, [CellStatus.UNKNOWN]);
    expect(r.hasTarget).toBe(true);
    expect(r.targetCells).toStrictEqual([CellStatus.UNKNOWN]);

    const r2 = pickTarget(2, [CellStatus.TRUE, CellStatus.UNKNOWN]);
    expect(r2.hasTarget).toBe(true);
    expect(r2.targetCells).toStrictEqual([CellStatus.TRUE, CellStatus.UNKNOWN]);

    const r3 = pickTarget(2, [CellStatus.FALSE, CellStatus.TRUE]);
    expect(r3.hasTarget).toBe(false);
    expect(r3.targetCells).toStrictEqual(undefined);

    const r4 = pickTarget(2, [
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.FALSE,
    ]);
    expect(r4.hasTarget).toBe(true);
    expect(r4.targetCells).toStrictEqual([CellStatus.UNKNOWN, CellStatus.TRUE]);

    const r5 = pickTarget(2, [
      CellStatus.FALSE,
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.FALSE,
    ]);
    expect(r5.hasTarget).toBe(false);
    expect(r5.targetCells).toStrictEqual(undefined);

    // const r6 = pickTarget(2, [
    //   CellStatus.UNKNOWN,
    //   CellStatus.UNKNOWN,
    //   CellStatus.TRUE,
    //   CellStatus.TRUE,
    // ]);
    // expect(r6.hasTarget).toBe(false);
    // expect(r6.targetCells).toStrictEqual(undefined);
  });

  it("generatePossibleFilledRow", () => {
    const r = generatePossibleFilledRow([1], [CellStatus.UNKNOWN]);
    expect(r).toStrictEqual([{ index: 0, cell: CellStatus.TRUE }]);

    const r2 = generatePossibleFilledRow(
      [2],
      [CellStatus.UNKNOWN, CellStatus.UNKNOWN, CellStatus.UNKNOWN]
    );
    expect(r2).toStrictEqual([
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.UNKNOWN },
    ]);

    const r3 = generatePossibleFilledRow(
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

    const r4 = generatePossibleFilledRow(
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

    const r5 = generatePossibleFilledRow(
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

    const r6 = generatePossibleFilledRow(
      [3, 2],
      [
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.TRUE,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.TRUE,
      ]
    );
    expect(r6).toStrictEqual([
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: 0, cell: CellStatus.TRUE },
      { index: null, cell: CellStatus.FALSE },
      { index: 1, cell: CellStatus.TRUE },
      { index: 1, cell: CellStatus.TRUE },
    ]);
  });
});
