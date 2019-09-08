function dataHandling (text) {
  for (var i = 0; i < text.length; i++){
    console.log('Nomor ID: ' + text [i][0]);
    console.log('Nama Lengkap: ' + text [i][1]);
    console.log('TTL: ' + text [i][2] + ' ' + text[i][3]);
    console.log('Hobi: ' + text [i][4]);
    console.log('');
  }
}
var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];
dataHandling(input);
