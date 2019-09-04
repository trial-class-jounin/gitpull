/*
========================
The Alphabetical Express
========================
Name : M. Julius
[INSTRUCTIONS]
formTrainSeating adalah sebuah function yang menerima satu parameter berupa string.
Ini adalah sebuah simulasi penempatan penumpang di dalam gerbong kereta.
Gerbong terdiri dari 5, yaitu gerbong A, gerbong B, C, D, dan E.
Function akan membentuk kereta dalam bentuk multidimension array.
Kereta direpresentasikan sebagai sebuah array yang berisi gerbong.
Gerbong adalah sebuah array yang berisi huruf tiap penumpang.
Setiap gerbong hanya boleh menampung penumpang dengan nama yang sesuai dengan nama gerbong.
Setiap penumpang direpresentasikan dengan satu huruf, antara A, B, C, D, atau E.
Bentuk Kereta:
[ GERBONG A, GERBONG B, GERBONG C, GERBONG D, GERBONG E ]
Bentuk Gerbong:
Contoh bentuk gerbong A
[ 'A', 'A' ]
Contoh bentuk gerbong B
[ 'B', 'B' ]
Kumpulan penumpang direpresentasikan dalam string.
Contoh:
input: 'ABCA'
maka, ada penumpang A, B, C, dan A.
Kita masukkan setiap penumpang ke masing-masing gerbong.
output: [ ['A', 'A'], ['B'], ['C'], [], []]
gerbong A berisi dua A,
gerbong B berisi satu B,
gerbong C berisi satu C,
gerbong D kosong,
dan gerbong E kosong.
Function akan me-return array kereta yang telah dibentuk.
[RULE]
Tidak perlu pseudocode!
Dilarang menggunakan sintaks .split()!
*/
// reference https://repl.it/@Agrha/Latihan-Live-Code
function formTrainSeating(passengers) {
  var a = [];
  var b = [];
  var c = [];
  var d = [];
  var e = [];
  var z = [];
  for (i = 0;i<passengers.length;i++){ // LOOP var i sama dengan 0, i lebih kecil dari panjang argument passengers, i ditambah satu
    if (passengers[i] === 'A'){ // jika argument passengers index 0 sama dengan 'A'
      a.push('A'); // maka variabel a array di tambah 'A'
    }
    else if (passengers[i] === 'B'){ // jika argument passengers index 0 sama dengan 'B'
      b.push('B'); // maka variabel b array di tambah 'B'
    }
    else if (passengers[i] === 'C'){ // jika argument passengers index 0 sama dengan 'C'
      c.push('C'); // maka variabel c array di tambah 'C'
    }
    else if ( passengers[i] === 'D'){ // jika argument passengers index 0 sama dengan 'B'
      d.push('D'); // maka variabel d array di tambah 'D'
    }
    else { // jika salah
      e.push('E'); // maka variabel e array ditambah 'E'
    }
    }
    z.push(a,b,c,d,e); // variabel z array ditambah variabel a,b,c,d,e array
    return z // kembalikan value z
  }

console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]
