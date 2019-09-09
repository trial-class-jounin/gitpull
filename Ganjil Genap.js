function ganjilGenapAsianGames ( date, data ) {
    // Your code here
    if (date > 31 || date < 1){
      return 'invalid dates'
    }
    var platmbl = []
    for (var i = 0; i<data.length; i++){
      if(data[i].type === 'Mobil'){
        for( var j=data[i].plat.length-1 ; j>=0 ; j--){
          if(data[i].plat[j] === ' '){
            // console.log(data[i].plat[j-1])
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