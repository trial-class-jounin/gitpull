function formTrainSeating(passengers) {
    // only write code here
    var arrayA = [];
    var arrayB = [];
    var arrayC = [];
    var arrayD = [];
    var arrayE = [];
    var arrayTotal = [];
    
    var abc = passengers.match(/\S/g);
    var sort = abc.sort();
    
    for (var i = 0; i < passengers.length; i++) {
      if (passengers[i] === 'A') {
        arrayA.push('A');
      } else if (passengers[i] === 'B') {
        arrayB.push('B');
      } else if (passengers[i] === 'C') {
        arrayC.push('C');
      } else if (passengers[i] === 'D') {
        arrayD.push('D');
      } else if (passengers[i] === 'E') {
        arrayE.push('E');
      }
    }
    
    arrayTotal.push(arrayA);
    arrayTotal.push(arrayB);
    arrayTotal.push(arrayC);
    arrayTotal.push(arrayD);
    arrayTotal.push(arrayE);
    
    console.log(arrayTotal);
    // return split;
  }
  
  console.log(formTrainSeating('ABDCCCE')); // [['A'], ['B'], ['C', 'C', 'C'], ['D'], ['E']]
  console.log(formTrainSeating('ABC')); // [['A'], ['B'], ['C'], [], []]
  console.log(formTrainSeating('E')); // [[], [], [], [], ['E']]
  console.log(formTrainSeating('EAB')); // [['A'], ['B'], [], [], ['E']]
  console.log(formTrainSeating('BBABB')); // [['A'], ['B', 'B', 'B', 'B'], [], [], []]
