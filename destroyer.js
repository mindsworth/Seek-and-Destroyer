function destroyer(arr, aug1, aug2, aug3) {
  // Remove all the values
  var g;
  var newArr = [];
  
//   FOR LOOP HERE
  for(var i = 0; i < arr.length; i++) {
    g = arr[i];
//   CONDITIONAL STATEMENT HERE  
    if(g !== aug1 && g !== aug2 && g !== aug3){
      newArr.push(g);
    }
    
    
  }
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
