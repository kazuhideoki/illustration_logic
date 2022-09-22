import { filterPatterns } from "./filter-pattterns";

describe("filterPatterns", () => {
  it("filterPatterns", () => {
    const r = filterPatterns(
      [3, 2],
      [
        [[], [2, 1]],
        [[2], [1]],
        [[2, 1], []],
      ]
    );
    console.log(r);

    expect(r).toEqual([[[2], [1]]]);

    const r2 = filterPatterns(
      [5, 5, 5],
      [
        [[], [], [3, 2, 1]],
        [[], [3], [2, 1]],
        [[], [3, 2], [1]],
        [[], [3, 2, 1], []],
        [[3], [], [2, 1]],
        [[3], [2], [1]],
        [[3], [2, 1], []],
        [[3, 2], [], [1]],
        [[3, 2], [1], []],
        [[3, 2, 1], [], []],
      ]
    );
    console.log(r2);

    expect(r2).toEqual([
      [[], [3], [2, 1]],
      [[3], [], [2, 1]],
      [[3], [2], [1]],
      [[3], [2, 1], []],
    ]);
  });
});
