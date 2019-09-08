function balikString(b) {
    var a = '';
    for (var i = b.length - 1; i >= 0; i--) {
        a = a + b[i];
    }

    return a;
}
// TEST CASES
console.log(balikString("hello world!"));

