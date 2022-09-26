import { CellStatus } from "../../../../helper/type";
import {
  pickFixedNumsInSeparations,
  updatedCellsByFixedArea,
} from "./fill-fixed-separations";
describe("fillFixedSeparations", () => {
  it("pickFixedNumsInSeparations", () => {
    const r = pickFixedNumsInSeparations([
      [
        { numsInSeparation: [1], startIndex: 0 },
        { numsInSeparation: [2], startIndex: 2 },
      ],
      [
        { numsInSeparation: [1], startIndex: 0 },
        { numsInSeparation: [], startIndex: 2 },
      ],
    ]);

    expect(r).toStrictEqual([
      {
        fixedSeparation: [1],
        startIndex: 0,
      },
    ]);

    const r2 = pickFixedNumsInSeparations([
      [
        { numsInSeparation: [1], startIndex: 0 },
        { numsInSeparation: [2], startIndex: 2 },
        { numsInSeparation: [3], startIndex: 5 },
      ],
      [
        { numsInSeparation: [1], startIndex: 0 },
        { numsInSeparation: [], startIndex: 2 },
        { numsInSeparation: [3], startIndex: 5 },
      ],
    ]);

    expect(r2).toStrictEqual([
      {
        fixedSeparation: [1],
        startIndex: 0,
      },
      {
        fixedSeparation: [3],
        startIndex: 5,
      },
    ]);
  });

  it("updatedCellsByFixedArea", () => {
    const r = updatedCellsByFixedArea(
      [
        {
          separationsLength: 10,
          startIndex: 0,
          endIndex: 9,
        },
        {
          separationsLength: 4,
          startIndex: 11,
          endIndex: 14,
        },
      ],
      [
        {
          fixedSeparation: [4],
          startIndex: 0,
        },
        {
          fixedSeparation: [3],
          startIndex: 11,
        },
      ],
      [
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.TRUE,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.TRUE,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
        CellStatus.FALSE,
        CellStatus.UNKNOWN,
        CellStatus.TRUE,
        CellStatus.UNKNOWN,
        CellStatus.UNKNOWN,
      ]
    );

    expect(r).toStrictEqual([
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
      CellStatus.UNKNOWN,
      CellStatus.FALSE,
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.TRUE,
      CellStatus.UNKNOWN,
    ]);
  });
});
