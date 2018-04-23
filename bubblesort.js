function swap(arr) {
  // let sortedState = false;
  if (arr.length){
    for (let i = 0; i < arr.length; i+=2){
      if (arr[i] > arr[i+1]){
        sortedState = false;
        arr[i] = arr[i+1];
        arr[i+1] = arr[i];
      }
    }
  } else {
    sortedState = true;
  }
  return arr;
}

//arr is sorted === arr.sort()
function bubbleSort(arr) {
  let sortedState = false;
  //base case
   if(sortedState === true){
    return arr;
  } else{//recursive case
    return swap(arr);
  }
  return arr
}

console.log(bubbleSort([2,3,6,7,4,9,8]));


