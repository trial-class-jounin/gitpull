function cariMean(array) {
  var mean = 0;
  for (var i = 0; i < array.length; i++){
    mean += array[i];
    }
    // console.log(Math.round(mean/array.length));
    return Math.round(mean/array.length);
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
