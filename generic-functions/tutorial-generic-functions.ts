function GetType<T>(val: T): string{
  return typeof(val);
}

var aStr = "A String";
var aNum = 10;

document.write(GetType(aStr) + "<br />");
document.write(GetType(aNum) + "<br />");

//Generic Classes

class GenericNumber<T>{
  add: (val1: T, val2: T) => T; )

}

var aNumber = new GenericNumber<number>();

aNumber.add = function(x, y){return x + y;};

document.write("5 + 4 = " + aNumber.add(5,4) + "<br />");

// Generic Strings

var aStrNum = new GenericNumber<string>();

aStrNum.add = function(x, y){return String(Number(x) + Number(y));};

document.write("5 + 6 = " + aStrNum.add(5,6) + "<br />");
