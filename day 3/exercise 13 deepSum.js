/* Problem
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array

Contoh array:

[
  [
    [1, 2, 3],
    [1, 2, 3]
  ],
  [
    [1, 2, 3],
    [1, 2],
    [1]
  ]
]
Maka akan menghasilkan output: 22

Level kedalaman array akan di-asumsikan selalu 3, [ [ [ ] ] ], 
jika yang diberikan adalah array kosong maka kembalikan nilai 'No number'
*/

function deepSum (arr) {
    // Inisialisasi variabel i sebagai counter looping
    var i=0;
    // inisialisasi variabel countArr sebagai penampung kalkulasi
    var countArr = 0;
    
    // kondisi apabila arr tidak memiliki nilai/ array kosong
    if (arr.length !== 0) {
        // iterasi tingkat i
        for (i; i<arr.length; i++) {
            var j=0;
            var lengthJ = arr[i].length;
            
            // iterasi tingkat j
            for (j; j<lengthJ; j++) {
                var k = 0;
                var lengthK = arr[i][j].length;
                
                // iterasi tingkat k
                for (k; k<lengthK; k++) {
                    countArr += arr[i][j][k];
                }
            }
        }
        
        // mengembalikan nilai countArr
        return countArr;
        
    } else { // kondisi apabila arr = array kosong
        return 'No number!';
    }
}


//TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number