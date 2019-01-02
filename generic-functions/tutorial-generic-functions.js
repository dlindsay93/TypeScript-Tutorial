function GetType(val) {
    return typeof (val);
}
var aStr = "A String";
var aNum = 10;
document.write(GetType(aStr) + "<br />");
document.write(GetType(aNum) + "<br />");
//Generic Classes
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
aNumber.add = function (x, y) { return x + y; };
document.write("5 + 4 = " + aNumber.add(5, 4) + "<br />");
// Generic Strings
var aStrNum = new GenericNumber();
aStrNum.add = function (x, y) { return String(Number(x) + Number(y)); };
document.write("5 + 6 = " + aStrNum.add(5, 6) + "<br />");
