import { expect, test, describe } from "bun:test";
import { addBinaryIntegers } from "./exercises-2.1-5";

describe("Add binary integers", () => {
  test("add 1011 and 1010, 10 + 11 = 21", () => {
    const sum = addBinaryIntegers([1, 1, 0, 1], [0, 1, 0, 1]);
    expect(sum).toEqual([1, 0, 1, 0, 1]);
  });

  test("different lengths", () => {
    expect(() => addBinaryIntegers([1, 1, 0, 1], [0, 1, 0])).toThrowError(
      "Binary integers must have the same length",
    );
  });
});
