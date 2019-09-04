function highestGlobalMinimum(firstArr, secondArr) {

//cari nilai tertinggi firstArr
var banding1=firstArr[0];
  for(var k=0; k<firstArr.length;k++){
    if(firstArr[k]<banding1){
      banding1=firstArr[k];
    }
  }

  //cari nilai tertinggi secondArr
  var banding2=secondArr[0];
  for(var l=0; l<secondArr.length; l++){
    if(secondArr[l]<banding2){
      banding2=secondArr[l];
    }
  }
  if(banding1>banding2){
    return banding1;
  }else{
    return banding2;
  }
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45/
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5