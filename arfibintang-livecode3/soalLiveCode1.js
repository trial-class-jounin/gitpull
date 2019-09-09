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
//               ===PSEUDOCODE ARRAYREMOVER===
/*
1. CREATE FUNCTION arrayRemover with parameter (array, index, count)
2. CREATE VARIABLE tampungHasil data type  array
3. COMPUTE iteration FOR (let x = 0; x < index; x++) 
4. LOOP tampungHasil.push(array[x])
5. COMPUTE iteration FOR (let y = 0; y < index; y++) 
6. LOOP tampungHasil.push(array[y])
7. RETURN tampungHasil
8. CONSOLE (arrayRemover([ 1, 2, 3] , 0 , 2 ))
9. CONSOLE (arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 ))
10.CONSOLE (arrayRemover([ 1, 2, 3], 0, 3))
*/
function arrayRemover (array, index, count) {
    // your code here
    var tampungHasil = []
    
    for (let x = 0; x < index; x++) {
        tampungHasil.push(array[x])
    }
  
    for (let y = index+count; y < array.length; y++) {
        tampungHasil.push(array[y])
    }
  
    return tampungHasil
   
}
  console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )) // [3]
  console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )) // [ 666, 10, 5, 6 ]
  console.log(arrayRemover([ 1, 2, 3], 0, 3)) // []