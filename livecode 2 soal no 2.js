function highestGlobalMinimum(fadh, nilai) {
var samns=fadh[0];
var dwi= nilai[0];
var n , l = 0;
  for(n = 0; n < fadh.length; n++){
    if(fadh[n] < samns){
      samns = fadh[n];
    }
  } for(n = 0; l < nilai.length; l++){
    if(nilai[l] < dwi){
      dwi=nilai[l];
    }
  }
      if(samns > dwi){
      return samns;
  }
      else{
      return dwi;
  }
}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); 
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); 
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); 
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); 
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); 
