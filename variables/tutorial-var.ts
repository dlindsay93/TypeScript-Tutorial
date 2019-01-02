var myName: string = "David";
var myAge: number = 25;
var canVote: boolean = true;
var anything: any = "dog";
anything = 2;

document.getElementById("tsStuff-var").innerHTML = "My Name is" + myName;

document.write("canVote is a " + typeof(canVote)+ "<br />")
document.write("myname is a " + typeof(myName)+ "<br />")
document.write("anything is a " + typeof(anything)+ "<br />")

var strToNum: number = parseInt("5");

var numToStr: number = 5
document.write("numToStr is a " + typeof(numToStr.toString() + "<br /"));

const PI = 3.1459;
