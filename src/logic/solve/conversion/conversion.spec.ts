import { CellStatus } from "../solve";
import { convertFilledRowIntoAnswer, extractColumn } from "./conversion";

describe("conversion", () => {
  it("extractColumn", () => {
    const r = extractColumn([[CellStatus.UNKNOWN]], 0);
    expect(r).toStrictEqual([CellStatus.UNKNOWN]);

    const r2 = extractColumn(
      [
        [CellStatus.TRUE, CellStatus.UNKNOWN, CellStatus.UNKNOWN],
        [CellStatus.UNKNOWN, CellStatus.TRUE, CellStatus.UNKNOWN],
        [CellStatus.UNKNOWN, CellStatus.UNKNOWN, CellStatus.TRUE],
      ],
      1
    );
    expect(r2).toStrictEqual([
      CellStatus.UNKNOWN,
      CellStatus.TRUE,
      CellStatus.UNKNOWN,
    ]);
  });

  it("convertFilledRowIntoAnswer", () => {
    const r = convertFilledRowIntoAnswer(
      [
        [CellStatus.UNKNOWN, CellStatus.UNKNOWN],
        [CellStatus.UNKNOWN, CellStatus.UNKNOWN],
      ],
      [CellStatus.TRUE, CellStatus.TRUE],
      0
    );
    expect(r).toStrictEqual([
      [CellStatus.TRUE, CellStatus.UNKNOWN],
      [CellStatus.TRUE, CellStatus.UNKNOWN],
    ]);

    const r2 = convertFilledRowIntoAnswer(
      [
        [CellStatus.UNKNOWN, CellStatus.UNKNOWN, CellStatus.UNKNOWN],
        [CellStatus.UNKNOWN, CellStatus.UNKNOWN, CellStatus.UNKNOWN],
        [CellStatus.UNKNOWN, CellStatus.UNKNOWN, CellStatus.UNKNOWN],
      ],
      [CellStatus.TRUE, CellStatus.TRUE, CellStatus.TRUE],
      2
    );
    expect(r2).toStrictEqual([
      [CellStatus.UNKNOWN, CellStatus.UNKNOWN, CellStatus.TRUE],
      [CellStatus.UNKNOWN, CellStatus.UNKNOWN, CellStatus.TRUE],
      [CellStatus.UNKNOWN, CellStatus.UNKNOWN, CellStatus.TRUE],
    ]);
  });
});
