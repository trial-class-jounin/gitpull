function highestGlobalMinimum(firstArr, secondArr){
  var nilaiTerkecil1 = firstArr[0]
  for (var i = 0 ; i < firstArr.length ; i+=1){
    if (nilaiTerkecil1 > firstArr[i]){
      nilaiTerkecil = firstArr[i]
    } 
  }

  var nilaiTerkecil2 = secondArr[0]
  for (var j = 0 ; j < secondArr.length ; j+=1){
    if (nilaiTerkecil2 > secondArr[j]){
      nilaiTerkecil2 = secondArr[j]
    } 
  }

  if (nilaiTerkecil1 > nilaiTerkecil2){
    return nilaiTerkecil1
  }else{
    return nilaiTerkecil2
  } 
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5

// Pseudocode
  // DEFINE nilaiTerkecil1 equals firstArr
  // FOR firstArr
  //   IF nilaiTerkecil1 smaller firstArr
  //     nilaiTerkecil1 equals firstArr
  //   ENDIF
  // ENDFOR

  // DEFINE nilaiTerkecil2 equals secondArr
  // FOR secondArr
  //   IF nilaiTerkecil2 greater than secondArr
  //     nilaiTerkecil2 equals secondArr
  //   ENDIF 
  // ENDFOR

  // IF nilaiTerkecil1 greater than nilaiTerkecil2
  //   RETURN nilaiTerkecil1
  // ELSE
  //   RETURN nilaiTerkecil2
  // END IF