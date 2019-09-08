function checkAB(num) {
    // you can only write your code here!
    var jarakA = 0;
    var jarakB = 0;
    var indexA = [];
      for(var i = 0; i < num.length; i ++) {
        if(num[i] === 'a') { //posisi a
          jarakA = i;
          indexA.push(jarakA);
        }
        else if (num[i] === 'b') {
          jarakB = i;
        }
        var jarakAB = 0;
        var jarakFinal = [];
        for(j = 0; j < indexA.length; j++) {
          //console.log(indexA[2]);
          jarakAB = Math.abs(jarakB-indexA[j]);
          //console.log(jarakAB);
          jarakFinal.push(jarakAB);
          jarakFinal.sort(function(a, b){return b-a});
        }
      }
      return jarakFinal[0] === 4;
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false
