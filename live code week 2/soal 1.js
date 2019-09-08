function highestGlobalMinimum(firstArr, secondArr) {
    var abc1 = 0;
    var abc2 = 0;
    var min1 = [];
    var min2 = [];
    var hasil = 0;
    for (var i = 0; i < firstArr.length; i++){
      if(firstArr[i] < firstArr[i+1]) {
        abc1 = abc1 + firstArr[i];
      }
      min1.push(abc1);
    }
    for(var j = 0; j < secondArr.length; j++) {
      if(secondArr[j] < secondArr[j+1]) {
        abc2= abc2 + secondArr[j];
      }
      min2.push(abc2);
    }
    if (min2[0] > min1[0]) {
      hasil = min2[0];
    }
    if(min1[0] > min2[0]) {
      hasil = min1[0];
    }
    return hasil;
  }
  
  console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
  console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
  console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
  console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
  console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5
