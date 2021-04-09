function highestGlobalMinimum(firstArr, secondArr) {

  // only write code here

    //cari highest firstArr
var minArr1=99999999999999999999;
for (var i=0;i<firstArr.length;i++){
  if(firstArr[i]<minArr1){
    minArr1=firstArr[i];
  }
}

var minArr2=999999999999999999999;
for(var j=0;j<firstArr.length;j++){
if(secondArr[j]<minArr2){
  minArr2=secondArr[j];
}
}

if(minArr1>minArr2){
  return minArr1;
}
else{
  return minArr2;
}
}

 console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
 console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
 console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
 console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5

//  pseudocode:
//  DEFINE minArr1 AS VAR TO MAXIMUM NUMBER
//  sort all firstArr using FOR
//  IF firstArr[i] less than minArr1
//  minArr1 EQUALS firstArr1[i]

//  DEFINE minArr2 AS VAR TO MAXIMUM NUMBER
//  sort all secondArr using FOR
//  IF secondArr[j] less than minArr2
//  minArr2 EQUALS secondArr1[j]

// IF minArr1 less than minArr2
// RETURN minArr1
// ELSE 
// RETURN minArr2