describe('Bubble Sort', function() {
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });
  it('calls "swap"', function() {
    bubbleSort([3, 2, 1]);
    expect(swap.calls.count()).toEqual(3);
  });
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles a single element array', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('handles multiple-element arrays', function() {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it('takes a comparator function', function() {
    expect(bubbleSort([1, 3, 2], (a, b) => Math.sign(b - a))).toEqual([
      3,
      2,
      1,
    ]);
  });
});
