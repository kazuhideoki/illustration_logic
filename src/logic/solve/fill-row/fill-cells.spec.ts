import { describe, expect } from "@jest/globals";
import { CellStatus } from "../solve";
import { fillCells } from "./fill-cells";

describe("fillCells", () => {
  it("fillCells", () => {
    const r = fillCells([CellStatus.UNKNOWN], [1]);
    expect(r).toStrictEqual([CellStatus.TRUE]);

    const r2 = fillCells([CellStatus.TRUE, CellStatus.UNKNOWN], [2]);
    expect(r2).toStrictEqual([CellStatus.TRUE, CellStatus.TRUE]);

    const r3 = fillCells(
      [CellStatus.UNKNOWN, CellStatus.UNKNOWN, CellStatus.UNKNOWN],
      [1]
    );
    expect(r3).toStrictEqual([
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
    ]);

    const r4 = fillCells(
      [CellStatus.UNKNOWN, CellStatus.UNKNOWN, CellStatus.UNKNOWN],
      [2]
    );
    expect(r4).toStrictEqual([
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.UNKNOWN,
    ]);

    const r5 = fillCells(
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

    const r6 = fillCells(
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
    const r7 = fillCells(
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

    // const r8 = fillCells(
    //   [
    //     CellStatus.UNKNOWN,
    //     CellStatus.UNKNOWN,
    //     CellStatus.UNKNOWN,
    //     CellStatus.UNKNOWN,
    //     CellStatus.UNKNOWN,
    //     CellStatus.UNKNOWN,
    //     CellStatus.UNKNOWN,
    //     CellStatus.UNKNOWN,
    //     CellStatus.UNKNOWN,
    //     CellStatus.FALSE,
    //     CellStatus.UNKNOWN,
    //     CellStatus.UNKNOWN,
    //     CellStatus.UNKNOWN,
    //     CellStatus.UNKNOWN,
    //     CellStatus.UNKNOWN,
    //   ],
    //   [1, 2, 2, 1, 1]
    // );
    // expect(r8).toStrictEqual([
    //   CellStatus.UNKNOWN,
    //   CellStatus.UNKNOWN,
    //   CellStatus.UNKNOWN,
    //   CellStatus.UNKNOWN,
    //   CellStatus.UNKNOWN,
    //   CellStatus.UNKNOWN,
    //   CellStatus.UNKNOWN,
    //   CellStatus.UNKNOWN,
    //   CellStatus.UNKNOWN,
    //   CellStatus.FALSE,
    //   CellStatus.UNKNOWN,
    //   CellStatus.UNKNOWN,
    //   CellStatus.UNKNOWN,
    //   CellStatus.UNKNOWN,
    //   CellStatus.UNKNOWN,
    // ]);
  });
});
