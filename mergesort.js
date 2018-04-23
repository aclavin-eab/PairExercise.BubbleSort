function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  const middleOfArr = Math.floor(wholeArray.length / 2)
  const firstHalf = wholeArray.slice(0, middleOfArr)
  const secondHalf = wholeArray.slice(middleOfArr)
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf){
  let sortedArr = [];

  while (firstHalf[0] || secondHalf[0]){
      if ((!firstHalf[0] || firstHalf[0] > secondHalf[0]) && secondHalf[0]){
        sortedArr.push(secondHalf[0]);
        secondHalf.shift();
      } else {
        sortedArr.push(firstHalf[0]);
        firstHalf.shift();
      }
  }
  return sortedArr;
}

function mergeSort(array){
  let sortedArr = [];

  if (array.length === 1){
    return array;
  }

  if (array.length === 2){
    return merge(array[0], array[1]);
  } else {
    return merge(split(array));
  }

  return sortedArr;
}
