var randArry = [5,6,7,8];

for(var val in randArry){
  document.write(val + "<br />");
}

var strArray = randArry.map(String);

for(var val of strArray){
  document.write(val + "<br />");
}
