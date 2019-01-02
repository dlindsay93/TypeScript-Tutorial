var randArry = [5, 6, 7, 8];
for (var val in randArry) {
    document.write(val + "<br />");
}
var strArray = randArry.map(String);
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    document.write(val + "<br />");
}
