describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [4, 5]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    // test the merging algorithm
    expect(merge([[1, 2], [3, 4]])).toEqual([1, 2, 3, 4]);
    expect(merge([[2, 3], [1, 4]])).toEqual([1, 2, 3, 4]);
  });
});

describe('MergeSort function', function() {
  it('is able to sort two single-element arrays into one sorted array', function() {
    // test the merging algorithm
    expect(mergeSort([4, 2])).toEqual([2, 4]);
    expect(mergeSort([2, 3, 1])).toEqual([1, 2, 3]);
  });
});
