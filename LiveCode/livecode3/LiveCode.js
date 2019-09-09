/*
Array Remover
Array remover merupakan sebuah function yang berfungsi untuk menghapus value
dari sebuah array yang diberikan berdasarkan jumlah yang ingin dihapus dan index
mulai.

Array remover menerima tiga parameter yaitu array of number, index untuk mulai
menghapus dan jumlah data yang akan dihapus

Contoh:
Input:
  array: [ 666, 666, 333, 10, 5, 6]
  index: 1
  count: 2

Output:
  [ 666, 10, 5, 6 ]

RULES:
  - WAJIB MENYERTAKAN ALGORITMA / PSEUDOCODE
  - Dilarang menggunakan built-in function .map, .filter, .reduce!
*/
 
function arrayRemover (array, index, count) {
 
  var angkaHasil = []
    
    for (var i = 0 ; i < index; i++) {
        angkaHasil.push(array[i])
    }
    for (var j = index+count; j < array.length; j++) {
        angkaHasil.push(array[j])
    }
    return angkaHasil;
  }

console.log(arrayRemover([ 1, 2, 3] , 0 , 2 )); // [3]
 console.log(arrayRemover([ 666, 666, 333, 10, 5, 6] , 1 , 2 )); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([ 1, 2, 3], 0, 3)) // []



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

  var orbQ = 0;
  var orbW = 0;
  var orbE = 0;
  for(var i = 0; i < input.length; i++){
    if(input.length > 3 || input.length < 3 || input === ''){
      return 'Combination does not exist'
    }else if(input[i] === 'q'){
      orbQ += 1;
    }else if(input[i] === 'w'){
      orbW += 1;
    }else if(input[i] === 'e'){
      orbE += 1;
    }
  }

  for(var i = 0; i < spells.length; i++){
    if(orbQ === spells[i].q && orbW === spells[i].w && orbE === spells[i].e){
      return spells[i].spellName
    }
  }

  return 'Combination does not exist'
}
 

console.log(invokeSpell('qwe')); // Deafening Blast
console.log(invokeSpell('ewq')); // Deafening Blast
console.log(invokeSpell('qqq')); // Cold Snap
console.log(invokeSpell('wwq')); // Tornado
console.log(invokeSpell('wwe')); // Alacrity
console.log(invokeSpell('wew')); // Alacrity
console.log(invokeSpell('wqa')); // Combination does not exist




/*
  ================
  ASIAN GAMES GANJIL GENAP
  ================

  description: Sebuah fungsi yang akan mengembalikan berapa banyak jumlah pelanggaran lalu lintas
  yang terjadi saat asian games berlangsung. Pelanggaran akan terhitung apabila
  ada plat mobil yang melintas pada tanggal tertentu dengan nomor plat yang tidak
  sama dengan aturan ganjil genap
  
  rules:
  1. tidak boleh menggunakan built in function .filter(), .map(), .reduce()
  2. Function menerima parameter berupa tanggal dan data kendaraan yang melintas
  3. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range 
    tanggal tersebut )
  4. Contoh membaca nomor plat kendaraan adalah misal B 1234 HAHA, berarti yang dilihat cukup
  angka paling belakang dari 1234 berarti 4, berati nomor plat mobil ini termasuk genap


  examples:
  JIKA INPUT DATA KENDARAAN = [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }]
  DAN INPUT TANGGAL ADALAH = 18
  MAKA OUTPUTNYA ADALAH 1, yaitu hanya plat mobil Z 999 ERT karena merupakan jenis kendaraan
  mobil dan memiliki plat 'ganjil'    
*/

function ganjilGenapAsianGames ( date, data ) {
 if (date > 31 || date < 1){
      return 'invalid dates'
    }
    var platmbl = []
    for (var i = 0; i<data.length; i++){
      if(data[i].type === 'Mobil'){
        for( var j=data[i].plat.length-1 ; j>=0 ; j--){
          if(data[i].plat[j] === ' '){
            platmbl.push(data[i].plat[j-1])
            break
          }
        }
      }
    }
    var hasil = 0
    for( var i=0; i<platmbl.length; i++){
      if(date % 2 === 0 && platmbl[i] % 2 !== 0){
        hasil++
      } else if(date % 2 !== 0 && platmbl[i] % 2 === 0){
        hasil++
      }
    }
    return hasil
  }


console.log(ganjilGenapAsianGames(30, [{
  plat: 'B 1234 ABC',
  type: 'Mobil'
}, {
  plat: 'A 2457 HE',
  type: 'Motor'
}, {
  plat: 'AB 87 RFS',
  type: 'Motor'
}, {
  plat: 'Z 999 ERT',
  type: 'Mobil'
}])) // 1

console.log(ganjilGenapAsianGames(26, [{
  plat: 'A 24 HE',
  type: 'Mobil'
}, {
  plat: 'AB 871 RFS',
  type: 'Mobil'
}, {
  plat: 'Z 9992 ERT',
  type: 'Mobil'
}])) // 1

console.log(ganjilGenapAsianGames(1, [{
  plat: 'A 24 WE',
  type: 'Mobil'
}, {
  plat: 'AB 871 RFS',
  type: 'Mobil'
}, {
  plat: 'Z 9992 XOXO',
  type: 'Mobil'
}])) // 2

console.log(ganjilGenapAsianGames(1, [
  {
    plat: 'A 2431 HE',
    type: 'Motor'
  }, {
    plat: 'AB 87112 RFS',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Motor'
  }
])) // 0

console.log(ganjilGenapAsianGames(32, [{
  plat: 'X 123 HAHA',
  type: 'Mobil'
}])) // invalid dates

console.log(ganjilGenapAsianGames(0, [{
  plat: 'X 123 HAHA',
  type: 'Mobil'
}])) // invalid dates