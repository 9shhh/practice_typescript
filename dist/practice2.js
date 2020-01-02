"use strict";
// function
function sum(x, y) {
    return x + y;
}
function sumArr(nums) {
    return nums.reduce(function (acc, current) { return acc + current; }, 0);
}
function returnNothing() {
    console.log('nothing');
}
var total = sumArr([1, 2, 3, 4, 5]);
console.log(total);
