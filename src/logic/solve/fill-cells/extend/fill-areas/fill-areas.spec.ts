import { CellStatus } from "../../../../helper/type";
import { getFixedNumsInArea, updatedCellsByFixedArea } from "./fill-areas";
describe("fillFixedSets", () => {
  it("getFixedNumsInArea", () => {
    const r = getFixedNumsInArea([
      [
        { area: [1], startIndex: 0 },
        { area: [2], startIndex: 2 },
      ],
      [
        { area: [1], startIndex: 0 },
        { area: [], startIndex: 2 },
      ],
    ]);

    expect(r).toStrictEqual([
      {
        fixedArea: [1],
        startIndex: 0,
      },
    ]);

    const r2 = getFixedNumsInArea([
      [
        { area: [1], startIndex: 0 },
        { area: [2], startIndex: 2 },
        { area: [3], startIndex: 5 },
      ],
      [
        { area: [1], startIndex: 0 },
        { area: [], startIndex: 2 },
        { area: [3], startIndex: 5 },
      ],
    ]);

    expect(r2).toStrictEqual([
      {
        fixedArea: [1],
        startIndex: 0,
      },
      {
        fixedArea: [3],
        startIndex: 5,
      },
    ]);
  });

  it("updatedCellsByFixedArea", () => {
    const r = updatedCellsByFixedArea(
      [
        {
          areaLength: 10,
          startIndex: 0,
          endIndex: 9,
        },
        {
          areaLength: 4,
          startIndex: 11,
          endIndex: 14,
        },
      ],
      [
        {
          fixedArea: [4],
          startIndex: 0,
        },
        {
          fixedArea: [3],
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
