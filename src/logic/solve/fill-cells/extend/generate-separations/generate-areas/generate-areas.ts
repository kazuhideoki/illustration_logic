// 一つのエリアに対して、num をあてはめられるパターンを生成する

import { compact, isEqual, uniqWith } from "lodash";

export const generateSeparationPatterns = (
  nums: number[],
  areas: number[]
): number[][][] => {
  const generatePatternRecursively = (
    nums: number[],
    areas: number[],
    pattern: number[][] = []
  ) => {
    const isPatternCompleted =
      nums.length === 0 && pattern.length === originalAreaLength;
    console.log("pattern", {
      areaLength: areas.length,
      originalAreaLength,
      nums,
      originalNums,
      pattern,
      isPatternFinished: isPatternCompleted,
    });

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
    const areas3 = areas.slice(1, areas.length);
    const pattern3 = [...pattern, []];
    generatePatternRecursively(nums, areas3, pattern3);

    if (pattern.length === 0 || nums.length === 0) {
      return;
    }

    // 1-b 最後の area に入れる
    const num = nums[0];
    const slicedNums = nums.slice(1, nums.length);
    const areas2 = areas;
    const pattern2 = [
      ...pattern.slice(0, pattern.length - 1),
      compact([...pattern[pattern.length - 1], num]),
    ];
    generatePatternRecursively(slicedNums, areas2, pattern2);
  };

  const originalAreaLength = areas.length;
  const originalNums = nums;
  let patterns: number[][][] = [];
  generatePatternRecursively(nums, areas);

  patterns = uniqWith(patterns, isEqual);

  return patterns;
};
