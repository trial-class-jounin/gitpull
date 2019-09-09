/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.
​
Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus
​
Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2
​
Output:
  [ 666, 10, 5, 6 ]
​
RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!

  PSEUDOCODE
  START
  FUNCTION parameter array, index, count
  LOOP count
  IF index 0, return array[i]
  ELSE return array[i+1]
  FINISHED

  References https://repl.it/@MuhammadRiza/LC-3-20-betel
*/
 
function arrayRemover (array, index, count) {
    // your code here
    var tmp = [];

    for (var i = 0 ; i < count ; i++){
      
      if (index === 0 ) {
        array[i] = 'deleted'
      } else {
        array[i+1] = 'deleted'
      }
    
    }
  return array
}


console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [3]
console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // []