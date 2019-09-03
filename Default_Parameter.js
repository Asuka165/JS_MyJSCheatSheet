// ES6 (For Modern Browser)
function test_es6(value = 1) {
    console.log(value);
}
test_es6(); // 1



// For IE 11 or below & Edge 12 or below Support
function test_old(value) {
    value = typeof value !== 'undefined' ? value : 1;
    console.log(value);
}
test_old(); // 1
