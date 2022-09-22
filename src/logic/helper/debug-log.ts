import { isEqual } from "lodash";

export const debugLog = (nums: number[]) => {
  if (
    isEqual(nums, [
      /** ここにnum いれる */
    ])
  ) {
    return (message: any, detail?: any) => {
      console.log(message, detail);
    };
  }

  return (message: any, detail?: any) => {};
};
