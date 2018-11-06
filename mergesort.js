function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  if (wholeArray.length < 2) return wholeArray;
  const midPoint = Math.ceil(wholeArray.length / 2);
  firstHalf = wholeArray.slice(0, midPoint);
  secondHalf = wholeArray.slice(midPoint);

  return [firstHalf, secondHalf];
}

function merge(arrayToMerge) {
  let leftPoint = 0;
  let rightPoint = 0;
  let newArr = [];
  const leftArr = arrayToMerge[0];
  if (!arrayToMerge[1]) return arrayToMerge[0];
  const rightArr = arrayToMerge[1];
  while (leftPoint < leftArr.length && rightPoint < rightArr.length) {
    if (leftArr[leftPoint] < rightArr[rightPoint]) {
      newArr.push(leftArr[leftPoint]);
      leftPoint++;
    } else {
      newArr.push(rightArr[rightPoint]);
      rightPoint++;
    }
  }

  if (leftPoint >= leftArr.length) {
    newArr = newArr.concat(rightArr.slice(rightPoint));
  } else {
    newArr = newArr.concat(leftArr.slice(leftPoint));
  }

  return newArr;
}

function mergeSort(array) {
  /* your code here */
  const len = array.length;
  if (len < 2) return array; // array is of length 1 and sorted
  array = split(array);
  let left = array[0];
  let right = [];
  let mergedArray = [];
  if (array[1].length <= 0) return left;
  right = array[1];
  mergedArray = merge([mergeSort(left), mergeSort(right)]);

  return mergedArray;
}

mergeSort([2, 3, 1, 5]);
