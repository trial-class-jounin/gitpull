function urutkanAbjad(str) {
  // you can only write your code here!
  var strSplit = str.split('');
  var strSort = strSplit.sort();
  var strJoin = strSort.join('');
  var strFinal = strJoin;
  return strFinal;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
