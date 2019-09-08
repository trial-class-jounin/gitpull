function groupAnimals(animals) {
 //console.log('Input : ' +animals);
 //buat group animals dengan huruf awal
 var animalsGroups = [];
 for (var i = 0; i < animals.length; i++){
   animalsGroups.push([]); //push syntax [[]. [], ---]
   var indeks = 0;  // biar bernilai indeks [[0][0], [1][1]---]
   for (var j = 0; j < animals.length; j++) {  
   if (animals[i][0] === animals[j][0]) { // compare huruf awal dgn looping ke dua
    animalsGroups[i][indeks] = animals[j]; 
    indeks ++;
   }
  }
  //indeks = 0;
 }
 //console.log(animalsGroups);
 
 //sort untuk nilai array
 var tampung=0;
 for (var i = 0; i < animalsGroups.length; i++){
   for(var j = 0; j < animalsGroups.length-i-1; j++){
     if(animalsGroups[j] > animalsGroups[j+1]){
       tampung = animalsGroups[j];
       animalsGroups[j] = animalsGroups[j+1];
       animalsGroups[j+1] = tampung;
     }
   }
 }
 //console.log(animalsGroups);
 
 //buat modus utk menghilangkan duplicate nilai array
 for (var i = 0; i < animalsGroups.length-1; i++){
   if (animalsGroups[i][0] === animalsGroups[i+1][0]){
     animalsGroups.splice(i,1);
   }
 }
 //console.log(animalsGroups);
 return animalsGroups;
  
}
 
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
