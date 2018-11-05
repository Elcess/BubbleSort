function swap(num1, num2) {
  let temp = num1;
  num1 = num2;
  num2 = temp;
  return [num1, num2];
}

function bubbleSort(array, comparator = (a, b) => Math.sign(a - b)) {
  if (array.length === 0) return [];
  if (array.length === 1) return array;

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (comparator(array[i], array[j]) > 0) {
        [array[i], array[j]] = swap(array[i], array[j]);
      }
    }
  }

  return array;
}
