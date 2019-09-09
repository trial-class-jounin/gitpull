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
*/

function arrayRemover (array, index, count) {
var angkaRemover = []
    
for (var i = 0; i < index; i++) {
angkaRemover.push(array[i])
}
  
for (var j = index+count; j < array.length; j++) {
angkaRemover.push(array[j])
}
	return angkaRemover
}
  
console.log(arrayRemover([1,2,3],0,2)); // [3]
console.log(arrayRemover([666,666,333,10,5,6],1,2)); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([1,2,3],0,3)) // []


// PSEUDOCODE
// MEMBUAT Function array remover dengan array, index, count
// MEMBUAT variabel
// RETURN array