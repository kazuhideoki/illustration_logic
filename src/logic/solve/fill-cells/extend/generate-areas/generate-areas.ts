// 一つのエリアに対して、num をあてはめられるパターンを生成する

import { isEqual, uniqWith } from "lodash";
import { SeparatedArea, SeparatedPattern } from "../../../../helper/type";

export const generateSeparationPatterns = (
  nums: number[],
  areas: SeparatedArea[]
): SeparatedPattern[] => {
  const generatePatternRecursively = (
    nums: number[],
    areas: SeparatedArea[],
    pattern: SeparatedPattern = [],
    startIndex = 0
  ) => {
    const isPatternCompleted =
      nums.length === 0 && pattern.length === originalAreaLength;

    if (isPatternCompleted) {
      patterns.push(pattern);
      return;
    }

    if (
      pattern.length > originalAreaLength ||
      (nums.length === 0 && areas.length === 0)
    ) {
      return;
    }

    // 1-a 空の配列だけ足す
    const areas1 = areas.slice(1, areas.length);
    const nextIndex = areas1.length
      ? areas1[0].startIndex
      : originalAreaLength - 1; // areas1.length 0 なら使わない;
    const pattern1: SeparatedPattern = [
      ...pattern,
      { area: [], startIndex: startIndex },
    ];
    generatePatternRecursively(nums, areas1, pattern1, nextIndex);

    if (pattern.length === 0 || nums.length === 0) {
      return;
    }

    // 1-b 最後の area の中に入れる
    const num = nums[0];
    const slicedNums = nums.slice(1, nums.length);
    const areas2 = areas;
    const pattern2: SeparatedPattern = [
      ...pattern.slice(0, pattern.length - 1),
      // area の最後に num を追加する
      // area に index をつけておく
      // {area: compact([...pattern[pattern.length - 1], num]),startIndex: areas1.length ? areas[0].startIndex:0},
      {
        area: [
          ...pattern.slice(pattern.length - 1, pattern.length)[0].area,
          num,
        ],
        startIndex: pattern.slice(pattern.length - 1, pattern.length)[0]
          .startIndex,
      },
    ];
    generatePatternRecursively(slicedNums, areas2, pattern2, startIndex);
  };

  const originalAreaLength = areas.length;
  const originalNums = nums;
  let patterns: SeparatedPattern[] = [];
  generatePatternRecursively(nums, areas);

  patterns = uniqWith(patterns, isEqual);

  return patterns;
};
