import { generateSeparationPatterns } from "./generate-separation-patterns";

describe("generateSeparationPatterns", () => {
  it("generateSeparationPatterns", () => {
    const r = generateSeparationPatterns(
      [1],
      [
        {
          separationsLength: 1,
          startIndex: 0,
          endIndex: 0,
        },
      ]
    );
    expect(r).toEqual([[{ numsInSeparation: [1], startIndex: 0 }]]);

    const r2 = generateSeparationPatterns(
      [2, 1],
      [
        {
          separationsLength: 3,
          startIndex: 0,
          endIndex: 2,
        },
        {
          separationsLength: 2,
          startIndex: 4,
          endIndex: 5,
        },
      ]
    );
    expect(r2).toEqual([
      [
        { numsInSeparation: [], startIndex: 0 },
        { numsInSeparation: [2, 1], startIndex: 4 },
      ],
      [
        { numsInSeparation: [2], startIndex: 0 },
        { numsInSeparation: [1], startIndex: 4 },
      ],
      [
        { numsInSeparation: [2, 1], startIndex: 0 },
        { numsInSeparation: [], startIndex: 4 },
      ],
    ]);

    const r3 = generateSeparationPatterns(
      [3, 2, 1],
      [
        {
          separationsLength: 5,
          startIndex: 0,
          endIndex: 4,
        },
        {
          separationsLength: 5,
          startIndex: 6,
          endIndex: 10,
        },
        {
          separationsLength: 5,
          startIndex: 12,
          endIndex: 16,
        },
      ]
    );

    expect(r3).toEqual([
      [
        { numsInSeparation: [], startIndex: 0 },
        { numsInSeparation: [], startIndex: 6 },
        { numsInSeparation: [3, 2, 1], startIndex: 12 },
      ],
      [
        { numsInSeparation: [], startIndex: 0 },
        { numsInSeparation: [3], startIndex: 6 },
        { numsInSeparation: [2, 1], startIndex: 12 },
      ],
      [
        { numsInSeparation: [], startIndex: 0 },
        { numsInSeparation: [3, 2], startIndex: 6 },
        { numsInSeparation: [1], startIndex: 12 },
      ],
      [
        { numsInSeparation: [], startIndex: 0 },
        { numsInSeparation: [3, 2, 1], startIndex: 6 },
        { numsInSeparation: [], startIndex: 12 },
      ],
      [
        { numsInSeparation: [3], startIndex: 0 },
        { numsInSeparation: [], startIndex: 6 },
        { numsInSeparation: [2, 1], startIndex: 12 },
      ],
      [
        { numsInSeparation: [3], startIndex: 0 },
        { numsInSeparation: [2], startIndex: 6 },
        { numsInSeparation: [1], startIndex: 12 },
      ],
      [
        { numsInSeparation: [3], startIndex: 0 },
        { numsInSeparation: [2, 1], startIndex: 6 },
        { numsInSeparation: [], startIndex: 12 },
      ],
      [
        { numsInSeparation: [3, 2], startIndex: 0 },
        { numsInSeparation: [], startIndex: 6 },
        { numsInSeparation: [1], startIndex: 12 },
      ],
      [
        { numsInSeparation: [3, 2], startIndex: 0 },
        { numsInSeparation: [1], startIndex: 6 },
        { numsInSeparation: [], startIndex: 12 },
      ],
      [
        { numsInSeparation: [3, 2, 1], startIndex: 0 },
        { numsInSeparation: [], startIndex: 6 },
        { numsInSeparation: [], startIndex: 12 },
      ],
    ]);

    const r4 = generateSeparationPatterns(
      [3, 2, 2],
      [
        {
          separationsLength: 6,
          startIndex: 0,
          endIndex: 5,
        },
        {
          separationsLength: 2,
          startIndex: 7,
          endIndex: 8,
        },
        {
          separationsLength: 5,
          startIndex: 10,
          endIndex: 14,
        },
      ]
    );
    expect(r4).toEqual([
      [
        { numsInSeparation: [], startIndex: 0 },
        { numsInSeparation: [], startIndex: 7 },
        { numsInSeparation: [3, 2, 2], startIndex: 10 },
      ],
      [
        { numsInSeparation: [], startIndex: 0 },
        { numsInSeparation: [3], startIndex: 7 },
        { numsInSeparation: [2, 2], startIndex: 10 },
      ],
      [
        { numsInSeparation: [], startIndex: 0 },
        { numsInSeparation: [3, 2], startIndex: 7 },
        { numsInSeparation: [2], startIndex: 10 },
      ],
      [
        { numsInSeparation: [], startIndex: 0 },
        { numsInSeparation: [3, 2, 2], startIndex: 7 },
        { numsInSeparation: [], startIndex: 10 },
      ],
      [
        { numsInSeparation: [3], startIndex: 0 },
        { numsInSeparation: [], startIndex: 7 },
        { numsInSeparation: [2, 2], startIndex: 10 },
      ],
      [
        { numsInSeparation: [3], startIndex: 0 },
        { numsInSeparation: [2], startIndex: 7 },
        { numsInSeparation: [2], startIndex: 10 },
      ],
      [
        { numsInSeparation: [3], startIndex: 0 },
        { numsInSeparation: [2, 2], startIndex: 7 },
        { numsInSeparation: [], startIndex: 10 },
      ],
      [
        { numsInSeparation: [3, 2], startIndex: 0 },
        { numsInSeparation: [], startIndex: 7 },
        { numsInSeparation: [2], startIndex: 10 },
      ],
      [
        { numsInSeparation: [3, 2], startIndex: 0 },
        { numsInSeparation: [2], startIndex: 7 },
        { numsInSeparation: [], startIndex: 10 },
      ],
      [
        { numsInSeparation: [3, 2, 2], startIndex: 0 },
        { numsInSeparation: [], startIndex: 7 },
        { numsInSeparation: [], startIndex: 10 },
      ],
    ]);
  });
});
