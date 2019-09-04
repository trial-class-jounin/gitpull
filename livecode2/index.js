/*
======================
Highest Global Minimum
======================
Name : M. Julius
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

PSEUDOCODE
START
FUNCTION array of number
INPUT firstArr & secondArr index 0
LOOP firstArr & secondArr
FIRSTARR = banding1 
SECONDARR = banding2
IF banding1 preponderant banding2 return banding1
ELSE return banding2
FINISHED
*/
// reference https://repl.it/@bubulemon/LongFairMillipede
function highestGlobalMinimum(firstArr, secondArr) { // function and argument fisrstArr, secondArr
  // only write code here
  var banding1=firstArr[0]; // variabel banding1 sama dengan argument firstArr index ke 0
  for(var k=0; k<firstArr.length;k++){ // loop variabel k sama dengan 0, k lebih kecil dari argument panjang array firstArr, k ditambah 1
    if(firstArr[k]<banding1){ // jika firstArr index 0 lebih kecil dari var banding1
      banding1=firstArr[k]; // maka banding1 sama dengan firstArr index ke 0
    }
  }
  var banding2=secondArr[0]; // var banding2 sama dengan argument secondArr index ke 0
  for(var l=0; l<secondArr.length; l++){ // loop variabel l sama dengan 0, l lebih kecil dari panjang argument secondArr, maka l ditambah 1
    if(secondArr[l]<banding2){ // jika secondArr index ke 0, lebih kecil dari var banding2
      banding2=secondArr[l]; // maka banding2 sama dengan secondArr index0
    }
  }
  if(banding1>banding2){ // jika banding1 lebih besar dari banding2
    return banding1; // maka kembalikan value banding1
  }
  else{ // jika salah 
    return banding2; // maka kembalikan value banding2
  }
}
console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
