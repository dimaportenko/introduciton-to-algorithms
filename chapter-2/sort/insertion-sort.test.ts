import { expect, test, describe } from "bun:test";
import { insertionSort } from "./insertion-sort";

describe("insertionSort", () => {
  test("input is unchanged and output sorted", () => {
    const unsortedArray = [5, 3, 1, 4, 6];
    const sortedArray = insertionSort(unsortedArray);

    expect(sortedArray).toEqual([1, 3, 4, 5, 6]);
    expect(unsortedArray).toEqual([5, 3, 1, 4, 6]);
  });

  test("with negative numbers", () => {
    const unsortedArray = [5, -3, 1, -4, 6];
    const sortedArray = insertionSort(unsortedArray);
    expect(sortedArray).toEqual([-4, -3, 1, 5, 6]);
  });

  test("with duplicate numbers", () => {
    const unsortedArray = [5, 3, 1, 4, 6, 5];
    const sortedArray = insertionSort(unsortedArray);
    expect(sortedArray).toEqual([1, 3, 4, 5, 5, 6]);
  });

  test("with empty array", () => {
    const unsortedArray: Array<number> = [];
    const sortedArray = insertionSort(unsortedArray);
    expect(sortedArray).toEqual([]);
  });
});
