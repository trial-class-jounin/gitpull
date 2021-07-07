/*
======================
Highest Global Minimum
======================
Name : @arfibintang
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
  // only write code here
  var bandingMinimum1=firstArr[0];
  for(var a=0; a<firstArr.length;a++){
    if(firstArr[a]<bandingMinimum1){
      bandingMinimum1=firstArr[a];
    }
  }
  var bandingMinimum2=secondArr[1];
  for(var b=0; b<secondArr.length; b++){
    if(secondArr[b]<bandingMinimum2){
      bandingMinimum2=secondArr[b];
    }
  }
  if(bandingMinimum1>bandingMinimum2){
    return bandingMinimum1;
  }
  else{
    return bandingMinimum2;
  }
}
console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
/* ==================PSEUDOCODE highestGlobalMinimum=======================
1. CREATE function highestGlobalMinimum WITH parameter (firstArr, secondArr)
2. CREATE VARIABLE bandingMinimum1 VALUE firstArr[0]
3. SET FOR (var a = 0; a < firstArr.length;a++)
4. IF (firstArr[a] < bandingMinimum1)
5. THEN{bandingMinimum1=firstArr[a]}
6. CREATE VARIABLE bandingMinimum2 VALUE secondArr[1]
7. SET FOR (var b = 0; b < secondArr.length;b++)
8. IF (secondArr[b] < bandingMinimum2)
9. THEN{bandingMinimum2=secondArr[b]}
10. COMPUTE IF CONDITION bandingMinimum1 > bandingMinimum2
11. THEN RETURN bandingMinimum1
12. ELSE RETURN bandingMinimum2
13. console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
14. console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
15. console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
16. console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
*/