//psudocode
/*
  FUNCTION arrayRemover dengan parameter array, index, count
  LOOP/Pengulanan count
  IF/Jika index 0, return/Mengembalikan array[i]
  ELSE/Selain itu return/Mengembalikan array[i+1]
*/

function arrayRemover (array, index, count) {
  var tmp = [];

  for (var i = 0 ; i < count ; i++){
    
    if (index === 0 ) {
      array[i] = ''
    } else {
      array[i+1] = ''
    }
  
  }
return array
}

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); 
console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); 
console.log(arrayRemover([ 1, 2, 3], 0, 3));