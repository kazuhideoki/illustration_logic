import { generateSeparationPatterns } from "./generate-areas";

describe("generateSeparationPatterns", () => {
  it("generateSeparationPatterns", () => {
    const r = generateSeparationPatterns(
      [1],
      [
        {
          areaLength: 1,
          startIndex: 0,
          endIndex: 0,
        },
      ]
    );
    expect(r).toEqual([[{ area: [1], startIndex: 0 }]]);

    const r2 = generateSeparationPatterns(
      [2, 1],
      [
        {
          areaLength: 3,
          startIndex: 0,
          endIndex: 2,
        },
        {
          areaLength: 2,
          startIndex: 4,
          endIndex: 5,
        },
      ]
    );
    expect(r2).toEqual([
      [
        { area: [], startIndex: 0 },
        { area: [2, 1], startIndex: 4 },
      ],
      [
        { area: [2], startIndex: 0 },
        { area: [1], startIndex: 4 },
      ],
      [
        { area: [2, 1], startIndex: 0 },
        { area: [], startIndex: 4 },
      ],
    ]);

    const r3 = generateSeparationPatterns(
      [3, 2, 1],
      [
        {
          areaLength: 5,
          startIndex: 0,
          endIndex: 4,
        },
        {
          areaLength: 5,
          startIndex: 6,
          endIndex: 10,
        },
        {
          areaLength: 5,
          startIndex: 12,
          endIndex: 16,
        },
      ]
    );

    expect(r3).toEqual([
      [
        { area: [], startIndex: 0 },
        { area: [], startIndex: 6 },
        { area: [3, 2, 1], startIndex: 12 },
      ],
      [
        { area: [], startIndex: 0 },
        { area: [3], startIndex: 6 },
        { area: [2, 1], startIndex: 12 },
      ],
      [
        { area: [], startIndex: 0 },
        { area: [3, 2], startIndex: 6 },
        { area: [1], startIndex: 12 },
      ],
      [
        { area: [], startIndex: 0 },
        { area: [3, 2, 1], startIndex: 6 },
        { area: [], startIndex: 12 },
      ],
      [
        { area: [3], startIndex: 0 },
        { area: [], startIndex: 6 },
        { area: [2, 1], startIndex: 12 },
      ],
      [
        { area: [3], startIndex: 0 },
        { area: [2], startIndex: 6 },
        { area: [1], startIndex: 12 },
      ],
      [
        { area: [3], startIndex: 0 },
        { area: [2, 1], startIndex: 6 },
        { area: [], startIndex: 12 },
      ],
      [
        { area: [3, 2], startIndex: 0 },
        { area: [], startIndex: 6 },
        { area: [1], startIndex: 12 },
      ],
      [
        { area: [3, 2], startIndex: 0 },
        { area: [1], startIndex: 6 },
        { area: [], startIndex: 12 },
      ],
      [
        { area: [3, 2, 1], startIndex: 0 },
        { area: [], startIndex: 6 },
        { area: [], startIndex: 12 },
      ],
    ]);

    const r4 = generateSeparationPatterns(
      [3, 2, 2],
      [
        {
          areaLength: 6,
          startIndex: 0,
          endIndex: 5,
        },
        {
          areaLength: 2,
          startIndex: 7,
          endIndex: 8,
        },
        {
          areaLength: 5,
          startIndex: 10,
          endIndex: 14,
        },
      ]
    );
    console.log(JSON.stringify(r4));
    expect(r4).toEqual([
      [
        { area: [], startIndex: 0 },
        { area: [], startIndex: 7 },
        { area: [3, 2, 2], startIndex: 10 },
      ],
      [
        { area: [], startIndex: 0 },
        { area: [3], startIndex: 7 },
        { area: [2, 2], startIndex: 10 },
      ],
      [
        { area: [], startIndex: 0 },
        { area: [3, 2], startIndex: 7 },
        { area: [2], startIndex: 10 },
      ],
      [
        { area: [], startIndex: 0 },
        { area: [3, 2, 2], startIndex: 7 },
        { area: [], startIndex: 10 },
      ],
      [
        { area: [3], startIndex: 0 },
        { area: [], startIndex: 7 },
        { area: [2, 2], startIndex: 10 },
      ],
      [
        { area: [3], startIndex: 0 },
        { area: [2], startIndex: 7 },
        { area: [2], startIndex: 10 },
      ],
      [
        { area: [3], startIndex: 0 },
        { area: [2, 2], startIndex: 7 },
        { area: [], startIndex: 10 },
      ],
      [
        { area: [3, 2], startIndex: 0 },
        { area: [], startIndex: 7 },
        { area: [2], startIndex: 10 },
      ],
      [
        { area: [3, 2], startIndex: 0 },
        { area: [2], startIndex: 7 },
        { area: [], startIndex: 10 },
      ],
      [
        { area: [3, 2, 2], startIndex: 0 },
        { area: [], startIndex: 7 },
        { area: [], startIndex: 10 },
      ],
    ]);
  });
});
