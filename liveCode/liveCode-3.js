/**
=======================================
Array of Objects  Mastery: Invoke Spell
=======================================
[INSTRUKSI]
Kael the Invoker memiliki 3 orb yaitu Quas (q), Wex (w), dan Exort (e). Jika orb ini
dikombinasikan maka akan menghasilkan salah satu dari 10 spell yang berbeda!
Diberikan function invokeSpell yang menerima parameter input, dan spell apa saja yang
dimiliki oleh Invoker sudah disediakan dalam bentuk array.
Function akan mengembalikan nama spell dari input yang dimasukkan oleh user, ex:
- input = 'eeq', output = 'Forge Spirit' (karena q = 1, w = 0, e = 2)
- input = 'www', output = 'EMP' (karena q = 0, w = 3, e = 0)
- input = 'wqz', output = 'Combination does not exist' (karena kombinasi tidak ditemukan)
NOTE:
Meskipun input terbalik atau tidak urut (ex: 'qwe', 'ewq', 'weq'), maka akan tetap mengeluarkan
spell yang sama!
RULE:
- tidak boleh menggunakan .map, .filter dan .reduce!
*/
​

function invokeSpell (input) {
  const spells = [
      { q: 3, w: 0, e: 0, spellName: 'Cold Snap' },
      { q: 0, w: 2, e: 1, spellName: 'Alacrity' },
      { q: 1, w: 0, e: 2, spellName: 'Forge Spirit' },
      { q: 0, w: 0, e: 3, spellName: 'Sunstrike' },
      { q: 1, w: 2, e: 0, spellName: 'Tornado' },
      { q: 0, w: 3, e: 0, spellName: 'EMP' },
      { q: 0, w: 1, e: 2, spellName: 'Chaos Meteor' },
      { q: 1, w: 1, e: 1, spellName: 'Deafening Blast' },
      { q: 2, w: 0, e: 1, spellName: 'Ice Wall' },
      { q: 2, w: 1, e: 0, spellName: 'Ghost Walk' },
    ];
  
    var countq = 0;
    var countw = 0;
    var counte = 0;
  for(var x = 0; x < input.length; x++){
    if(input[x] == 'q'){
      countq++;
    } else if (input[x] == 'w'){
      countw++;
    } 
    
    // lalu jika input[x] sama dengan e maka,
    else if (input[x] == 'e') {

      // counte +1
      counte++;
    }
  }

  if(countq == 3 && countw == 0 && counte ==0){
    return spells[0].spellName;

  } else if(countq == 0 && countw == 2 && counte == 1){
    return spells[1].spellName;

  } else if(countq == 1 && countw == 0 && counte == 2){
    return spells[2].spellName;

  } else if(countq == 0 && countw == 0 && counte == 3){
    return spells[3].spellName;

  } else if(countq == 1 && countw == 2 && counte == 0){
    return spells[4].spellName;

  } else if(countq == 0 && countw == 3 && counte == 0){
    return spells[5].spellName;

  } else if(countq == 0 && countw == 1 && counte == 2){
    return spells[6].spellName;

  } else if(countq == 1 && countw == 1 && counte == 1){
    return spells[7].spellName;

  } else if (countq == 2 && countw == 0 && counte == 1){
    return spells[8].spellName;

  } else if(countq == 2 && countw == 1 && counte == 0){
    return spells[9].spellName;
    
  } else {
    return 'Combination does not exist';
  }

}
console.log(invokeSpell('qwe')); // Deafening Blast
console.log(invokeSpell('ewq')); // Deafening Blast
console.log(invokeSpell('qqq')); // Cold Snap
console.log(invokeSpell('wwq')); // Tornado
console.log(invokeSpell('wwe')); // Alacrity
console.log(invokeSpell('wew')); // Alacrity
console.log(invokeSpell('wqa')); // Combination does not exist