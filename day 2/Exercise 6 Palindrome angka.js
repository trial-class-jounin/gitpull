function angkaPalindrome(num) {
  do {
    num++;
    var tampung = '';
    for (var b = String(num).length-1; b >= 0; b--){
    tampung += String(num)[b];
    }
  }
  
  //batas stop untuk looping
  while (tampung !== String(num));
  return parseInt(tampung);
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
