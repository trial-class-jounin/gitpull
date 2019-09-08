function targetTerdekat(arr) {
  var lookingO = arr.indexOf('o');
  //console.log('Nilai O : ' +lookingO);
  var isJarak = 0; //lookingO-i
  var realJarak = arr.length; //return hasil
  
  for (var i = 0; i < arr.length; i++){
    if (arr[i] === 'x') {
      isJarak = Math.abs(lookingO-i);
        if (isJarak < realJarak) {
        realJarak = isJarak;
      }
    }
  }
  if (arr.indexOf('x') ===-1) {
    return 0;
  }
  //console.log('Real Jarak : ' +realJarak);
  return realJarak;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
