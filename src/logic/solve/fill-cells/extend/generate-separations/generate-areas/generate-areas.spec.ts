import { generateSeparationPatterns } from "./generate-areas";

describe("generateSeparationPatterns", () => {
  it("generateSeparationPatterns", () => {
    const r = generateSeparationPatterns([1], [1]);
    console.log(r);
    expect(r).toEqual([[[1]]]);

    const r2 = generateSeparationPatterns([2, 1], [3, 2]);
    console.log(r2);
    expect(r2).toEqual([
      [[], [2, 1]],
      [[2], [1]],
      [[2, 1], []],
    ]);

    const r3 = generateSeparationPatterns([3, 2, 1], [5, 5, 5]);
    console.log(r3);

    expect(r3).toEqual([
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
    ]);
  });
});
