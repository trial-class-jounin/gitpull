//Soal 1
//Psuedocode
 //Sebuah Function highestGlobalMinimum memiliki 2 parameter [firstArr,secondArr]
// Dengan Variabel banding1 sama dengan firstArr dengan array[0]
//Pengulangan variabel k sama dengan 0, k kurang dari panjangnya variabel firstArr dan k incremen
//Jika firstArr dgn array[k] kurang dari var banding1 maka lakukan banding1 = firstArr[k]
//variabel banding2 = parameter secondArr[0]
//pengulangan variabel l=0; l kurang dari panjangnya array secondArr dan l incremen
//Jika secondArr[l] kurang dari banding2 maka lakukan banding2 = secondArr[l]
//Jika banding1 lebih besar banding2 maka kembalikan nilai banding1
//Dan lainnya kembalikan nilai banding2

function highestGlobalMinimum(firstArr, secondArr) {
  // only write code here
  
  var banding1=firstArr[0];
  for(var k=0; k<firstArr.length;k++){
    if(firstArr[k]<banding1){
      banding1=firstArr[k];
    }
  }
  var banding2=secondArr[0];
  for(var l=0; l<secondArr.length; l++){
    if(secondArr[l]<banding2){
      banding2=secondArr[l];
    }
  }
  if(banding1>banding2){
    return banding1;
  }
  else{
    return banding2;
  }
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45/
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5


//Soal 2

function formTrainSeating(penumpang) {
  var a = [];
  var b = [];
  var c = [];
  var d = [];
  var e = [];
  var hasil = [];
  for (i = 0; i < penumpang.length; i++) {
    if (penumpang[i] === 'A') {
      a.push('A');
    } else if (penumpang[i] === 'B') {
      b.push('B');
    } else if (penumpang[i] === 'C') {
      c.push('C');
    } else if (penumpang[i] === 'D') {
      d.push('D');
    } else {
      e.push('E');
    }
  }
  hasil.push(a, b, c, d, e);
  return hasil;
}

console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]