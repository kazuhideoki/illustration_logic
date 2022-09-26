import { filterPatterns } from "./filter-pattterns";

describe("filterPatterns", () => {
  it("filterPatterns", () => {
    const r = filterPatterns(
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
      ],
      [
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
      ]
    );

    expect(r).toEqual([
      [
        { area: [2], startIndex: 0 },
        { area: [1], startIndex: 4 },
      ],
    ]);

    const r2 = filterPatterns(
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
      ],
      [
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
      ]
    );

    expect(r2).toEqual([
      [
        { area: [], startIndex: 0 },
        { area: [3], startIndex: 6 },
        { area: [2, 1], startIndex: 12 },
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
    ]);

    const r3 = filterPatterns(
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
      ],
      [
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
      ]
    );

    expect(r3).toEqual([
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
        { area: [3, 2], startIndex: 0 },
        { area: [], startIndex: 7 },
        { area: [2], startIndex: 10 },
      ],
      [
        { area: [3, 2], startIndex: 0 },
        { area: [2], startIndex: 7 },
        { area: [], startIndex: 10 },
      ],
    ]);
  });
});
