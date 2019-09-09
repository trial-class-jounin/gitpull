/*Array Remover
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



function arrayRemover (array, index, count) {
  // your code here
​console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [3]
console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // [] */
	// your code here

​function arrayRemover(array, index, count) {

  for(var i = 0; i < count; i++){
    if(index === 0){
      array[i] = "delete"
    }else{
      array[i+1] = "delete"
    }
  }
  return array
}

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); 
console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); 
console.log(arrayRemover([ 1, 2, 3], 0, 3)) 

// console.log('---------------------------');

/* 
untuk PSEUDOCODE

arrayRemover([ 1, 2, 3] , 0 , 2 )
arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 ) 
arrayRemover([ 1, 2, 3], 0, 3) 

Sebuah arrayRemover menerima 3 paramater (array, index, count)
untuk variable index = i 
var i sama dengan 0, kemudian i kecil dari count maka i++ 
jika index === 0, dan array kondisi i = delete
jika tidak array i+1 = delete

return array

maka hasilnya
// ['deleted', 'deleted', 3]
// [ 666, 'deleted', 'deleted', 10, 5, 6 ]
//['deleted', 'deleted', 'deleted']


*/

