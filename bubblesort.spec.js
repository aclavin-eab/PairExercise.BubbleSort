beforeAll(function () {
  // spyOn(window, 'bubbleSort').and.callThrough();
  // spyBubbleSort = createSpy('bubbleSpy', bubbleSort).and.callThrough()
});

// it('how many times it swaps', function () {
//   bubbleSort(swap);
//   expect(bubbleSort().swap.calls.count()).toEqual(7);
// });

describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles non-empty array', function(){
    expect( bubbleSort([1,4,5,3,7,6,2]) ).toEqual( [1,2,3,4,5,6,7] );
  });
});


