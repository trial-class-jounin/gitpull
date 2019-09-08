var array = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(array) {
//Roman Alamsyah Elsharawy
array.splice(1,1, "Roman Alamsyah Elsharawy");
//Provinsi Bandar Lampung
array.splice(2,1, "Provinsi Bandar Lampung");
//Pria
array.splice(4,0, "Pria");
//SMA Internasional Metro
array.splice(5,1, "SMA Internasional Metro");
console.log(array);
console.log('________________________________');
console.log(' ');
//Mei
var bulan = array[3].split("/");
var bulanHuruf = "";
switch (bulan[1]) {
  case "01" : bulanHuruf="Januari"; break;
  case "02" : bulanHuruf="Februari"; break;
  case "03" : bulanHuruf="Maret"; break;
  case "04" : bulanHuruf="April"; break;
  case "05" : bulanHuruf="Mei"; break;
  case "06" : bulanHuruf="Juni"; break;
  case "07" : bulanHuruf="Juli"; break;
  case "08" : bulanHuruf="Agustus"; break;
  case "09" : bulanHuruf="September"; break;
  case "10" : bulanHuruf="Oktober"; break;
  case "11" : bulanHuruf="November"; break;
  case "12" : bulanHuruf="Desember"; break;
  default:
}
console.log(bulanHuruf);
console.log('________________________________');
console.log(' ');
//[1989, 21, 05]
var simpanTanggal = [];
for (var i = 0; i < bulan.length; i++) {
  simpanTanggal.push(parseInt(bulan[i]));
}
simpanTanggal.sort(function(value1,value2) {return value1 < value2});
var simpanHasil = simpanTanggal[2].toString();
var tambah0 = '';
if (simpanHasil < 10) {
  tambah0 += 0;
}
var a = tambah0 + simpanHasil; 
simpanTanggal.splice (2,1, a);
console.log(simpanTanggal);
console.log('________________________________');
console.log(' ');

// 21-05-1989
console.log(bulan.join('-'));
console.log('________________________________');
console.log(' ');

//Roman Alamsyah
console.log(array[1].split(' ').slice(0,2).join(' '));
console.log('________________________________');
console.log(' ');

}


dataHandling2(array);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
