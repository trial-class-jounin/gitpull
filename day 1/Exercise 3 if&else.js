var nama = 'Zero'
var peran ='Penyihir'
if((nama == false) && (peran == false)) {
  console.log('Nama harus diisi!')
}
else if((nama == true) || (peran == false)) {
  console.log('halo ', nama, 'Pilih peranmu untuk memulai game!' )
}

else if((nama !== true) && (peran !== true)) {
  console.log("Selamat datang di Dunia Proxytia, ", nama,
"Halo ", peran, nama, " kamu dapat menyerang dengan senjatamu!")
}

else if((nama !== true) || (peran !== true)) {
  console.log("Selamat datang di Dunia Proxytia, ", nama,
"Halo ",peran , nama, "kamu akan membantu temanmu yang terluka.")
}

else if((nama !== true) && (peran == false)){
  "Selamat datang di Dunia Proxytia,",nama,
"Halo", peran, nama, ", ciptakan keajaiban yang membantu kemenanganmu!"
}
