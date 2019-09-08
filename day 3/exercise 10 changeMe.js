function changeMe(arr) {
    for(i = 0; i < arr.length; i++){
      var obj = {};
      obj.firstName = arr[i][0];
      obj.lastName = arr[i][1];
      obj.gender = arr[i][2];
      if(arr[i][3] === undefined){
        obj.age = 'Invalid Birth Year';
      }else{
        obj.age = 2018-arr[i][3];
      }
      console.log(obj)
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""
