function palindrome(kata) {
  var hasilKata = '';
  for (var a = kata.length-1; a >= 0; a--){
    hasilKata += kata[a];
  }
  //console.log(hasilKata);
   return hasilKata === kata;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
