/* start
    start   
    add and save firstArrSort
    add and save function highestGlobalMinimum parameter firstArr and secondArr
    add firstArrSort in function value1 and value2
    return value1 > value2
    add secondArrSort in function value1 and value2
    return value1 > value2

    add minFirstArr = []
    add minsecondArr = []

    tambahkan i sama dengan NOL
    lalu i kurang dari panjang parameter 1
    maka i tambah 1
    kembalikan minFirstArr.dorong array dari i

    tambahkan j sama dengan NOL
    lalu j kurang dari panjang parameter 1
    maka j tambah 1
    kembalikan minSecondArr.dorong array dari i

    jika minFirstArr kurang dari minSecondArr
    kembalikan nilai minFirstArr
    lalu
    kembalikan nilai minSecondArr




*/
function highestGlobalMinimum(firstArr, secondArr) {
    // only write code here
    var firstArrSort = firstArr.sort(function (value1, value2) {
        return value1 > value2
    });
    var secondArrSort = secondArr.sort(function (value1, value2) {
        return value1 > value2
    });

    var minFirstArr = [];
    var minSecondArr = [];

    for (var i = 0; i < firstArr.length - 1; i++) {
        if (firstArr[i] <= firstArr[i + 1]) {
            minFirstArr.push(firstArr[i]);
            break;
        }
    }

    for (var j = 0; j < secondArr.length - 1; j++) {
        if (secondArr[j] <= secondArr[j + 1]) {
            minSecondArr.push(secondArr[j]);
            break;
        }
    }
    if (minFirstArr < minSecondArr) {
        return minFirstArr;
    } else {
        return minSecondArr;
    }
}​
console.log(highestGlobalMinimum([1, 1, 1], [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12], [33, 88, 99, 11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2], [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2], [6, 5, 13, 23])); // 5