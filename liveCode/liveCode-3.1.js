

function arrayRemover(array, index, count) {
    // your code here
    var angkaHasil = []

    for (var i = 0; i < index; i++) {
        angkaHasil.push(array[i])
    }

    for (var j = index + count; j < array.length; j++) {
        angkaHasil.push(array[j])
    }
    // angka.splice(indexKet, jumlah)
    return angkaHasil
}

console.log(arrayRemover([1, 2, 3], 0, 2)); // [3]
console.log(arrayRemover([666, 666, 333, 10, 5, 6], 1, 2)); // [ 666, 10, 5, 6 ]
console.log(arrayRemover([1, 2, 3], 0, 3)) // []