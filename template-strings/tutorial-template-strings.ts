var multStr = 'I got on for many lines<br />';
document.write(multStr);
//Make the letters bold
document.write(`<b>${multStr}</b>`)

//Spread Operator

function theSum(x, y, z): void{
  document.write("Sum : " + (x + y + z) + "<br />");
}

var args = [4,5,6];

theSum(...args);

//Numerated Types

enum Emotion {
  Happy = 1,
  Sad,
  Angry
}
  var myFeeling = Emotion.Happy
  myFeeling = 1;
