
/*
======================
Highest Global Minimum
======================
Name :_____________
[INSTRUCTIONS]
highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.
[RULE]
- WAJIB menuliskan PSEUDOCODE. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.
[]
[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])
firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]
nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8
karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/

function highestGlobalMinimum(firstArr, secondArr) {
    var firstArr1 = 0;
    var secondArr2 = 0;
    
    for (var i=0; i<=firstArr.length-1; i++){
      if (i===0){
        firstArr1 = firstArr[i];
      }else{
        if(firstArr[i]<firstArr1){
          firstArr1 = firstArr[i];
        }
      }
    }
    
    for (var j=0; j<=secondArr.length-1; j++){
      if (j===0){
        secondArr2 = secondArr[j];
      }else{
        if(secondArr[j]<secondArr2){
          secondArr2 = secondArr[j];
        }
      }
    }
    
    if(firstArr1>secondArr2){
      return firstArr1;
    }else{
      return secondArr2;
    }
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5



/*
========================
The Alphabetical Express
========================
Name :_____________
[INSTRUCTIONS]
formTrainSeating adalah sebuah function yang menerima satu parameter berupa string.
Ini adalah sebuah simulasi penempatan penumpang di dalam gerbong kereta.
Gerbong terdiri dari 5, yaitu gerbong A, gerbong B, C, D, dan E.
Function akan membentuk kereta dalam bentuk multidimension array.
Kereta direpresentasikan sebagai sebuah array yang berisi gerbong.
Gerbong adalah sebuah array yang berisi huruf tiap penumpang.
Setiap gerbong hanya boleh menampung penumpang dengan nama yang sesuai dengan nama gerbong.
Setiap penumpang direpresentasikan dengan satu huruf, antara A, B, C, D, atau E.
Bentuk Kereta:
[ GERBONG A, GERBONG B, GERBONG C, GERBONG D, GERBONG E ]
Bentuk Gerbong:
Contoh bentuk gerbong A
[ 'A', 'A' ]
Contoh bentuk gerbong B
[ 'B', 'B' ]
Kumpulan penumpang direpresentasikan dalam string.
Contoh:
input: 'ABCA'
maka, ada penumpang A, B, C, dan A.
Kita masukkan setiap penumpang ke masing-masing gerbong.
output: [ ['A', 'A'], ['B'], ['C'], [], []]
gerbong A berisi dua A,
gerbong B berisi satu B,
gerbong C berisi satu C,
gerbong D kosong,
dan gerbong E kosong.
Function akan me-return array kereta yang telah dibentuk.
[RULE]
Tidak perlu pseudocode!
Dilarang menggunakan sintaks .split()!
*/

function formTrainSeating(passengers) {
  var kereta = [[],[],[],[],[]];
  for (var i=0; i<=passengers.length-1; i++){
    if(passengers[i]==='A'){
      kereta[0].push(passengers[i]);
    }else if(passengers[i]==='B'){
      kereta[1].push(passengers[i]);
    }else if(passengers[i]==='C'){
      kereta[2].push(passengers[i]);
    }else if(passengers[i]==='D'){
      kereta[3].push(passengers[i]);
    }else if(passengers[i]==='E'){
      kereta[4].push(passengers[i]);
    }
  }
  return kereta;
  
}

console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]