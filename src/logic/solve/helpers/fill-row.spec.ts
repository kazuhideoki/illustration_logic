import { describe, expect } from "@jest/globals";
import { CellStatus } from "../solve";
import { fillRow } from "./fill-row";

describe("fillRow", () => {
  it("fillRow", () => {
    const r = fillRow([CellStatus.UNKNOWN], [1]);
    expect(r).toStrictEqual([CellStatus.TRUE]);

    const r2 = fillRow([CellStatus.TRUE, CellStatus.UNKNOWN], [2]);
    expect(r2).toStrictEqual([CellStatus.TRUE, CellStatus.TRUE]);

    const r3 = fillRow(
      [CellStatus.UNKNOWN, CellStatus.UNKNOWN, CellStatus.UNKNOWN],
      [1]
    );
    expect(r3).toStrictEqual([
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
    ]);

    const r4 = fillRow(
      [CellStatus.UNKNOWN, CellStatus.UNKNOWN, CellStatus.UNKNOWN],
      [2]
    );
    expect(r4).toStrictEqual([
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.UNKNOWN,
    ]);

    const r5 = fillRow(
      [
        CellStatus.UNKNOWN,
        CellStatus.FALSE,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.TRUE,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
      ],
      [1, 3]
    );
    expect(r5).toStrictEqual([
      CellStatus.UNKNOWN,
      CellStatus.FALSE,
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
    ]);

    const r6 = fillRow(
      [
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.FALSE,
        CellStatus.UNKNOWN,
        CellStatus.TRUE,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
      ],
      [2, 3]
    );
    expect(r6).toStrictEqual([
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.FALSE,
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
    ]);

    // ロジック改善できる
    const r7 = fillRow(
      [
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.TRUE,
        CellStatus.FALSE,
        CellStatus.TRUE,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
      ],
      [3, 3]
    );
    expect(r7).toStrictEqual([
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.FALSE,
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.UNKNOWN,
    ]);
  });
});
