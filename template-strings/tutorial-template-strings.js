var multStr = 'I got on for many lines<br />';
document.write(multStr);
//Make the letters bold
document.write("<b>" + multStr + "</b>");
//Spread Operator
function theSum(x, y, z) {
    document.write("Sum : " + (x + y + z) + "<br />");
}
var args = [4, 5, 6];
theSum.apply(void 0, args);
//Numerated Types
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
var myFeeling = Emotion.Happy;
myFeeling = 1;
