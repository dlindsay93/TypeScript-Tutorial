var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(5, 2);
document.write("5 + 2 = " + theSum1 + "<br />");
var getDifference = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 !== 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
document.write("5 - 2 = " + getDifference(5) + "<br />");
document.write("5 - 2 - 3 = " + getDifference(5, 2, 3) + "<br />");
// Array Functions
var sumAll = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = nums.reduce(function (a, b) { return a + b; }, 0);
    document.write("Sum :" + sum + "<br />");
};
sumAll(1, 2, 3, 4, 5);
// Arrow functions
var addOne = function (x) { return x + 1; };
document.write("1 + 1 = " + addOne(1) + "<br />");
