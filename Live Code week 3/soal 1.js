/* Pseudocode
1. Start
2. Input array, index, count
3. make function array, index, count
4. i = 0; i < count
5. if index === 0 then array[i] = ""
6. else array [i+1] = ""
7. return array
8. finish
*/

function arrayRemover(array, index, count) {
	// your code here
  for(var i = 0; i < count; i++){
    if(index === 0){
      array[i] = ""
    }else{
      array[i+1] = ""
    }
  }
  return array
}

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); 
// ['', '', 3]
console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); 
// [ 666, '', '', 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // 
//['', '', '']
