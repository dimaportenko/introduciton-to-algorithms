// insertionSort with read-only array
export const insertionSort = (array: ReadonlyArray<number>): Array<number> => {
  const sortedArray = [...array];
  for (let i = 1; i < sortedArray.length; i++) {
    const key = sortedArray[i];
    let j = i - 1;
    while (j >= 0 && sortedArray[j] > key) {
      sortedArray[j + 1] = sortedArray[j];
      j--;
    }
    sortedArray[j + 1] = key;
  }
  return sortedArray;
};
