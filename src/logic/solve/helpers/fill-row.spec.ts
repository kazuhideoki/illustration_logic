import { describe, expect } from "@jest/globals";
import { filledNumsRowForm, numsRowFrom } from "./fill-row";

describe("fillRow", () => {
  it("numsRowFrom", () => {
    const r = numsRowFrom([1]);
    expect(r).toStrictEqual([true]);

    const r2 = numsRowFrom([1, 2]);
    expect(r2).toStrictEqual([true, false, true, true]);

    const r3 = numsRowFrom([1, 2, 3]);
    expect(r3).toStrictEqual([
      true,
      false,
      true,
      true,
      false,
      true,
      true,
      true,
    ]);
  });

  it("filledNumsRowForm", () => {
    const r = filledNumsRowForm([true, false, true, true], 4);
    expect(r).toStrictEqual([true, false, true, true]);

    const r2 = filledNumsRowForm([true, false, true, true], 5);
    expect(r2).toStrictEqual([true, false, true, true, null]);

    const r3 = filledNumsRowForm([true, false, true, false, true], 10);
    expect(r3).toStrictEqual([
      true,
      false,
      true,
      false,
      true,
      null,
      null,
      null,
      null,
      null,
    ]);
  });
});
