import { insertionDecreaseSort, insertionSort } from "./chapter-2/sort/insertion-sort";

function main() {
  // unsorted array of numbers
  const unsortedArray = [5, 3, 1, 4, 6];
  const sortedArray = insertionSort(unsortedArray);
  const decreaseSortedArray = insertionDecreaseSort(unsortedArray);

  console.log("Unsorted array: ", unsortedArray);
  console.log("Sorted array: ", sortedArray);
  console.log("Decrease sorted array: ", decreaseSortedArray);
}

main();
