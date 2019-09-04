/*
======================
Highest Global Minimum
======================

Name : RUBEN FILEMON

[INSTRUCTIONS]

highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.


[CONSTRAINTS]
Hanya boleh menggunakan sintaks for/while dan if else untuk pemecahan masalah.
Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.


[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])

firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]

nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8

karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/

/** Pseudecode
    1. tentukan variabel 'argumen1' bernilai 0
    2. tentukan variabel 'argumen2' bernilai 0
    3. buat kondisi FOR pertambahan 1 dengan deklarasi nilai 0 dan index mengambil dari parameter firstArr - 1
        jalankan kondisi jika IF = 0  THEN
            perintah 'argumen1' = variable 'firstArr' dengan index 0
            ENDIF
        jalankan ELSE dengan perintah IF variable di 'firstArr' pada index saat ini lebih kecil dari pada 'argumen1', THEN:
        tentukan argumen1 = variabel firstArr dengan index dari variabel i
    4. buat kondisi FOR pertambahan 1 dengan deklarasi nilai 0 dan index mengambil dari parameter secondArr - 1
        jalankan kondisi jika IF = 0  THEN
            perintah 'argumen2' = variable 'secondArr' dengan index 0
            ENDIF
        jalankan ELSE dengan perintah IF variable di 'secondArr' pada index saat ini lebih kecil dari pada 'argumen2', THEN:
        tentukan argumen2 = variabel secondArr dengan index dari variabel j
    5.  buat kondisi IF pada 
                    argumen1 besar argumen2 return nilai argumen1
        buat kondisi ELSE jika kondisi pertama tidak terpenuhi dengan isi
                    return nilai argumen2

*/

function highestGlobalMinimum(firstArr, secondArr) {
  var argumen1 = 0;
  var argumen2 = 0;

  for (var i = 0; i <= firstArr.length - 1; i++) {
    if (i === 0) {
      argumen1 = firstArr[i];
    } else {
      if (firstArr[i] < argumen1) {
        argumen1 = firstArr[i];
      }
    }
  }

  for (var j = 0; j <= secondArr.length - 1; j++) {
    if (j === 0) {
      argumen2 = secondArr[j];
    } else {
      if (secondArr[j] < argumen2) {
        argumen2 = secondArr[j];
      }
    }
  }

  if (argumen1 > argumen2) {
    return argumen1;
  } else {
    return argumen2;
  }
}

// console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
// console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
// console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
// console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
//  console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5
