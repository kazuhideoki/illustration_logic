import { CellStatus } from "../helper/type";
import { generateEmptyAnswer, solve } from "./solve";

describe("solve", () => {
  it("generateEmptyAnswer", () => {
    const r = generateEmptyAnswer(1, 1);
    expect(r).toStrictEqual([[CellStatus.UNKNOWN]]);

    const r2 = generateEmptyAnswer(2, 1);
    expect(r2).toStrictEqual([[CellStatus.UNKNOWN], [CellStatus.UNKNOWN]]);

    const r3 = generateEmptyAnswer(1, 2);
    expect(r3).toStrictEqual([[CellStatus.UNKNOWN, CellStatus.UNKNOWN]]);
  });

  it("solve", () => {
    const r = solve({ rows: [[1]], columns: [[1]] });
    expect(r).toStrictEqual([[CellStatus.TRUE]]);

    // T
    const r2 = solve({ rows: [[3], [1], [1]], columns: [[1], [3], [1]] });
    expect(r2).toStrictEqual([
      [CellStatus.TRUE, CellStatus.TRUE, CellStatus.TRUE],
      [CellStatus.FALSE, CellStatus.TRUE, CellStatus.FALSE],
      [CellStatus.FALSE, CellStatus.TRUE, CellStatus.FALSE],
    ]);

    // 5 ✕ 5 バッグ
    const r3 = solve({
      rows: [[3], [1, 1], [5], [5], [5]],
      columns: [[3], [5], [1, 3], [5], [3]],
    });
    expect(r3).toStrictEqual([
      [
        CellStatus.FALSE,
        CellStatus.TRUE,
        CellStatus.TRUE,
        CellStatus.TRUE,
        CellStatus.FALSE,
      ],
      [
        CellStatus.FALSE,
        CellStatus.TRUE,
        CellStatus.FALSE,
        CellStatus.TRUE,
        CellStatus.FALSE,
      ],
      [
        CellStatus.TRUE,
        CellStatus.TRUE,
        CellStatus.TRUE,
        CellStatus.TRUE,
        CellStatus.TRUE,
      ],
      [
        CellStatus.TRUE,
        CellStatus.TRUE,
        CellStatus.TRUE,
        CellStatus.TRUE,
        CellStatus.TRUE,
      ],
      [
        CellStatus.TRUE,
        CellStatus.TRUE,
        CellStatus.TRUE,
        CellStatus.TRUE,
        CellStatus.TRUE,
      ],
    ]);

    const r4 = solve({
      rows: [
        [4, 6],
        [4, 3],
        [5, 2, 2, 2],
        [4, 2],
        [4, 3, 3, 1],
        //
        [4, 1],
        [3, 1],
        [3, 3, 1],
        [3, 2, 2],
        [3, 1, 2, 1],
        //
        [3, 3, 1],
        [1, 3, 2],
        [2, 3, 1, 1],
        [3, 1, 2, 2],
        [2, 1, 4],
      ],
      columns: [
        [1],
        [4, 1],
        [8, 2],
        [10, 1],
        [11, 1],
        //
        [3, 5, 1],
        [1, 1, 2],
        [1, 1, 2, 1],
        [1, 2, 2, 1, 1],
        [1, 1, 2, 1],
        //
        [1, 1, 1, 2, 3, 1],
        [1, 1, 1, 4, 2],
        [2, 1, 2, 2],
        [4, 2, 1],
        [5, 4],
      ],
    });
    // expect(r4).toStrictEqual([]);
  });
});
