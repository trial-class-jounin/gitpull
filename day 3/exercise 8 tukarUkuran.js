function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    var karakterPisah = kalimat.split('');
    //console.log(karakterPisah);
    var karakterBaru;
    var kalimatBaru = [];
    var kalimatFinal = [];
    for(var i = 0; i < karakterPisah.length; i++) {
      if(karakterPisah[i] === karakterPisah[i].toUpperCase()) {
        karakterBaru = karakterPisah[i].toLowerCase();
        //console.log(karakterBaru);
      }
      else {
        karakterBaru = karakterPisah[i].toUpperCase();
        //console.log(karakterBaru);
      }
      kalimatBaru.push(karakterBaru);
    }
    //console.log(kalimatBaru);
    kalimatFinal = kalimatBaru.join('');
    return kalimatFinal;
  }
  
  // TEST CASES
  console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
  console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
  console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
  console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
  console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
  
