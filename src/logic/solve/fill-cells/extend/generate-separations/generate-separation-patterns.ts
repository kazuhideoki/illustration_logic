import { isEqual, uniqWith } from "lodash";
import { NumSeparationPatterns, Separation } from "../../../../helper/type";

/**
 * 一つのセパレーションに対して、num をあてはめられる全パターンを生成する
 * @param nums
 * @param separations
 * @returns
 */
export const generateSeparationPatterns = (
  nums: number[],
  separations: Separation[]
): NumSeparationPatterns[] => {
  const generatePatternRecursively = (
    nums: number[],
    separations: Separation[],
    pattern: NumSeparationPatterns = [],
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
      (nums.length === 0 && separations.length === 0)
    ) {
      return;
    }

    // 1-a 空の配列だけ足す
    const separations1 = separations.slice(1, separations.length);
    const nextIndex = separations1.length
      ? separations1[0].startIndex
      : originalAreaLength - 1;
    const pattern1: NumSeparationPatterns = [
      ...pattern,
      { numsInSeparation: [], startIndex: startIndex },
    ];
    generatePatternRecursively(nums, separations1, pattern1, nextIndex);

    if (pattern.length === 0 || nums.length === 0) {
      return;
    }

    const num = nums[0];
    const slicedNums = nums.slice(1, nums.length);
    const separations2 = separations;
    const pattern2: NumSeparationPatterns = [
      ...pattern.slice(0, pattern.length - 1),
      {
        numsInSeparation: [
          ...pattern.slice(pattern.length - 1, pattern.length)[0]
            .numsInSeparation,
          num,
        ],
        startIndex: pattern.slice(pattern.length - 1, pattern.length)[0]
          .startIndex,
      },
    ];
    generatePatternRecursively(slicedNums, separations2, pattern2, startIndex);
  };

  const originalAreaLength = separations.length;
  let patterns: NumSeparationPatterns[] = [];
  generatePatternRecursively(nums, separations);

  patterns = uniqWith(patterns, isEqual);

  return patterns;
};
