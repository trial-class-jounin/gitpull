function countProfit(shoppers) {
    let listBarang = [
      ['Sepatu Stacattu', 1500000, 10],
      ['Baju Zoro', 500000, 2],
      ['Sweater Uniklooh', 175000, 1],
    ];
    
    if(shoppers.length===0){
      return []
    }
    
    let penampung = [];
    for (var i = 0; i < listBarang.length; i++) {
      let tampung = {};
      let pembeli = [];
      let sisa = 0;
      for (var j = 0; j < shoppers.length; j++) {
        if (
          shoppers[j].product === listBarang[i][0] &&
          sisa + shoppers[j].amount <= listBarang[i][2]
        ) {
          sisa += shoppers[j].amount;
          pembeli.push(shoppers[j].name);
        }
      }
      tampung['products'] = listBarang[i][0];
      tampung['shoppers'] = pembeli;
      tampung['leftOver'] = listBarang[i][2] - sisa;
      tampung['totalProfit'] = listBarang[i][1] * sisa;
      penampung.push(tampung);
    }
    return penampung;
  }
  
  // TEST CASES
  console.log(countProfit([{
      name: 'Windi',
      product: 'Sepatu Stacattu',
      amount: 2
  }, {
      name: 'Vanessa',
      product: 'Sepatu Stacattu',
      amount: 3
  }, {
      name: 'Rani',
      product: 'Sweater Uniklooh',
      amount: 2
  }]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
