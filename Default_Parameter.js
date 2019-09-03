// ES6 (For Modern Browser)
function test(value = 1) {
    console.log(value);
}
test(); // 1



// For IE 11 or below & Edge 12 or below Support
function test(value) {
    value = typeof value !== 'undefined' ? value : 1;
    console.log(value);
}
test(); // 1
