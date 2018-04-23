function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  const middleOfArr = Math.floor(wholeArray.length / 2)
  const firstHalf = wholeArray.slice(0, middleOfArr)
  const secondHalf = wholeArray.slice(middleOfArr)
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf){
  let sortedArr = [];
  let arrLength;
  // if (firstHalf.length >= secondHalf.length){
  //   arrLength = firstHalf.length;
  // } else {
  //   arrLength = secondHalf.length;
  // }
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
